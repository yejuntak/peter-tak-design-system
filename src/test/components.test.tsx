import { describe, it, expect, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Plot from "../index.js";
import { useState } from "react";
describe("Reusable component API", () => {
  it("inline media reserves supplied dimensions before its lazy asset loads", () => {
    render(
      <Plot.InlineMedia
        src="/example.svg"
        alt="Example"
        width={880}
        height={580}
      />,
    );
    expect(screen.getByRole("img")).toHaveAttribute("width", "880");
    expect(screen.getByRole("img")).toHaveAttribute("height", "580");
  });
  it("reference links use the canonical styled anatomy", () => {
    render(
      <Plot.ReferenceLink href="#sample" label="Reference">
        Detail
      </Plot.ReferenceLink>,
    );
    expect(screen.getByRole("link")).toHaveClass("o-section-ref-link");
    expect(screen.getByText("Reference")).toHaveClass("o-section-ref-label");
    expect(screen.getByText("Detail")).toHaveClass("o-section-ref-note");
  });
  it("enhanced filters track wrapped geometry, changed options and no selection", () => {
    let update = () => {};
    vi.stubGlobal(
      "ResizeObserver",
      class {
        constructor(callback: () => void) {
          update = callback;
        }
        observe() {}
        disconnect() {}
      },
    );
    const options = [
      { value: "a", label: "All" },
      { value: "b", label: "Other" },
    ];
    const change = vi.fn();
    const { container, rerender } = render(
      <Plot.FilterChips
        enhanced
        options={options}
        value="b"
        onValueChange={change}
      />,
    );
    const selected = screen.getByRole("button", { name: "Other" });
    Object.defineProperties(selected, {
      offsetLeft: { value: 7, configurable: true },
      offsetTop: { value: 40, configurable: true },
      offsetWidth: { value: 90, configurable: true },
      offsetHeight: { value: 32, configurable: true },
    });
    act(update);
    expect(screen.getByRole("group")).toHaveAttribute(
      "data-fr-enhanced",
      "true",
    );
    expect(container.querySelector(".m-filter-row-indicator")).toHaveStyle({
      transform: "translate(7px, 40px)",
      width: "90px",
      height: "32px",
    });
    Object.defineProperty(selected, "offsetWidth", {
      value: 110,
      configurable: true,
    });
    rerender(
      <Plot.FilterChips
        enhanced
        options={[options[0], { ...options[1], label: "Longer", count: 2 }]}
        value="b"
        onValueChange={change}
      />,
    );
    expect(container.querySelector(".m-filter-row-indicator")).toHaveStyle({
      width: "110px",
    });
    rerender(
      <Plot.FilterChips
        enhanced
        options={options}
        value="missing"
        onValueChange={change}
      />,
    );
    expect(screen.getByRole("group")).not.toHaveAttribute("data-fr-enhanced");
    expect(container.querySelector(".m-filter-row-indicator")).toHaveStyle({
      width: "0px",
      height: "0px",
    });
    vi.unstubAllGlobals();
  });
  it("defaults icons to safe bare semantics and loading to one content layer", () => {
    const { container } = render(
      <>
        <Plot.Button size="icon" aria-label="Settings">
          +
        </Plot.Button>
        <Plot.Button loading>Save</Plot.Button>
      </>,
    );
    expect(screen.getByRole("button", { name: "Settings" })).not.toHaveClass(
      "button-primary",
    );
    expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
    expect(container.querySelectorAll(".button-content")).toHaveLength(1);
  });
  it("prevents disabled asChild links from activating without changing the anchor", () => {
    const click = vi.fn();
    render(
      <Plot.Button asChild disabled onClick={click}>
        <a href="#target">Link button</a>
      </Plot.Button>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(link);
    expect(click).not.toHaveBeenCalled();
  });
  it("disabled asChild suppresses the child anchor handler too", () => {
    const child = vi.fn();
    const parent = vi.fn();
    render(
      <Plot.Button asChild disabled onClick={parent}>
        <a href="#target" onClick={child}>
          Disabled child
        </a>
      </Plot.Button>,
    );
    fireEvent.click(screen.getByRole("link"));
    expect(child).not.toHaveBeenCalled();
    expect(parent).not.toHaveBeenCalled();
  });
  it("keeps quiet and arrow links independent", () => {
    render(
      <>
        <Plot.Link className="link-quiet">Quiet</Plot.Link>
        <Plot.Link className="link-arrow">Arrow</Plot.Link>
      </>,
    );
    expect(screen.getByText("Quiet")).not.toHaveClass("link");
    expect(screen.getByText("Arrow")).not.toHaveClass("link");
  });
  it.each([
    { values: [] },
    { values: [4] },
    { values: [3, -1, 8] },
    { values: [NaN, -1] },
  ])("sparkline handles $values without invalid coordinates", ({ values }) => {
    const { container } = render(
      <Plot.Sparkline values={values} variant="up" />,
    );
    expect(container.innerHTML).not.toMatch(/NaN|Infinity/);
    expect(container.querySelectorAll(".ds-sparkline-dot")).toHaveLength(
      values.some((v) => Number.isFinite(v) && v !== -1) ? 1 : 0,
    );
  });
  it.each([
    "ai",
    "voice-ai",
    "dashboard",
    "workflow",
    "admin",
    "ops",
    "banking",
    "payments",
    "lending",
    "wealth",
    "clinical",
    "health",
    "clinical-ai",
    "system",
    "components",
    "commerce",
    "education",
  ] as const)("retains thumbnail visual kind %s", (visualKind) => {
    const { container } = render(
      <Plot.CardThumbnail title="Example" visualKind={visualKind} />,
    );
    expect(container.firstChild).toHaveAttribute("data-kind", visualKind);
  });
  it("thumbnail frames preserve meaningful first alt and decorative subsequent frames", () => {
    render(
      <Plot.CardThumbnail title="Example" frames={["one.svg", "two.svg"]} />,
    );
    expect(screen.getByAltText("Example — project screen")).toHaveAttribute(
      "src",
      "one.svg",
    );
    expect(document.querySelector('img[src="two.svg"]')).toHaveAttribute(
      "alt",
      "",
    );
  });
  it("tabs own keyboard selection and only mount the selected panel", async () => {
    const u = userEvent.setup();
    render(
      <Plot.Tabs defaultValue="a">
        <Plot.TabsList aria-label="Tabs">
          <Plot.TabsTrigger value="a">A</Plot.TabsTrigger>
          <Plot.TabsTrigger value="b">B</Plot.TabsTrigger>
        </Plot.TabsList>
        <Plot.TabsContent value="a">One</Plot.TabsContent>
        <Plot.TabsContent value="b">Two</Plot.TabsContent>
      </Plot.Tabs>,
    );
    screen.getByRole("tab", { name: "A" }).focus();
    await u.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "B" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
  });
  it("dialog and lightbox close repeatedly and restore focus", async () => {
    const u = userEvent.setup();
    render(
      <Plot.InlineMedia
        src="example.svg"
        alt="Example image"
        caption="Caption"
      />,
    );
    const trigger = screen.getByRole("button", {
      name: "Expand Example image",
    });
    for (let i = 0; i < 2; i++) {
      await u.click(trigger);
      expect(screen.getByRole("dialog")).toHaveAccessibleName("Example image");
      await u.keyboard("{Escape}");
      await waitFor(() => expect(trigger).toHaveFocus());
    }
  });
  it("mobile menu uses correct nav classes and restores trigger focus", async () => {
    const u = userEvent.setup();
    render(
      <Plot.Header
        brand="Example"
        items={[{ label: "One", href: "#one", current: true }]}
      />,
    );
    expect(
      document.querySelector(".o-header-nav-link.is-active"),
    ).toHaveTextContent("One");
    const trigger = screen.getByRole("button", { name: "Open navigation" });
    await u.click(trigger);
    expect(screen.getByRole("dialog")).toHaveAccessibleName("Navigation");
    await u.keyboard("{Escape}");
    await waitFor(() => expect(trigger).toHaveFocus());
  });
  it("theme cycles system/light/dark even when storage is blocked", async () => {
    const u = userEvent.setup();
    const blocked = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("blocked");
      });
    render(
      <Plot.ThemeProvider storageKey="example">
        <Plot.ThemeToggle />
      </Plot.ThemeProvider>,
    );
    await u.click(screen.getByRole("button"));
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    await u.click(screen.getByRole("button"));
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    await u.click(screen.getByRole("button"));
    expect(document.documentElement).not.toHaveAttribute("data-theme");
    blocked.mockRestore();
  });
  it("comparison is controlled and reports values", () => {
    const change = vi.fn();
    function Example() {
      const [value, setValue] = useState(50);
      return (
        <Plot.ComparisonSlider
          before="Original"
          after="Corrected"
          value={value}
          onValueChange={(v) => {
            change(v);
            setValue(v);
          }}
        />
      );
    }
    const { container } = render(<Example />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "70" } });
    expect(change).toHaveBeenCalledWith(70);
    expect(container.firstChild).toHaveStyle({ "--comparison-pos": "70%" });
  });
  it("table hint and tab stop exist only when overflow is real", () => {
    let update = () => {};
    vi.stubGlobal(
      "ResizeObserver",
      class {
        constructor(fn: () => void) {
          update = fn;
        }
        observe() {}
        disconnect() {}
      },
    );
    render(
      <Plot.TableRegion label="Table">
        <table>
          <tbody>
            <tr>
              <td>Example</td>
            </tr>
          </tbody>
        </table>
      </Plot.TableRegion>,
    );
    const region = screen.getByRole("region");
    expect(region).not.toHaveAttribute("tabindex");
    Object.defineProperties(region, {
      scrollWidth: { value: 640, configurable: true },
      clientWidth: { value: 320, configurable: true },
    });
    act(update);
    expect(region).toHaveAttribute("tabindex", "0");
    expect(region).toHaveAccessibleDescription(/Scroll horizontally/);
    vi.unstubAllGlobals();
  });
});
