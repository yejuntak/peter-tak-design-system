# Complete React migration map

Original repository commit: `49e1978259b45452889b78d341e2d37d114cd622`. This map covers 100 public component families and all ten existing reference routes. Root compositions retain named anatomy classes for typed React children; interactive and Vita components also expose explicit state/callback APIs. CSS is their styling layer, not a second canonical implementation.

## Atoms

| Existing family | React exports                       |
| --------------- | ----------------------------------- |
| `typography`    | `Typography`                        |
| `button`        | `Button`                            |
| `tag`           | `Tag`, `TagItem`                    |
| `input`         | `Input`, `Textarea`, `NativeSelect` |
| `link`          | `Link`                              |
| `divider`       | `Divider`                           |
| `dot`           | `Dot`                               |
| `theme-toggle`  | `ThemeProvider`, `ThemeToggle`      |
| `stack`         | `Stack`                             |
| `cluster`       | `Cluster`                           |
| `container`     | `Container`                         |
| `kbd`           | `Kbd`                               |
| `code`          | `Code`, `CodeBlock`                 |
| `switch`        | `Switch`                            |
| `spinner`       | `Spinner`                           |
| `skeleton`      | `Skeleton`, `SkeletonText`          |
| `sparkline`     | `Sparkline`                         |
| `checkbox`      | `Checkbox`                          |
| `radio-group`   | `RadioGroup`, `RadioGroupItem`      |
| `progress`      | `Progress`                          |

## Molecules

| Existing family        | React exports                                               |
| ---------------------- | ----------------------------------------------------------- |
| `m-eyebrow-title`      | `EyebrowTitle`                                              |
| `m-hero-lede`          | `HeroLedeDiv`, `HeroLede`                                   |
| `m-stat`               | `Stat`                                                      |
| `m-cta-pair`           | `CTAPair`                                                   |
| `m-breadcrumb`         | `Breadcrumb`                                                |
| `m-card-header`        | `CardHeader`                                                |
| `m-metric`             | `Metric`                                                    |
| `m-career-entry`       | `TimelineEntry`                                             |
| `m-timeline`           | `Timeline`                                                  |
| `m-filter-row`         | `FilterRow`, `FilterChips`                                  |
| `m-chip`               | `Chip`                                                      |
| `m-tag-cluster`        | `TagCluster`                                                |
| `m-field`              | `Field`, `FieldMessage`                                     |
| `m-quote`              | `Quote`                                                     |
| `m-avatar`             | `Avatar`, `AvatarImage`, `AvatarFallback`, `InitialsAvatar` |
| `m-tooltip`            | `PlotTooltip`, `TooltipProvider`, `Tooltip`                 |
| `m-tabs`               | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`            |
| `m-section-divider`    | `SectionDivider`                                            |
| `m-callout`            | `Callout`, `CalloutArticle`                                 |
| `m-empty-state`        | `EmptyState`                                                |
| `m-code-snippet`       | `CodeSnippet`                                               |
| `m-link-card`          | `LinkCard`                                                  |
| `m-progress-indicator` | `ReadingProgress`                                           |
| `m-keyboard-hint`      | `KeyboardHint`                                              |

## Organisms

| Existing family       | React exports                                                                     |
| --------------------- | --------------------------------------------------------------------------------- |
| `o-header`            | `Header`                                                                          |
| `o-mobile-menu`       | `MobileMenu`                                                                      |
| `o-footer`            | `Footer`                                                                          |
| `o-section`           | `Section`, `SectionInner`                                                         |
| `o-status-pill`       | `StatusPill`                                                                      |
| `o-hero`              | `Hero`, `CaseHero`                                                                |
| `o-case-meta`         | `CaseMeta`                                                                        |
| `o-work-group-header` | `WorkGroupHeader`                                                                 |
| `o-card-work`         | `WorkCard`, `CardThumbnail`                                                       |
| `o-card-archetype`    | `ArchetypeCard`, `ArchetypeCardA`                                                 |
| `o-process`           | `ProcessSection`                                                                  |
| `o-outcome`           | `Outcome`                                                                         |
| `o-feature-grid`      | `FeatureGrid`                                                                     |
| `o-feature-card`      | `FeatureCard`                                                                     |
| `o-principle-list`    | `PrincipleList`, `Principle`                                                      |
| `o-cta`               | `ClosingCTA`                                                                      |
| `o-tldr`              | `TLDR`                                                                            |
| `o-summary-grid`      | `CaseSummary`                                                                     |
| `o-notice`            | `Notice`                                                                          |
| `o-metric-grid`       | `MetricGrid`                                                                      |
| `o-artifact-grid`     | `ArtifactGrid`, `ArtifactTile`                                                    |
| `o-inline-media`      | `InlineMedia`                                                                     |
| `o-media-row`         | `MediaRow`                                                                        |
| `o-media-showcase`    | `MediaShowcase`                                                                   |
| `o-media-real`        | `MediaReal`                                                                       |
| `o-media-placeholder` | `MediaPlaceholder`                                                                |
| `o-media-lightbox`          | `InlineMedia`                                                                     |
| `o-persona-grid`      | `PersonaGrid`                                                                     |
| `o-persona-card`      | `PersonaCard`                                                                     |
| `o-competitor-table`  | `CompetitorTable`, `TableRegion`                                                  |
| `o-section-refs`      | `SectionRefs`, `ReferenceLink`                                                    |
| `o-clean-list`        | `CleanList`                                                                       |
| `o-platform-tag`      | `PlatformTag`                                                                     |
| `o-toast`             | `Toaster`, `toast`                                                                |
| `o-dialog`            | `Dialog`, `DialogContent`, `DialogTitle`, `DialogDescription`, `DialogClose`      |
| `o-comparison`        | `ComparisonSlider`                                                                |
| `o-contact-grid`      | `ContactGrid`, `ContactCard`                                                      |
| `hero-motion`         | `HeroMotion`                                                                      |
| `accordion`           | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`              |
| `alert-dialog`        | `AlertDialog`, `AlertDialogContent`, `AlertDialogTitle`, `AlertDialogDescription` |
| `command-palette`     | `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandItem`          |

