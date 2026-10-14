/// <reference types="vite/client" />
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import "./catalog.css";
import "../screens/vita-health/_layout.css";
import { VitaDemo } from "./vita/shared";
import { ThemeProvider } from "../src";
import Catalog from "./catalog";
const pages = import.meta.glob<{ default: React.ComponentType }>([
  "./vita/*.tsx",
  "!./vita/shared.tsx",
]);
const vita = location.pathname.includes("/screens/vita-health/");
const name =
  location.pathname
    .split("/")
    .pop()
    ?.replace(/\.html$/, "") || "index";
const loader = pages[`./vita/${name}.tsx`];
const Screen = loader ? lazy(loader) : null;
if (vita) document.body.classList.add("vita-app");
createRoot(document.getElementById("root")!).render(
  vita && Screen ? (
    <ThemeProvider defaultTheme="light">
      <VitaDemo>
        <Suspense fallback={<p role="status">Loading example screen…</p>}>
          <Screen />
        </Suspense>
      </VitaDemo>
    </ThemeProvider>
  ) : (
    <Catalog />
  ),
);
