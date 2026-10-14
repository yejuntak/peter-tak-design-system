import { expect, test } from "@playwright/test";
import { mkdirSync } from "node:fs";
test.use({ reducedMotion: "no-preference" });
test("normal-motion updates, dynamic overflow, keyboard focus and modal return paths", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("index.html?component-review");
  await page.getByRole("button", { name: "Start metric", exact: true }).click();
  const metric = page.locator(".m-metric-value");
  const strong = metric.locator("strong");
  await expect
    .poll(async () => Number(await strong.textContent()))
    .toBeGreaterThan(0);
  await page
    .getByRole("button", { name: "Update metric", exact: true })
    .click();
  await expect(metric).toHaveText("99%");
  await page.waitForTimeout(1250);
  await expect(metric).toHaveText("99%");
  await page
    .getByRole("button", { name: "Remove nested value", exact: true })
    .click();
  await expect(metric).toHaveText("%");
  await expect(page.getByRole("progressbar")).toHaveAttribute(
    "aria-valuemax",
    "10",
  );
  expect(
    await page
      .locator(".plot-progress-indicator")
      .evaluate((node) => (node as HTMLElement).style.transform),
  ).toBe("translateX(-50%)");
  const table = page.getByRole("region", { name: "Dynamic columns" });
  await expect(table).not.toHaveAttribute("tabindex");
  await page.getByRole("button", { name: "Toggle columns" }).click();
  await expect(table).toHaveAttribute("tabindex", "0");
  await expect(table).toHaveAccessibleDescription(/Scroll horizontally/);
  await table.focus();
  await page.keyboard.press("End");
  await page.keyboard.press("ArrowRight");
  await expect
    .poll(() => table.evaluate((node) => node.scrollLeft))
    .toBeGreaterThan(0);
  await page.getByRole("button", { name: "Toggle columns" }).click();
  await expect(table).not.toHaveAttribute("tabindex");
  for (const name of ["First command", "Second command"]) {
    const button = page.getByRole("button", { name });
    await button.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("combobox")).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(button).toBeFocused();
  }
  await page.getByRole("button", { name: "Second command" }).focus();
  await page.keyboard.press("Tab");
  await expect(page.getByText("Tooltip tag", { exact: true })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByText("Tooltip strong", { exact: true })).toBeFocused();
  await page.getByRole("button", { name: "Before comparison" }).focus();
  await page.keyboard.press("Tab");
  const range = page.getByRole("slider", { name: "Review comparison" });
  await expect(range).toBeFocused();
  const frame = page.locator(".o-comparison");
  await expect(frame).toHaveCSS("outline-style", "solid");
  await expect(frame).toHaveCSS("outline-width", "2px");
  await page.keyboard.press("ArrowRight");
  await expect(range).toHaveValue("51");
  await page.keyboard.press("ArrowLeft");
  await expect(range).toHaveValue("50");
  await page.keyboard.press("Home");
  await expect(range).toHaveValue("0");
  await page.keyboard.press("End");
  await expect(range).toHaveValue("100");
  await frame.scrollIntoViewIfNeeded();
  mkdirSync("evidence/screens", { recursive: true });
  await page.screenshot({
    path: `evidence/screens/${info.project.name}-review-keyboard-focus.jpg`,
    type: "jpeg",
    quality: 85,
  });
  await range.blur();
  await expect(frame).toHaveCSS("outline-style", "none");
  expect(errors).toEqual([]);
});
