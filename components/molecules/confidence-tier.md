# `.m-confidence-tier`

A proposed language label for an AI/system recommendation. This design system uses qualitative tiers by default. A tier is presentation, not evidence that a model is calibrated or that the recommendation is correct.

## Why this exists

Model scores require context: what they measure, the population assessed, and any calibration evidence. This component explores qualitative language as one presentation choice. The repository has not established that hiding numerical information improves understanding or decisions. A model score, strength of supporting evidence, and the appropriateness of an action are distinct properties; do not infer one from another.

## The three tiers

| Variant | Label | When |
| --- | --- | --- |
| `.m-confidence-tier--high` | "Based on your results" | Model is confident, evidence is strong, intervention is well-established. Treat as direction. |
| `.m-confidence-tier--medium` | "Consider" | Suggestive, lifestyle-factor heavy, multiple inputs. Treat as option. |
| `.m-confidence-tier--low` | "Ask your doctor about" | Complex, edge of model competence, requires human judgment. Treat as a prompt to escalate. |

These are the current example variants. Their wording and selection rules require review for the intended domain and users. The healthcare examples do not establish clinical safety, efficacy or universal suitability.

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

- **Qualitative language is the default design choice, not a universal ban on numbers.** Decide whether quantitative information is needed for the task and whether its meaning and calibration can be explained. Record that decision and evaluate user interpretation.
- **One tier per recommendation.** Don't try to express more nuance with two tiers stacked.
- **Define the evidence required for each tier.** Record score meaning, validation population, calibration evidence where relevant, supporting evidence and escalation rules. A threshold alone does not justify a recommendation. Neither threshold selection nor runtime mapping is implemented by this HTML/CSS component.
