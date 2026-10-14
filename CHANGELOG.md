# Unreleased · Component review repairs

- React-owned Metric animation prevents stale updates and nested-node corruption, retaining the 1100ms cubic count-up
- Progress respects its maximum; TableRegion updates overflow guidance after content changes
- Theme hydration restores storage safely; exported JSON colors match the accessible CSS tokens
- Strict package consumers receive a typed CSS entry in both NodeNext and Bundler modes
- Controlled command/demo dialogs restore invoking focus; comparison sliders show keyboard focus; noninteractive tooltip triggers become keyboard reachable
- Compatibility: `useMetricCountUp(ref)` remains callable but is deprecated and now keeps values static. Use `Metric` for safe React-owned animation. No unsafe DOM-writing fallback is retained

# 2.0.0 · React component migration

- Replaced canonical HTML examples and all ten reference screen implementations with native React JSX
- Added typed package exports, shadcn/Radix primitives, ESLint, unit/browser tests and clean consumer verification
- Retained original visual tokens/motion, existing Vita patterns and MIT history; repaired supporting-text contrast and icon semantics
- Added a complete component migration map; no portfolio payloads or font binaries are distributed

# Changelog

## 2026-09-08 - Documentation consistency review

- Corrected the action-trio keyboard sequence to match the example's DOM order.
- Replaced an unverified 3:1 button-text contrast statement with applicable WCAG text-contrast criteria and a requirement to test rendered states.
- Identified the three-action and qualitative-confidence patterns as design choices whose effects require evaluation.
- Separated component hooks from runtime collection, model training and calibration.
- Aligned the AI usage guide with the revised component documentation.

This was a maintainer-authorized documentation review with Codex assistance. No external evaluator, participant study, runtime accessibility audit or full deployment-readiness assessment was conducted.
