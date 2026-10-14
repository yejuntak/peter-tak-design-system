# RecommendationCard

A supplied suggestion with context, qualitative tier, sources and three explicit actions. Examples are synthetic; the component does not generate or validate a recommendation.

```tsx
<RecommendationCard
  title="Review a sample item"
  confidence="medium"
  metadata="Fictional reference"
  rationale="Supplied context for the example."
  sources={["Example source label"]}
  actions={{
    onAccept: acceptSample,
    onModify: openSampleEditor,
    onDismiss: setAsideSample,
  }}
/>
```

## Anatomy

- `.o-recommendation-card-head`: tier and metadata
- `.o-recommendation-card-body`: title, rationale, children and source labels
- Direct-child `.m-action-trio`: padded action footer
- Optional `status`: local outcome text supplied by the caller

Retain the original hairlines, padding and responsive action order. Source labels do not establish evidence by themselves. Any domain-sensitive use needs reviewed content and appropriate validation beyond this UI library.
