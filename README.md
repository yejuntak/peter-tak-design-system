# Peter Tak Design System

A production-grade design system extracted from [takyejun.com](https://takyejun.com) and re-published as a reusable design language. Atomic-design organized, plain CSS, machine-readable tokens, AI-friendly documentation.

> **Optimized for both humans and AI assistants.** Component specs are written so Claude (or any code-generation agent) can produce on-system markup without seeing the rendered output. See [CLAUDE.md](./CLAUDE.md) for the AI usage guide.

---

## What's in this repo

```
peter-tak-design-system/
├── CLAUDE.md                 ← AI usage instructions (read first if you're an AI)
├── README.md                 ← This file
├── tokens/                   ← Machine-readable design tokens (W3C DTCG-ish)
│   ├── color.json
│   ├── typography.json
│   ├── spacing.json
│   ├── radius.json
│   └── motion.json
├── css/                      ← The actual stylesheets — drop in and use
│   ├── tokens.css            ← CSS custom properties (must load first)
│   ├── reset.css
│   ├── atoms.css
│   ├── molecules.css
│   ├── organisms.css
│   └── motion.css
├── components/               ← Human + AI readable component specs
│   ├── atoms/                ← button, chip, eyebrow, status-pill, …
│   ├── molecules/            ← cta-pair, stat, eyebrow-title, lab-result, range-indicator, progress-bar, confidence-tier, action-trio, …
│   └── organisms/            ← hero, section, card-work, process, care-plan, recommendation-card, health-snapshot, …
├── docs/                     ← Static HTML docs site
│   └── index.html
└── screens/                  ← Reference screens built entirely from this system
    └── vita-health/          ← Patient journey & preventative care app
        ├── index.html
        ├── onboarding.html         ← Health snapshot (first session)
        ├── lab-interpretation.html ← Range + trend + plain-language
        ├── care-plan.html          ← Patient-defined goals
        ├── progress-framing.html   ← Adherence as progress, never compliance
        └── recommendation.html     ← Confidence-tiered AI recommendation
```

---

## Quickstart

### 1. Drop the CSS into your page

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/atoms.css">
<link rel="stylesheet" href="css/molecules.css">
<link rel="stylesheet" href="css/organisms.css">
<link rel="stylesheet" href="css/motion.css">
```

### 2. Compose with the named classes

```html
<section class="o-hero o-hero--page">
  <div class="o-section-inner">
    <span class="o-hero-page-eyebrow">About</span>
    <h1 class="o-hero-page-title">Lead product designer.</h1>
    <p class="o-hero-page-lede">Working in the layer between research and product architecture.</p>
  </div>
</section>
```

### 3. Reference tokens, never raw values

```css
.my-thing {
  padding: var(--s-5);          /* not 24px */
  color: var(--ink);            /* not hsl(0 0% 9%) */
  border-radius: var(--r-3);    /* not 8px */
}
```

---

## Principles

1. **No value without interpretation** — health/data display must include context, not raw numbers. See `m-lab-result`.
2. **Progress framing over compliance framing** — adherence UI shows what's done, never what's missed. See `m-progress-bar`.
3. **Three-action AI response** — every AI recommendation has Accept · Modify · Dismiss. Modify is first-class. See `m-action-trio`.
4. **Confidence as language, not number** — never expose raw model scores. See `m-confidence-tier`.
5. **Tokens are opinionated; pick the closest one.** Don't split the difference.

---

## License

MIT. Use, fork, adapt.

---

## Origin

This system grew out of three years of UX Lead work at Vita Health / Onlife Health (2019–2022), production work at T-Mobile and Microsoft, and AI product design at Home Depot's Core AI team. The Vita Health patient-journey patterns (interpretation system, progress framing, confidence tiers) are documented here as `screens/vita-health/` — both as a portfolio reference and as a canonical example of the system in use.
