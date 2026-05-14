# `.m-progress-bar`

Adherence display that frames behavior as **progress** — what was done — never as **compliance** — what was missed. Same data, different framing, measurably different patient response.

## The decision

> "4 of 7 completed" produces continued engagement.  
> "Missed 3 of 7 days" produces shame and abandonment.  
> Use this component to enforce the first framing across every adherence surface.

This is a behavioral-outcome design decision baked into the component API. The component **does not accept** a "missed" count or a "compliance rate" prop. It accepts only:

- `data-completed` — the count of completed actions
- `data-target` — the total target

If you find yourself needing to display the missed count, **rephrase the use case**. There is no compliance-framing variant. That is intentional.

## Anatomy

```
.m-progress-bar
├── .m-progress-bar-head
│   ├── .m-progress-bar-count   ← "4 of 7 completed"
│   └── .m-progress-bar-streak  ← optional "3-day streak"
├── .m-progress-bar-track
│   └── .m-progress-bar-fill
└── .m-progress-bar-encouragement (optional, short, never about what's missed)
```

## When to use

- Care-plan adherence tracking
- Goal completion across a time window
- Multi-step process completion
- Any time you'd be tempted to show a compliance percentage

## When NOT to use

- For binary "done/not done" — use `.m-checkbox` or `.m-status-pill`
- For deadline-driven, all-or-nothing tasks — use `.m-deadline-meter`
- For multi-metric scoring — use `.m-score-grid`

## HTML

```html
<div class="m-progress-bar" data-completed="4" data-target="7">
  <header class="m-progress-bar-head">
    <span class="m-progress-bar-count"><strong>4 of 7</strong> completed</span>
    <span class="m-progress-bar-streak">3-day streak</span>
  </header>
  <div class="m-progress-bar-track" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="7" aria-label="4 of 7 activities completed">
    <div class="m-progress-bar-fill" style="width: calc(4 / 7 * 100%);"></div>
  </div>
  <p class="m-progress-bar-encouragement">Tomorrow's a walking day — keep the streak.</p>
</div>
```

## Rules

- The encouragement copy **must not reference missed days, gaps, or what's overdue.** It points forward.
- The fill color is `--accent` — same as positive/affirming surfaces in this system. Never red, even at low completion.
- An empty bar (0 of 7) is still shown — it's the first step, not a failure state. The encouragement copy adapts: "Today's your start."
