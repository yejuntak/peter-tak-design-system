import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "e2e",
  timeout: 45000,
  workers: 2,
  retries: 1,
  reporter: [
    ["list"],
    ["html", { outputFolder: "evidence/browser-report", open: "never" }],
  ],
  outputDir: "evidence/browser-results",
  use: {
    baseURL: "http://127.0.0.1:4173/peter-tak-design-system/",
    trace: "retain-on-failure",
    reducedMotion: "reduce",
  },
  webServer: {
    command: "node scripts/serve-docs.mjs",
    url: "http://127.0.0.1:4173/peter-tak-design-system/",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "chromium-desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 900 },
      },
    },
    {
      name: "chromium-mobile",
      use: { ...devices["Pixel 5"], viewport: { width: 390, height: 844 } },
    },
    {
      name: "webkit-mobile",
      use: { ...devices["iPhone 13"], viewport: { width: 390, height: 844 } },
    },
  ],
});
