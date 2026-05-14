# `.m-lab-result`

A single lab/health value presented with **interpretation, not just a number**. The founding pattern of this system: no health value is ever shown raw.

## Anatomy

```
.m-lab-result
├── .m-lab-result-head
│   ├── .m-lab-result-name      ← e.g. "Fasting glucose"
│   └── .m-lab-result-status    ← .m-lab-result-status--{ok, watch, attention}
├── .m-lab-result-value
│   ├── .m-lab-result-number    ← the number, big
│   └── .m-lab-result-unit      ← "mg/dL"
├── .m-range-indicator          ← molecule (separate spec) — visual position
├── .m-trend-arrow              ← molecule — vs. previous test
└── .m-lab-result-explanation   ← plain-language sentence, always present
```

## When to use

- Any single health metric (lab value, vital sign, biometric)
- Any moment when you'd otherwise show a number against a reference range
- The "detail" view of a metric tapped from a health snapshot

## When NOT to use

- For non-numeric health information (use copy + `.m-callout`)
- For trend graphs over time (use `.o-trend-chart` instead — multi-point)
- For aggregate scores composed of multiple inputs (use `.m-score`)

## Variants

| Class | Behavior |
| --- | --- |
| `.m-lab-result--compact` | Drops the range indicator and explanation. Use only inside `.o-health-snapshot` where multiple results stack. |
| `.m-lab-result-status--ok` | Green dot, "In range" |
| `.m-lab-result-status--watch` | Amber dot, "Borderline" |
| `.m-lab-result-status--attention` | Red dot, "Outside range" |

## HTML

```html
<article class="m-lab-result">
  <header class="m-lab-result-head">
    <h3 class="m-lab-result-name">Fasting glucose</h3>
    <span class="m-lab-result-status m-lab-result-status--watch">Borderline</span>
  </header>
  <div class="m-lab-result-value">
    <span class="m-lab-result-number">128</span>
    <span class="m-lab-result-unit">mg/dL</span>
  </div>
  <div class="m-range-indicator" data-min="70" data-max="200" data-low="70" data-high="125" data-value="128" aria-label="128 mg/dL, just above normal range">
    <div class="m-range-indicator-bar">
      <div class="m-range-indicator-zone m-range-indicator-zone--ok"></div>
    </div>
    <div class="m-range-indicator-marker" style="left: 44.6%;"></div>
    <div class="m-range-indicator-labels">
      <span>70</span><span>125 (normal)</span><span>200</span>
    </div>
  </div>
  <div class="m-trend-arrow m-trend-arrow--up">
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">…</svg>
    <span>+6 mg/dL vs. last test (4 months ago)</span>
  </div>
  <p class="m-lab-result-explanation">
    Slightly above the normal range. This can be a sign of insulin resistance — typically addressed with diet and activity changes before medication.
  </p>
</article>
```

## Rules

- **Always render `.m-lab-result-explanation`.** If a number can't be explained in plain language, it shouldn't be shown.
- **Never show a raw value without the range indicator** (compact variant in the snapshot is the only exception — and that variant must link out to the full view).
- **The status dot color is computed from the value vs. the reference range**, not chosen manually. The dot communicates urgency to the patient in under a second.

## Accessibility

- `aria-label` on `.m-range-indicator` describes the value in words ("128, just above normal range")
- Status dot is announced via the status text label, not the color alone
- Trend arrow has an `aria-hidden` SVG; the meaning lives in the adjacent text
