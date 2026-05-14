# `.m-action-trio`

Three equal-weight buttons attached to every AI recommendation: **Accept · Modify · Dismiss**. Modify is first-class — partial acceptance is the common case, not the exception.

## Why three, not two

A two-button (Accept / Dismiss) recommendation system trains passive compliance or disengagement. The user either rubber-stamps or walks away. Modify makes the most common real response — "yes but" — a first-class path. Dismiss collects the structured reasoning that improves the model.

## Anatomy

```
.m-action-trio
├── .button.button-primary       ← Accept (default action)
├── .button.button-secondary     ← Modify (opens edit flow)
└── .button.button-tertiary      ← Dismiss (opens reason picker)
```

## HTML

```html
<div class="m-action-trio" role="group" aria-label="Respond to recommendation">
  <button type="button" class="button button-primary" data-action="accept">
    Accept
  </button>
  <button type="button" class="button button-secondary" data-action="modify">
    Modify
  </button>
  <button type="button" class="button button-tertiary" data-action="dismiss">
    Dismiss
  </button>
</div>
```

## Rules

- **All three buttons are always visible.** Don't hide Modify or Dismiss behind a menu.
- **Dismiss must collect a reason.** Wire the click to a reason picker (not a free-text field) and feed reasons back to the model.
- **Modify must open an editable version of the recommendation**, not a free-text override. Show the patient/user the recommendation broken into editable parts (target value, frequency, duration).
- **Tertiary styling for Dismiss is on purpose.** It's available but visually quieter than Accept/Modify — Dismiss is the path of least friction; it should not be the path of least visual weight.

## When NOT to use

- For non-AI decisions where there's no "model" to learn from rejection (use `.m-cta-pair`)
- For destructive irreversible actions (use `.m-confirm-dialog` with a typed-confirmation)
- For deterministic outputs (a search result doesn't get Accept/Modify/Dismiss — it gets navigated)

## Accessibility

- `role="group"` + `aria-label` on the container
- Each button has `data-action` for analytics + dismiss-reason routing
- Keyboard: Tab through Accept → Modify → Dismiss in that order. Enter or Space activates.