## Vita

| Existing family         | React exports                                   |
| ----------------------- | ----------------------------------------------- |
| `m-lab-result`          | `LabResult`, `LabResultFrame`                   |
| `m-range-indicator`     | `RangeIndicator`, `RangeIndicatorFrame`         |
| `m-trend-arrow`         | `TrendArrow`, `TrendArrowFrame`                 |
| `m-progress-bar`        | `ProgressBar`, `ProgressBarFrame`               |
| `m-confidence-tier`     | `ConfidenceTier`, `ConfidenceTierFrame`         |
| `m-action-trio`         | `ActionTrio`, `ActionTrioFrame`                 |
| `o-recommendation-card` | `RecommendationCard`, `RecommendationCardFrame` |
| `o-care-plan`           | `CarePlan`, `CarePlanFrame`                     |
| `o-health-snapshot`     | `HealthSnapshot`, `HealthSnapshotFrame`         |
| `appointment-selection` | `ScheduleSelector`                              |

## Templates

| Existing family  | React exports           |
| ---------------- | ----------------------- |
| `identity`       | `IdentityTemplate`      |
| `case-study`     | `CaseStudyTemplate`     |
| `utility`        | `UtilityTemplate`       |
| `showcase`       | `ShowcaseTemplate`      |
| `filtered-index` | `FilteredIndexTemplate` |

## Routes

- `screens/vita-health/index.html` → native JSX `demo/vita/index.tsx`
- `screens/vita-health/onboarding.html` → native JSX `demo/vita/onboarding.tsx`
- `screens/vita-health/dashboard.html` → native JSX `demo/vita/dashboard.tsx`
- `screens/vita-health/journey.html` → native JSX `demo/vita/journey.tsx`
- `screens/vita-health/labs.html` → native JSX `demo/vita/labs.tsx`
- `screens/vita-health/lab-interpretation.html` → native JSX `demo/vita/lab-interpretation.tsx`
- `screens/vita-health/care-plan.html` → native JSX `demo/vita/care-plan.tsx`
- `screens/vita-health/messages.html` → native JSX `demo/vita/messages.tsx`
- `screens/vita-health/progress-framing.html` → native JSX `demo/vita/progress-framing.tsx`
- `screens/vita-health/recommendation.html` → native JSX `demo/vita/recommendation.tsx`

## Evidence and scope

- `inventory.test.tsx` checks every mapped export, composition roots, original CSS family retention and token handles
- `components.test.tsx`, `radio.test.tsx` and `motion.test.tsx` check shared interactions and prior fidelity regressions
- `health.test.tsx` checks all nine Vita pattern contracts and appointment boundaries
- `e2e/components.spec.ts` visits every route in Chromium desktop/mobile and WebKit mobile, checks internal links, images, breakpoint navigation, dialogs and local actions, and captures corrected reference frames
- `verify-package.mjs` audits the packed allowlist and runs a clean installed consumer in CI, including Bundler and NodeNext type resolution

HeroMotion is a minimal React composition reconstructed from the existing five-dot CSS system. The old public repository supplied its animation CSS but no canonical SVG markup; it is not represented as a recovered original screen. All preexisting optional overlay classes remain available to compose through children.

Actual screenshot review is required before calling visual parity complete. Reduced-height or WebKit engine checks do not certify a physical iOS keyboard.

## UI-only copy boundary

The reference overview and inherited screen narrative now use explicitly fictional component examples. Employer/engagement details, unverified A/B and clinical outcome claims, dosing advice and realistic advisor identities are removed. This is an intentional content correction; preserving component layout does not mean preserving unsupported narrative. Historical clinical screens are not re-exported as screenshot evidence.

The reference-screen copy is now entirely nonclinical task/planning content: sample measures, units, review bands, steps and demo advisor messages. Historical route/API/CSS names are retained for migration coverage, but condition, drug, dose, biomarker interpretation and real-looking identities are not part of the examples.
