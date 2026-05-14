# `.m-confidence-tier`

A label that tells a user how much weight to give an AI/system recommendation. **The score is never exposed** — the tier is the language wrapper around the score.

## Why this exists

ML models output scores (0.84, 92%). Patients and end users cannot interpret those scores in context. A 0.84 in a medical recommendation is very different from a 0.84 in a movie recommendation. This component forces the design to translate the score into a tier the user can act on without numeracy.

## The three tiers

| Variant | Label | When |
| --- | --- | --- |
| `.m-confidence-tier--high` | "Based on your results" | Model is confident, evidence is strong, intervention is well-established. Treat as direction. |
| `.m-confidence-tier--medium` | "Consider" | Suggestive, lifestyle-factor heavy, multiple inputs. Treat as option. |
| `.m-confidence-tier--low` | "Ask your doctor about" | Complex, edge of model competence, requires human judgment. Treat as a prompt to escalate. |

The phrase IS the variant. **Do not freelance new copy** — these three phrases are how every recommendation in the product introduces itself.

## Anatomy

```
.m-confidence-tier
└── (text content — one of the three phrases)
```

It's a small inline element. Mono font, small caps, leading icon optional.

## HTML

```html
<span class="m-confidence-tier m-confidence-tier--high">Based on your results</span>

<span class="m-confidence-tier m-confidence-tier--medium">Consider</span>

<span class="m-confidence-tier m-confidence-tier--low">Ask your doctor about</span>
```

## When to use

- Every `.o-recommendation-card`
- Any AI-generated suggestion that asks the user to act
- Search ranking explanations ("Top result because…")

## When NOT to use

- For factual/deterministic outputs ("Your last test was 4 months ago" — that's not a recommendation)
- For user-defined goals ("Your goal: walk 20 min/day" — that's not the system speaking)
- For consensus medical guidance backed by static reference ranges — use the lab interpretation system directly

## Rules

- **No numeric score next to or behind this label.** If your designer or PM asks for "(94% confidence)", reject — that's the failure mode this component prevents.
- **One tier per recommendation.** Don't try to express more nuance with two tiers stacked.
- **The tier maps to a model-confidence threshold defined by the team**, not by the designer. Document the thresholds in your product's recommendation engine, not in the UI.
