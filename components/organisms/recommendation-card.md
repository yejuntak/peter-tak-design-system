# `.o-recommendation-card`

The canonical AI/system recommendation surface. Composes `.m-confidence-tier`, the recommendation body, and `.m-action-trio` into a single card the user can evaluate and respond to in under 30 seconds.

## Anatomy

Three hairline-separated regions — same convention as `.o-dialog` (head / body / foot).

```
.o-recommendation-card                       ← outer container, no padding, overflow:hidden
├── .o-recommendation-card-head              ← header region · padding s-3 s-5 · border-bottom hairline
│   ├── .m-confidence-tier                   ← high | medium | low (molecule)
│   └── .o-recommendation-card-meta          ← optional "Updated 2 days ago"
├── .o-recommendation-card-body              ← body region · padding s-5
│   ├── .o-recommendation-card-title         ← the recommendation, one sentence
│   ├── .o-recommendation-card-rationale     ← why — supporting data
│   └── .o-recommendation-card-sources       ← optional sources list
└── .m-action-trio                           ← footer region · padding s-3 s-4 · border-top hairline · bg bg
    ├── .button.button-ghost.button-sm       ← Not for me
    ├── .button.button-secondary             ← Adjust it
    └── .button.button-primary               ← Add to my plan (destination, right)
```

The card has no outer padding; each region owns its own padding so the hairlines extend edge-to-edge inside the rounded corners.

## When to use

- Any system-generated recommendation that asks the user to do something
- Care-plan suggestion, dosage adjustment, lifestyle recommendation
- Search-result ranking that needs an "Accept this answer" pattern

## When NOT to use

- For consent-required medical interventions (use `.o-consent-prompt`)
- For pure information ("Your next refill is in 5 days" — that's a notification, not a recommendation)
- For multi-step protocols (use `.o-care-plan`)

## HTML

```html
<article class="o-recommendation-card">
  <header class="o-recommendation-card-head">
    <span class="m-confidence-tier m-confidence-tier--high">Based on your results</span>
    <span class="o-recommendation-card-meta">Updated 2 days ago</span>
  </header>
  <div class="o-recommendation-card-body">
    <h3 class="o-recommendation-card-title">
      Increasing activity could help bring your fasting glucose back into range by your next test.
    </h3>
    <p class="o-recommendation-card-rationale">
      Your fasting glucose has moved from 118 to 128 over four months. Patients with similar trends who increased moderate activity to 150 min/week saw an average decrease of 8–14 mg/dL.
    </p>
    <ul class="o-recommendation-card-sources">
      <li>Lab trend (4 months)</li>
      <li>Activity data (last 30 days)</li>
      <li>Age, sex</li>
    </ul>
  </div>
  <div class="m-action-trio" role="group" aria-label="Respond to recommendation">
    <button type="button" class="button button-ghost button-sm" data-action="dismiss">Not for me</button>
    <button type="button" class="button button-secondary" data-action="modify">Adjust it</button>
    <button type="button" class="button button-primary" data-action="accept">Add to my plan</button>
  </div>
</article>
```

## Rules

- **The title is direction-not-directive copy.** "Could help" not "should do." "Based on your trend" not "You must." This framing makes the AI a guide, not a command.
- **The rationale must be present.** A recommendation without a reason is an algorithm command, not a guide. Use a single short paragraph; deeper sources go in the optional `.o-recommendation-card-sources` list.
- **Sources are factual ("Lab trend (4 months)"), not transparency theater.** Don't list "AI model v2.3, confidence 0.87" — the user can't act on that.
- **Action trio is non-negotiable.** Every recommendation gets all three responses.

## Composition checklist

- [ ] `.m-confidence-tier` set to one of three variants
- [ ] Title uses direction-not-directive language
- [ ] Rationale paragraph present, ≤ 60 words
- [ ] Sources list 1–4 items, factual labels
- [ ] `.m-action-trio` with all three buttons visible
- [ ] No raw confidence score visible anywhere

## Used in

- `screens/vita-health/recommendation.html`
- (Future) any AI-assistant recommendation surface in this system
