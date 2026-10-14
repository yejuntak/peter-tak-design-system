# ConfidenceTier

A qualitative label for a supplied system suggestion. A tier is presentation, not evidence that a model is calibrated or that a suggestion is correct.

```tsx
<ConfidenceTier level="high" />
<ConfidenceTier level="medium" />
<ConfidenceTier level="low" />
```

The default labels are “Based on supplied context”, “Consider”, and “Review with a person”. Override `label` when the product has reviewed wording for its task. `explanation` can add context.

## Rules

- Qualitative language is an option, not a universal ban on numerical information
- Decide whether quantitative context is necessary and explain its meaning and limitations
- Define the evidence required for each tier; a threshold alone does not justify a suggestion
- One tier per suggestion; do not imply that the label validates the content
- The component does not implement scoring, calibration or domain decision rules

The original `.m-confidence-tier--high`, `--medium` and `--low` styling contracts remain. Examples contain no real identities, records or outcome claims.
