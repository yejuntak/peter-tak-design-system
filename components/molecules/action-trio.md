# `.m-action-trio`

Three first-class responses to an ML recommendation: **accept**, **adjust**, **set aside**. Rendered with visual hierarchy (primary → secondary → tertiary), but all three are always visible and always available — none is hidden behind a menu or "more" affordance.

## Why three, not two

A two-button (Accept / Dismiss) recommendation system trains passive compliance or disengagement — the user either rubber-stamps the model or walks away. The "Adjust" path makes the **negotiation pattern** a first-class response: research on clinician-AI interaction (Frontiers in Computer Science 2023; JMIR Medical Informatics 2025) shows that clinicians and patients selectively modify recommendations far more often than they accept or reject them outright. Two-action surfaces force that real behavior into the wrong slot. Three-action surfaces match it.

## Anatomy

```
.m-action-trio (right-aligned flex row, 8px gap)
├── .button.button-ghost.button-sm   ← set aside (opens reason picker)
├── .button.button-secondary         ← adjust (opens edit flow)
└── .button.button-primary           ← accept (the destination)
```

A single horizontal row, **right-aligned** — same convention as `.o-dialog-foot` and most dialog action rows. Primary action sits on the right because that's the reading destination; set-aside is leftmost because it's the quietest path. Visual hierarchy is the atom's job: `.button-primary` is filled, `.button-secondary` is outlined, `.button-ghost.button-sm` is text-only. The molecule only spaces and aligns — it does not impose its own chrome.

## Label conventions

The pattern is fixed (three actions, visual hierarchy, set-aside collects a structured reason). The **copy contextualizes to the recommendation type**:

| Context | Primary | Secondary | Tertiary |
| --- | --- | --- | --- |
| Patient care-plan recommendation | `Add to my plan` | `Adjust it` | `Not for me` |
| Patient referral (low-confidence) | `Schedule with my doctor` | `Save for later` | `Not for me` |
| Clinical decision support (CDS) | `Accept` | `Modify` | `Override` |
| Generic / system default | `Accept` | `Adjust` | `Set aside` |

Use the warmer labels in patient-facing surfaces. Use the clinical labels in clinician-facing surfaces — "Override" carries weight in CDS that "Not for me" doesn't.

## HTML

```html
<div class="m-action-trio" role="group" aria-label="Respond to recommendation">
  <button type="button" class="button button-ghost button-sm" data-action="dismiss">
    Not for me
  </button>
  <button type="button" class="button button-secondary" data-action="modify">
    Adjust it
  </button>
  <button type="button" class="button button-primary" data-action="accept">
    Add to my plan
  </button>
</div>
```

On narrow viewports (`max-width: 480px`) the row stacks full-width vertically; the markup order is preserved so the rightmost (primary) action moves to the bottom of the stack — still the reading destination, still the most prominent.

## Rules

- **All three actions are always visible.** Don't hide Adjust or Set-aside behind a menu.
- **Set-aside must collect a structured reason.** Wire the click to a reason picker (not a free-text field) so the reasons feed back into the model as training signal.
- **Adjust must open an editable version of the recommendation**, not a free-text override. Show the recommendation broken into editable parts (target value, frequency, duration).
- **Tertiary styling for set-aside is intentional.** It's available but visually quieter than the first two — set-aside is the path of least friction; it should not also be the path of least visual weight.

## When NOT to use

- For non-AI decisions where there's no "model" to learn from rejection (use `.m-cta-pair`)
- For destructive irreversible actions (use `.m-confirm-dialog` with a typed-confirmation)
- For deterministic outputs (a search result doesn't get Accept/Modify/Dismiss — it gets navigated)

## Accessibility

- `role="group"` + `aria-label` on the container
- Each button carries `data-action` for analytics + reason-picker routing
- Keyboard: Tab through accept → adjust → set-aside in that order. Enter or Space activates.
- Tertiary button maintains a 3:1 contrast ratio against the surrounding surface so it remains discoverable for low-vision users despite the quieter visual weight.

## References

- Frontiers in Computer Science (2023). *Human-centered design and evaluation of AI-empowered clinical decision support systems: a systematic review.* — identifies the "negotiation" pattern.
- JMIR Medical Informatics (2025). *Improving AI-Based Clinical Decision Support Systems and Their Integration Into Care.*
- Mayo Clinic Care Innovation Studio — patient-facing action labels.
