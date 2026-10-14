# LabResult

A reusable value-and-context composition. The historical export name is retained; its examples now use synthetic measures rather than condition-specific values or guidance.

```tsx
<LabResult
  name="Sample measure A"
  value={42}
  unit="units"
  status="watch"
  statusLabel="Review example"
  explanation="Supplied context for a synthetic value."
  trend={{ direction: "flat", label: "No change in this example" }}
  range={{
    position: 50,
    label: "Example at the reference marker",
    lowLabel: "0",
    referenceLabel: "42 reference",
    highLabel: "84",
  }}
/>
```

## Anatomy

`.m-lab-result` contains head/name/status, value/number/unit, range indicator, trend and explanation. The original compact modifier preserves the trend and links to a full interpretation through `detailHref`. Without that link, the full context stays visible.

## Rules

- The consumer supplies labels, status and interpretation; the component does not derive meaning from a number
- Communicate meaning with text, not color alone
- RangeIndicator supports low/reference/high labels, an accessible summary and a finite clamped marker position
- TrendArrow communicates direction through text plus an icon; direction is not inherently good or bad
- Use domain-reviewed content in an actual product; the synthetic examples establish no outcome or safety claim
