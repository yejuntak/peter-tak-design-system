# Using Plot React

React is the canonical component implementation. Import typed components from `@peter-tak/design-system` and load `@peter-tak/design-system/styles.css`. Use React 19 with the shadcn/Radix primitive adapters; do not generate a parallel legacy HTML implementation or raw-HTML wrapper.

Read `docs/component-map.md` for complete coverage and `docs/react-api.md` for component anatomy. Preserve existing named semantic classes and design tokens when composing children. Prefer existing exports before introducing a new family.

- Compose tokens → atoms → molecules → organisms → templates
- Use semantic foreground/background pairs; `--muted` is text, not a surface
- Preserve focus, keyboard, disabled/loading, reduced-motion and theme behavior
- Provide accessible names for icon controls, inputs, dialogs, ranges and meaningful images
- Keep callbacks explicit and do not invent backend behavior in examples
- Use a three-action recommendation response only when its accept/modify/dismiss meanings fit the product; retain logical DOM order
- Show lab interpretation alongside values; compact views must retain trend and a route to detail
- Frame progress as completed/target; do not infer clinical meaning from a numeric value or trend direction
- Qualitative confidence labels are a presentation choice, not validation evidence or a universal ban on quantitative context
- Fonts are not bundled; do not copy proprietary binaries under this repository's MIT license
- Keep portfolio server code, private project payloads, credentials and unrelated assets out of this package

Run lint, TypeScript, unit tests, library/docs builds, clean consumer validation and Chromium/WebKit checks before release. A green unit suite does not establish visual parity; inspect matched screenshots and state the scope of browser evidence accurately.
