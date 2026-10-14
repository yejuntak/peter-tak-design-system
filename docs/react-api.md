# React API and composition anatomy

Import from the package root and import its CSS once. React 19, TypeScript declarations, ESM and Bundler/NodeNext consumers are supported. Radix adapters use the familiar shadcn composition API. Use `TooltipProvider` around tooltips and `ThemeProvider` around `ThemeToggle`; state persistence is optional through `storageKey`.

## Root compositions

Root components forward normal element attributes and accept React children. This preserves the original anatomy without inventing a second variant system:

```tsx
<CardHeader>
  <span className="m-card-header-eyebrow">Example category</span>
  <h2 className="m-card-header-title">Readable title</h2>
  <p className="m-card-header-meta">Supporting copy</p>
</CardHeader>

<Section className="o-section--bordered o-section--compact">
  <SectionInner>
    <EyebrowTitle>
      <span className="t-eyebrow">Section label</span>
      <h2 className="t-title-xl">Section title</h2>
    </EyebrowTitle>
  </SectionInner>
</Section>
```

Existing modifiers such as `tag-accent`, `m-stat--highlight`, `o-feature-grid--two` and media aspect-ratio classes remain available via `className`. All original reusable CSS families are checked by the inventory test. See the complete family/export map for each root.

## Stateful components

- Button: primary/secondary/accent/ghost/destructive/bare variants, sizes including icon, native props, `asChild`, `loading`. Icon-only consumers must supply an accessible name
- Header/MobileMenu/Footer: supplied brand, links and slots; no built-in portfolio identity or contact data. The menu preserves the 900px boundary and uses focus trapping/return, Escape and resize cleanup
- ThemeProvider: system/light/dark; no storage unless a storage key is supplied. Manual light remains light when the operating system is dark
- FilterChips: controlled `value`/`onValueChange`, optional counts and moving indicator
- WorkCard: caller-owned title, description, href, metadata, footer, frames and one of the original 17 thumbnail visual kinds
- PersonaCard: name, role, initials, job, goals/frustrations and default open state. Collapsed details are inert while their original exit transition remains mounted
- InlineMedia: source, meaningful alt, caption and optional expansion; lightbox restores focus on close
- ComparisonSlider: caller-owned before/after content, labels, controlled or default value and change callback
- Metric/TimelineEntry: original visible/reduced-motion count-up and reveal lifecycle. `usePlotReveals` is exported for composed sections
- CodeSnippet: code/language with truthful copy feedback and original 1600ms success state
- TableRegion: accessible region label; overflow-only guidance and keyboard tab stop
- Dialog, AlertDialog, Tabs, Accordion, RadioGroup, Checkbox, Switch, Tooltip: composable primitive APIs. Supply labels/descriptions and retain normal keyboard contracts
- CommandDialog: controlled open state, viewport-aware geometry and cmdk children; selection handlers belong to the consumer
- Toaster/toast: Sonner integration with Plot semantic surfaces

## Vita APIs

LabResult receives a supplied value, unit, status label, explanation, trend and range label. It does not derive domain interpretation. `compact` only hides detailed anatomy when `detailHref` exists. RangeIndicator supports low/reference/high labels and a finite clamped marker position.

ProgressBar receives completed/target and optional unit/streak/encouragement. A zero or invalid target is unmeasured. Low completion is not rendered as an error.

ConfidenceTier receives high/medium/low with optional domain-reviewed wording. A label is not evidence of model calibration or domain safety. Products may need quantitative context as well.

ActionTrio requires three callbacks. It keeps dismiss → modify → accept DOM order at every width. The consuming product must define the resulting editor, reason collection and confirmation states; the library does not invent them.

RecommendationCard composes the tier/meta head, padded title/rationale/body/sources, and direct-child action footer. CarePlan composes the original goal/list/item anatomy. HealthSnapshot provides the original title/grid composition. Frame exports are available when reference-screen anatomy needs a more customized React composition.

ScheduleSelector uses radio semantics, disables unavailable slots and only confirms a currently available selected value. It does not book an appointment.

## Font, privacy and demo boundaries

No font binaries or portfolio datasets are included. Customize the font stacks or provide separately licensed fonts. Every Vita route is an illustrative React reference screen; local action dialogs explicitly say that nothing was sent, booked or saved. These examples are not real-world advice or a validation report.

## Count-up hook compatibility

The old `useMetricCountUp(ref)` call is deprecated and keeps supplied values
static. It still type-checks, but no longer rewrites React-owned DOM. Use `Metric`
with a `.m-metric-value` child to retain the 1100ms cubic count-up. Nested host
markup and exact final formatting are preserved; opaque custom children remain
untouched. A changed value cancels an in-flight animation immediately.
