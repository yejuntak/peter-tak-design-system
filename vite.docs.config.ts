import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { readdirSync, cpSync, mkdirSync } from "node:fs";
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-existing-public-assets",
      closeBundle() {
        mkdirSync("site/screens/vita-health/assets", { recursive: true });
        cpSync(
          "screens/vita-health/assets",
          "site/screens/vita-health/assets",
          { recursive: true },
        );
      },
    },
  ],
  base: "./",
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  build: {
    outDir: "site",
    rollupOptions: {
      input: [
        "index.html",
        "docs/index.html",
        ...readdirSync("screens/vita-health")
          .filter((name) => name.endsWith(".html") && !name.startsWith("_"))
          .map((name) => `screens/vita-health/${name}`),
      ],
    },
  },
});
