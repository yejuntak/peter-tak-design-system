import { readFileSync, writeFileSync, rmSync } from "node:fs";
// Vite extracts the runtime CSS. Keep the declaration graph side-effect free,
// and type the documented stylesheet subpath for strict package consumers.
const declaration = readFileSync("dist/index.d.ts", "utf8");
if (!declaration.startsWith('import "./styles.css";'))
  throw new Error("Unexpected declaration entry");
writeFileSync(
  "dist/index.d.ts",
  declaration
    .replace(/^import "\.\/styles\.css";\r?\n/, "")
    .replace(/^\/\/# sourceMappingURL=.*$/m, ""),
);
rmSync("dist/index.d.ts.map", { force: true });
writeFileSync("dist/styles.css.d.ts", "export {};\n");
