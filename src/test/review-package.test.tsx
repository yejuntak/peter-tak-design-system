import { afterEach, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { readFileSync } from "node:fs";
import { ThemeProvider, ThemeToggle } from "../index.js";
afterEach(() => {
  vi.restoreAllMocks();
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});
it.each([false, true])(
  "hydrates the persisted theme without replacing server DOM or transiently overwriting storage (StrictMode=%s)",
  async (strict) => {
    const app = (
      <ThemeProvider storageKey="theme">
        <ThemeToggle />
      </ThemeProvider>
    );
    const tree = strict ? <StrictMode>{app}</StrictMode> : app;
    const container = document.createElement("div");
    container.innerHTML = renderToString(tree);
    document.body.append(container);
    const button = container.querySelector("button");
    localStorage.setItem("theme", "dark");
    const writes = vi.spyOn(Storage.prototype, "setItem");
    const errors = vi.fn();
    let root: ReturnType<typeof hydrateRoot>;
    await act(async () => {
      root = hydrateRoot(container, tree, { onRecoverableError: errors });
    });
    expect(errors).not.toHaveBeenCalled();
    expect(container.querySelector("button")).toBe(button);
    expect(button).toHaveAccessibleName("Theme: dark. Switch to system");
    expect(
      writes.mock.calls.every(
        ([key, value]) => key !== "theme" || value === "dark",
      ),
    ).toBe(true);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    await act(async () => root.unmount());
    container.remove();
  },
);
it("restores changed storage keys without overwriting them and keeps defaultTheme initial-only", () => {
  localStorage.setItem("a", "light");
  localStorage.setItem("b", "dark");
  const writes = vi.spyOn(Storage.prototype, "setItem");
  const { rerender } = render(
    <ThemeProvider storageKey="a">
      <ThemeToggle />
    </ThemeProvider>,
  );
  rerender(
    <ThemeProvider storageKey="b">
      <ThemeToggle />
    </ThemeProvider>,
  );
  expect(screen.getByRole("button")).toHaveAccessibleName(
    "Theme: dark. Switch to system",
  );
  expect(
    writes.mock.calls
      .filter(([key]) => key === "b")
      .every(([, value]) => value === "dark"),
  ).toBe(true);
  fireEvent.click(screen.getByRole("button"));
  rerender(
    <ThemeProvider storageKey="b" defaultTheme="light">
      <ThemeToggle />
    </ThemeProvider>,
  );
  expect(screen.getByRole("button")).toHaveAccessibleName(
    "Theme: system. Switch to light",
  );
  expect(localStorage.getItem("b")).toBe("system");
});
it.each(["invalid", null])(
  "uses the declared default for missing or invalid storage (%s)",
  (saved) => {
    if (saved) localStorage.setItem("theme", saved);
    render(
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <ThemeToggle />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveAccessibleName(
      "Theme: dark. Switch to system",
    );
    expect(localStorage.getItem("theme")).toBe("dark");
  },
);
it("all exported JSON colors resolve to the canonical CSS light-mode values", () => {
  const json = JSON.parse(readFileSync("tokens/color.json", "utf8"));
  const css = readFileSync("css/tokens.css", "utf8").replace(
    /\/\*[\s\S]*?\*\//g,
    "",
  );
  const root = css.match(/:root\s*\{([^}]+)\}/)![1];
  const variables = Object.fromEntries(
    [...root.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [
      m[1],
      m[2].trim(),
    ]),
  );
  const resolveCss = (value: string): string =>
    value.replace(/var\((--[\w-]+)\)/g, (_, name) =>
      resolveCss(variables[name]),
    );
  const resolveJson = (value: string): string =>
    value.replace(/\{([^}]+)\}/g, (_, path: string) =>
      resolveJson(
        path.split(".").reduce((value, key) => value[key], json).value,
      ),
    );
  for (const tier of ["primitive", "semantic", "alias"])
    for (const [name, token] of Object.entries(json.color[tier]) as [
      string,
      { value?: string; css?: string },
    ][]) {
      if (!token.value) continue;
      expect(resolveJson(token.value), `${tier}.${name}`).toBe(
        resolveCss(variables[token.css || `--${name}`]),
      );
    }
  // The semantic text roles corrected in the visual repair remain at least AA.
  const luminance = (hsl: string) => {
    const [, hs, ss, ls] = hsl.match(/hsl\(([\d.]+) ([\d.]+)% ([\d.]+)%\)/)!;
    const h = +hs / 30,
      s = +ss / 100,
      l = +ls / 100,
      a = s * Math.min(l, 1 - l);
    const rgb = [0, 8, 4].map((n) => {
      const k = (n + h) % 12;
      const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
      return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  };
  const bg = luminance(resolveCss(variables["--color-bg"]));
  for (const role of [
    "text-primary",
    "text-body",
    "text-muted",
    "text-placeholder",
    "good-text",
    "warn-text",
    "action-text",
  ]) {
    const fg = luminance(resolveJson(json.color.semantic[role].value));
    expect(
      (Math.max(bg, fg) + 0.05) / (Math.min(bg, fg) + 0.05),
      role,
    ).toBeGreaterThanOrEqual(4.5);
  }
});
it("does not reset an in-session theme when the uncontrolled default changes without storage", () => {
  const { rerender } = render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );
  fireEvent.click(screen.getByRole("button"));
  rerender(
    <ThemeProvider defaultTheme="dark">
      <ThemeToggle />
    </ThemeProvider>,
  );
  expect(screen.getByRole("button")).toHaveAccessibleName(
    "Theme: light. Switch to dark",
  );
});
