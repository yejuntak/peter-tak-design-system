# CLAUDE.md — Instructions for AI Assistants Using This Design System

> This file tells Claude (or any code-generation AI) **how to design and write code with this system**. Read it before generating any markup that uses these tokens or components.

---

## 1. What this system is

A production-grade design system originally built for [takyejun.com](https://takyejun.com) (Peter Tak's portfolio) and refactored here as a reusable design language. **Atomic-design organized**: tokens → atoms → molecules → organisms → templates.

The CSS is **plain CSS** (no preprocessor, no framework). Every layer is a separate file (`css/tokens.css`, `css/atoms.css`, etc.) loaded in order. Components use BEM-ish naming: `.o-card-work`, `.m-eyebrow-title`, `.t-display-xl`.

**Prefix convention:**
- `t-` typography atom
- `m-` molecule
- `o-` organism
- `--` CSS custom property (token)

---

## 2. How to load it

```html
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/atoms.css">
<link rel="stylesheet" href="/css/molecules.css">
<link rel="stylesheet" href="/css/organisms.css">
<link rel="stylesheet" href="/css/motion.css">
```

**Order matters.** `tokens.css` must be first.

---

## 3. Decision tree for picking a component

When asked to build a UI, walk this tree top-down:

1. **Page-level structure** → use a `template` (see `screens/`). Each template documents what organisms it stacks.
2. **Section-level container** → `.o-section` with `--bordered` / `--compact` / `--breathe` modifiers.
3. **Hero-style opening** → `.o-hero` with `--home` / `--page` / `--case` variant.
4. **Content block** → match the content shape:
   - Card-like, navigable → `.o-card-work` or `.o-card-archetype`
   - Cited stat / metric → `.m-stat` or `.m-metric`
   - Step-by-step narrative → `.o-process`
   - Patient/health data → `.o-health-snapshot` / `.m-lab-result` / `.o-care-plan`
   - AI/system recommendation → `.o-recommendation-card` with `.m-confidence-tier` + `.m-action-trio`
5. **Atom (button, chip, badge, eyebrow)** → see `components/atoms/`.

**Never invent a new component class without first checking `components/` for an existing match.** If genuinely missing, follow §6.

---

## 4. Token usage rules

- **Always use tokens, never raw values.** `padding: var(--s-5)` not `padding: 24px`. `color: var(--ink)` not `color: hsl(0 0% 9%)`.
- **Use the alias tier** (`--ink`, `--bg`, `--accent`) in component CSS, not the semantic or primitive tier. The aliases re-aim downstream when themes change.
- **Spacing scale is opinionated.** Pick the closest token; do not split the difference. If you need 20px, decide whether the design intent is "tight" (use `--s-4` = 16) or "loose" (use `--s-5` = 24).
- **Color contrast: AA minimum.** `--color-text-primary` and `--color-text-body` are guaranteed AA on `--bg`. `--accent-text` is the only AA-safe amber.

---

## 5. Patterns specific to this system

### Progress over compliance
Adherence framing always shows **what was done, not what was missed.** Use `.m-progress-bar` (in `components/molecules/progress-bar.md`), never a "missed N of M" component. This is a behavioral-outcome design decision — same data, different UI, different patient response.

### Range indicator + plain-language explanation
Health/lab values are never shown as a raw number. Use `.m-lab-result` which forces a `.m-range-indicator` (visual position on a spectrum) + `.m-trend-arrow` + a plain-language sentence. Pattern: **no value without interpretation.**

### Confidence tier on AI recommendations
ML/agentic recommendations use `.m-confidence-tier`:
- `--high`: "Based on your results" (model is confident, evidence is strong)
- `--medium`: "Consider" (suggestive)
- `--low`: "Ask your doctor about" (complex, refer human)

**Never expose a raw confidence score (0.84, 84%) to users.** The tier wraps the score in interpretable language.

### Three-action recommendation response
Every AI recommendation surface needs `.m-action-trio`: **Accept · Modify · Dismiss**. Modify is first-class — partial acceptance is the common case. Dismissal collects structured reasoning that feeds back into the model.

---

## 6. When a component is genuinely missing

If you've checked `components/` and nothing matches:

1. **Propose, don't ship.** Write a spec in the same shape as existing files in `components/molecules/` or `components/organisms/` — class name, anatomy, props/variants, HTML example, when to use, when not to use.
2. **Compose from existing atoms** rather than inventing new ones. A new molecule that uses `.t-eyebrow`, `.t-body-s`, and `.m-chip` is preferable to a new molecule with hand-written typography.
3. **Use token references in CSS.** Every padding, color, radius, line-height must reference a `var(--…)`. If you find yourself needing a value the tokens don't provide, that's a token-system decision — write the proposal in `tokens/` first.
4. **Name with the prefix rule.** Atom = `.t-…` or single-purpose class, molecule = `.m-…`, organism = `.o-…`.

---

## 7. What this system explicitly does NOT do

- **No Tailwind / utility-first.** This is a semantic component system. Don't suggest `class="flex items-center gap-2 px-4 py-2 rounded-md"`. Suggest `.m-cta-pair` or compose with named classes.
- **No JS framework dependency.** Components are HTML + CSS. JS hooks (the few that exist) use `data-*` attributes — `data-expand-image`, `data-persona-toggle`. Mention if your suggestion needs JS.
- **No CSS-in-JS.** Plain `.css` files only.
- **No icon library coupling.** Inline SVG with `currentColor` strokes.

---

## 8. Quick reference: most-used class names

| Purpose | Class |
| --- | --- |
| Page hero (generic) | `.o-hero.o-hero--page` |
| Hero with split + motion | `.o-hero.o-hero--home` |
| Section wrapper | `.o-section` (`--bordered`, `--compact`, `--breathe`) |
| Eyebrow + title | `.m-eyebrow-title` (`--numbered`) |
| CTA pair | `.m-cta-pair` (`--centered`) |
| Primary button | `.button.button-primary` |
| Secondary button | `.button.button-secondary` |
| Accent button | `.button.button-accent` |
| Chip / tag | `.m-chip` |
| Status pill (live dot) | `.o-status-pill` |
| Stat block | `.m-stat` |
| Metric (case-study) | `.m-metric` |
| Work card | `.o-card-work` |
| Archetype card | `.o-card-archetype` |
| Process / narrative | `.o-process` |
| Persona card | `.o-persona-card` |
| Lab result | `.m-lab-result` |
| Range indicator | `.m-range-indicator` |
| Care plan | `.o-care-plan` |
| Progress bar | `.m-progress-bar` |
| Recommendation card | `.o-recommendation-card` |
| Confidence tier badge | `.m-confidence-tier` |
| Action trio (Accept/Modify/Dismiss) | `.m-action-trio` |

---

## 9. If in doubt

Open `screens/vita-health/*.html` for canonical example pages built entirely from this system. They show how organisms compose, how atoms stack, and which tokens get used where. Pattern-match from those rather than inventing.
