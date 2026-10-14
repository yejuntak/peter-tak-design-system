import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";
const pages = [
  "index",
  "onboarding",
  "dashboard",
  "journey",
  "labs",
  "lab-interpretation",
  "care-plan",
  "messages",
  "progress-framing",
  "recommendation",
];
for (const name of pages)
  test(`Vita ${name} retains its React route, links and visible content`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const path = `screens/vita-health/${name}.html`;
    await page.goto(path);
    await expect(page.locator("#root main")).toHaveCount(1);
    await expect(page.locator("#root main")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator(".vita-demo-disclaimer")).toContainText(
      "nothing is sent",
    );
    await page.evaluate(() => document.fonts.ready);
    expect(errors).toEqual([]);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 2,
    );
    expect(overflow, "page must fit viewport").toBe(false);
    for (const href of await page
      .locator('a[href$=".html"]')
      .evaluateAll((nodes) =>
        nodes.map((node) => (node as HTMLAnchorElement).href),
      )) {
      const response = await page.request.get(href);
      expect(response.ok(), href).toBe(true);
    }
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (img) =>
              (img as HTMLImageElement).complete &&
              (img as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    await page.evaluate(() => scrollTo(0, 0));
    mkdirSync("evidence/screens", { recursive: true });
    await page.screenshot({
      path: `evidence/screens/${info.project.name}-corrected-${name}.jpg`,
      type: "jpeg",
      quality: 75,
    });
  });
test("root and docs catalog work under a non-root base", async ({
  page,
}, info) => {
  for (const path of ["index.html", "docs/index.html"]) {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(path);
    await expect(
      page.getByRole("heading", { name: "One system. Reusable components." }),
    ).toBeVisible();
    expect(
      await page
        .getByRole("link", {
          name: "Vita screens",
          exact: true,
          includeHidden: true,
        })
        .first()
        .evaluate((link) => (link as HTMLAnchorElement).pathname),
    ).toContain("/peter-tak-design-system/screens/");
    expect(errors).toEqual([]);
  }
  await page.locator("#atoms").scrollIntoViewIfNeeded();
  for (const theme of ["light", "dark"]) {
    await page.evaluate(
      (value) => document.documentElement.setAttribute("data-theme", value),
      theme,
    );
    await page.screenshot({
      path: `evidence/screens/${info.project.name}-catalog-${theme}.jpg`,
      type: "jpeg",
      quality: 80,
    });
    const icon = page.getByRole("button", { name: "Settings", exact: true });
    const rect = await icon.boundingBox();
    expect(rect?.width).toBe(44);
    expect(rect?.height).toBe(44);
    const colors = await page
      .locator(".m-card-header-meta")
      .first()
      .evaluate((node) => ({
        color: getComputedStyle(node).color,
        bg: getComputedStyle(document.body).backgroundColor,
      }));
    expect(colors.color).not.toBe(colors.bg);
  }
  await page.locator("#health").scrollIntoViewIfNeeded();
  await page.screenshot({
    path: `evidence/screens/${info.project.name}-health.jpg`,
    type: "jpeg",
    quality: 80,
  });
});
test("wrapped filters and Vita actions retain visible anatomy", async ({
  page,
}, info) => {
  await page.goto("docs/index.html");
  const filters = page.getByRole("group", { name: "Filter items" });
  await filters.evaluate((node) => {
    (node as HTMLElement).style.maxWidth = "120px";
  });
  const last = filters.getByRole("button").last();
  await last.click();
  await expect(filters).toHaveAttribute("data-fr-enhanced", "true");
  const selected = await last.boundingBox();
  const indicator = await filters
    .locator(".m-filter-row-indicator")
    .boundingBox();
  expect(indicator?.height).toBeGreaterThan(20);
  expect(indicator?.y).toBeCloseTo(selected!.y, 0);
  expect(indicator?.x).toBeCloseTo(selected!.x, 0);
  expect(indicator?.width).toBeCloseTo(selected!.width, 0);
  await page.screenshot({
    path: `evidence/screens/${info.project.name}-filter-wrapped.jpg`,
    type: "jpeg",
    quality: 80,
  });
  for (const [selector, name] of [
    [".o-recommendation-card", "recommendation-actions"],
    ["#health [role=radiogroup]", "schedule"],
  ]) {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.screenshot({
      path: `evidence/screens/${info.project.name}-${name}.jpg`,
      type: "jpeg",
      quality: 80,
    });
  }
});
test("dialog, lightbox, radio, tabs and local Vita actions work", async ({
  page,
}) => {
  await page.goto("docs/index.html");
  await page.getByRole("button", { name: "Open dialog", exact: true }).click();
  await expect(
    page.getByRole("dialog", { name: "Example dialog" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open dialog", exact: true }),
  ).toBeFocused();
  await page
    .getByRole("button", {
      name: "Expand Existing reference-screen illustration",
    })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  const radios = page
    .getByRole("radiogroup", { name: "Example review" })
    .getByRole("radio");
  await radios.first().focus();
  await page.keyboard.press("ArrowRight");
  await expect(radios.nth(1)).toBeChecked();
  await page.getByRole("tab", { name: "Overview", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tabpanel")).toContainText("Details panel");
  await page.goto("screens/vita-health/messages.html");
  await page.getByRole("radio", { name: /Mon/ }).click();
  await page.getByRole("button", { name: "Confirm slot" }).click();
  await expect(page.getByRole("dialog")).toContainText(
    "did not send a message, book an appointment or change a sample plan",
  );
});
test("mobile navigation has no breakpoint gap", async ({ page }, info) => {
  await page.goto("docs/index.html");
  for (const width of [360, 760, 761, 900, 901]) {
    await page.setViewportSize({ width, height: 844 });
    const menu = page.getByRole("button", { name: "Open navigation" });
    if (width <= 900) {
      await expect(menu).toBeVisible();
      await menu.click();
      await expect(
        page.getByRole("dialog", { name: "Navigation" }),
      ).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(menu).toBeFocused();
    } else await expect(page.locator(".o-header-nav")).toBeVisible();
    await page.screenshot({
      path: `evidence/screens/${info.project.name}-header-${width}.jpg`,
      type: "jpeg",
      quality: 75,
    });
  }
});
