import { execFileSync } from "node:child_process";
import {
  readFileSync,
  writeFileSync,
  mkdtempSync,
  mkdirSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
import assert from "node:assert/strict";
const env = {
  ...process.env,
  npm_config_cache:
    process.env.npm_config_cache || join(tmpdir(), "plot-npm-cache"),
};
const packed = JSON.parse(
  execFileSync(
    "npm",
    ["pack", "--json", "--cache", join(tmpdir(), "plot-npm-cache")],
    { encoding: "utf8", env },
  ),
)[0];
const allowed =
  /^(dist\/|tokens\/|package\.json$|README\.md$|LICENSE$|THIRD_PARTY_NOTICES\.md$)/;
for (const file of packed.files) {
  assert(allowed.test(file.path), `Unexpected package payload: ${file.path}`);
  assert(
    !/\.(go|gohtml|woff2?|ttf|otf)$/.test(file.path),
    `Forbidden package payload: ${file.path}`,
  );
}
const pkg = JSON.parse(readFileSync("package.json", "utf8"));
assert(pkg.peerDependencies.react && pkg.peerDependencies["react-dom"]);
assert(!pkg.dependencies.react && !pkg.dependencies["react-dom"]);
const bundle = readFileSync("dist/index.js", "utf8");
for (const marker of [
  "/private/",
  "ProjectData",
  "@gmail.com",
  "/static/research/",
  "original NDA",
  "anonymized data",
])
  assert(!bundle.includes(marker), `Portfolio material in package: ${marker}`);
assert(!bundle.includes("react.production.js"), "React must be external");
assert(readFileSync("dist/styles.css", "utf8").includes("--color-text-muted"));
assert(!readFileSync("dist/styles.css", "utf8").includes("@font-face"));
const temporary = mkdtempSync(join(tmpdir(), "plot-consumer-"));
try {
  if (process.env.CI) {
    writeFileSync(
      join(temporary, "package.json"),
      JSON.stringify({
        name: "plot-consumer-smoke",
        private: true,
        type: "module",
        dependencies: {
          "@peter-tak/design-system": `file:${resolve(packed.filename)}`,
          react: "19.2.0",
          "react-dom": "19.2.0",
          "@types/react": pkg.devDependencies["@types/react"],
          "@types/react-dom": pkg.devDependencies["@types/react-dom"],
        },
      }),
    );
    execFileSync(
      "npm",
      [
        "install",
        "--ignore-scripts",
        "--no-audit",
        "--no-fund",
        "--cache",
        join(tmpdir(), "plot-npm-cache"),
      ],
      { cwd: temporary, env, stdio: "inherit" },
    );
    writeFileSync(
      join(temporary, "index.mjs"),
      `import { createElement } from "react"; import { renderToString } from "react-dom/server"; import { Button, LabResult, Header } from "@peter-tak/design-system"; if (!renderToString(createElement(Button, null, "Consumer" )).includes("button-primary")) throw new Error("Consumer render failed"); console.log("Clean installed consumer SSR passed", typeof LabResult, typeof Header);`,
    );
    execFileSync("node", ["index.mjs"], { cwd: temporary, stdio: "inherit" });
    writeFileSync(
      join(temporary, "consumer.tsx"),
      'import { Button, LabResult, type LabResultProps } from "@peter-tak/design-system"; import "@peter-tak/design-system/styles.css"; const button = <Button size="icon" aria-label="Settings">+</Button>; const data: LabResultProps = {name:"Example",value:1,unit:"unit",status:"ok",statusLabel:"Example",explanation:"Example",trend:{direction:"flat",label:"Example"},range:{position:50,label:"Example",lowLabel:"0",highLabel:"2"}}; console.log(button, <LabResult {...data}/>);',
    );
    writeFileSync(
      join(temporary, "root-only.tsx"),
      'import { Button } from "@peter-tak/design-system"; console.log(<Button>Root only</Button>);',
    );
    execFileSync(
      resolve("node_modules/.bin/tsc"),
      [
        "--noEmit",
        "--jsx",
        "react-jsx",
        "--moduleResolution",
        "bundler",
        "--module",
        "esnext",
        "--target",
        "es2022",
        "--strict",
        "--noUncheckedSideEffectImports",
        "--types",
        "react,react-dom",
        join(temporary, "consumer.tsx"),
        join(temporary, "root-only.tsx"),
      ],
      { cwd: temporary, stdio: "inherit" },
    );
    execFileSync(
      resolve("node_modules/.bin/tsc"),
      [
        "--noEmit",
        "--jsx",
        "react-jsx",
        "--moduleResolution",
        "nodenext",
        "--module",
        "nodenext",
        "--target",
        "es2022",
        "--strict",
        "--noUncheckedSideEffectImports",
        "--types",
        "react,react-dom",
        join(temporary, "consumer.tsx"),
        join(temporary, "root-only.tsx"),
      ],
      { cwd: temporary, stdio: "inherit" },
    );
  } else {
    const { renderToString } = await import("react-dom/server");
    const { createElement } = await import("react");
    const { Button } = await import("../dist/index.js");
    assert(
      renderToString(createElement(Button, null, "Consumer")).includes(
        "button-primary",
      ),
    );
  }
  mkdirSync("evidence", { recursive: true });
  writeFileSync(
    "evidence/package-manifest.json",
    JSON.stringify(
      {
        filename: packed.filename,
        size: packed.size,
        shasum: packed.shasum,
        integrity: packed.integrity,
        files: packed.files.map((f) => f.path),
        cleanConsumer: Boolean(process.env.CI),
      },
      null,
      2,
    ),
  );
  console.log(
    `Package boundary passed: ${packed.files.length} allowlisted files, React external, no font binaries or portfolio data`,
  );
} finally {
  rmSync(temporary, { recursive: true, force: true });
  rmSync(packed.filename, { force: true });
}
