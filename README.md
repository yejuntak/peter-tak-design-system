# Plot · Peter Tak Design System

The existing design system, migrated to typed React components and shadcn/Radix interaction primitives. The canonical implementation is now React. The original monochrome/amber visual language, semantic CSS tokens, motion and Vita reference patterns remain part of the same system.

## Use the package

Requires React and React DOM 19. Build or install from this repository; version 2.0.0 is the source package version, not a claim that it has been published to npm.

```sh
npm ci
npm run check
npm run test:package
npm pack
```

Install the resulting tarball in your application, then:

```tsx
import {
  Button,
  ThemeProvider,
  ThemeToggle,
  TooltipProvider,
} from "@peter-tak/design-system";
import "@peter-tak/design-system/styles.css";

export function Example() {
  return (
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Button onClick={() => console.log("Local action")}>Continue</Button>
        <ThemeToggle />
      </TooltipProvider>
    </ThemeProvider>
  );
}
```

React/ReactDOM are external peer dependencies. Built ESM, declarations and CSS are included in the package; the portfolio server, datasets, pages and assets are not.

## Component coverage

- Atoms: typography, buttons, links, tags/chips, fields, checkbox/radio/switch, progress, avatar, tooltip, skeleton, code and layout primitives
- Molecules: original header/stat/metric/quote/timeline/filter/callout/code/link-card compositions, reading progress and table overflow regions
- Organisms: navigation/mobile menu/footer, heroes/sections, work/persona/feature/archetype cards, process/outcome, media/lightbox/comparison, dialogs, alerts, toast, command palette and contact/reference compositions
- Vita: LabResult, RangeIndicator, TrendArrow, ProgressBar, ConfidenceTier, ActionTrio, RecommendationCard, CarePlan and HealthSnapshot, plus accessible appointment selection
- Templates: reusable composition frames and all ten existing Vita reference routes, rendered from native JSX

See [the component migration map](docs/component-map.md) and [API anatomy examples](docs/react-api.md). Root composition components accept standard element props and React children; named anatomy classes and variants remain their styling contract.

## Local preview and tests

```sh
npm run dev
npm run check
npm run test:package
npx playwright install --with-deps chromium webkit
npm run test:e2e
```

The root and `docs/index.html` render the React catalog. Every existing `screens/vita-health/*.html` route is a minimal React mount entry, with JSX source in `demo/vita/`; there is no parallel static HTML implementation or raw-HTML rendering bridge. `npm run build:docs` emits the static preview to `site/`.

CI verifies exports, original CSS families, token handles, behavior, clean package consumption, all ten screen routes, light/dark/mobile layouts, keyboard flows and screenshots. No deployment or npm publication is triggered by this workflow.

## Design and accessibility contracts

The corrected Plot tokens keep supporting text readable in both themes. Icon controls use recognizable glyphs and 44px square targets. Dialogs, radios, tabs, tooltips and disclosure use semantic primitives; metric/reveal/persona/copy motion retains the original timing and reduced-motion fallback. Mobile tables provide overflow-only guidance and keyboard access.

Vita controls expose callbacks. The reference screens simulate local actions and do not send messages, book appointments or save health data. Their values and people are illustrative interface content. Confidence labels are presentation choices, not evidence of calibration, improved decisions or clinical safety; quantitative context may still be necessary. See the existing pattern specifications in `components/` for the retained rationale and limitations.

## Tokens and fonts

`tokens/` retains the machine-readable color, typography, spacing, radius and motion contracts. `css/` is the React components' styling implementation, not an alternate canonical HTML stack. Do not redefine `--muted` as a background: it is foreground text.

No font binaries are bundled. Aeonik and Geist Mono have system fallbacks; configure `--font-display`, `--font-text` and `--font-mono` or supply appropriately licensed fonts yourself. The preview uses the documented system fallbacks.

## License

MIT, copyright Peter Tak. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).
