# ActionTrio

Three explicit responses to a supplied suggestion: set aside, adjust and accept. Adjust is a first-class route rather than a hidden menu action. This is a design intention, not evidence of improved decisions or outcomes.

```tsx
<ActionTrio
  onAccept={acceptSample}
  onModify={openSampleEditor}
  onDismiss={setAsideSample}
  acceptLabel="Accept sample"
  modifyLabel="Adjust sample"
  dismissLabel="Set aside sample"
/>
```

## Anatomy and behavior

`.m-action-trio` is a right-aligned row of Button components. DOM order is dismiss → modify → accept. At 480px and below it stacks in the same order. Every action remains visible.

- All three callbacks are required; the consumer supplies the resulting state
- Modify should expose the editable parts of the suggestion when that fits the product
- If dismissal reasons are collected, define submission/cancellation behavior separately
- Tab and Shift+Tab follow DOM order; Enter/Space activate focused controls
- Use an accessible group label and verify contrast in actual rendered states
- Do not use this pattern to obscure an irreversible action or imply a backend exists

No analytics, reason collection, model training or external operation is performed by the component.
