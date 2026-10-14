# `.m-progress-bar`

A progress display emphasizing completed actions and a target. This is a design intention, not evidence that the framing improves engagement or clinical outcomes. Evaluate its wording and behavior in the intended context.

## React contract

The component accepts `completed`, `target`, optional `unit`, `streak`, and `encouragement`. It does not infer a medical outcome from completion. Invalid or zero targets remain unmeasured; the accessible label states that no target is set.

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

## React

```tsx
<ProgressBar
  completed={4}
  target={7}
  unit="steps"
  encouragement="Progress describes what is complete."
/>
```

## Rules

- The encouragement copy **must not reference missed days, gaps, or what's overdue.** It points forward.
- The fill color is `--accent` — same as positive/affirming surfaces in this system. Never red, even at low completion.
- An empty bar (0 of 7) is still shown — it's the first step, not a failure state. The encouragement copy adapts: "Today's your start."
