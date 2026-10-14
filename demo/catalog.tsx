import { useState, type ReactNode } from "react";
import { Settings, Plus } from "lucide-react";
import * as Plot from "../src";
const rootPath = new URL(
  /\/docs(?:\/index\.html|\/)?$/.test(location.pathname) ? "../" : "./",
  location.href,
).pathname;
const lab: Plot.LabResultProps = {
  name: "Example measure",
  value: 42,
  unit: "units",
  status: "watch",
  statusLabel: "Review example",
  explanation:
    "Illustrative display values. Interpretation must be supplied and reviewed by the product using this component.",
  trend: { direction: "flat", label: "No change in this example" },
  range: {
    position: 50,
    label: "42 units, at the example reference marker",
    lowLabel: "0",
    referenceLabel: "42 reference",
    highLabel: "84",
  },
  detailHref: `${rootPath}screens/vita-health/lab-interpretation.html`,
};
function Example({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="catalog-section">
      <Plot.CardHeader>
        <span className="m-card-header-eyebrow">Component example</span>
        <h2 className="m-card-header-title">{title}</h2>
        <p className="m-card-header-meta">
          React composition · Keyboard and theme aware
        </p>
      </Plot.CardHeader>
      <div className="catalog-example">{children}</div>
    </section>
  );
}
export default function Catalog() {
  const [filter, setFilter] = useState("all"),
    [command, setCommand] = useState(false),
    [status, setStatus] = useState("");
  const actions = {
    onAccept: () => setStatus("Accepted locally. Nothing was saved."),
    onModify: () =>
      setStatus(
        "Adjustment requested locally. The consuming product supplies its editor.",
      ),
    onDismiss: () => setStatus("Set aside locally. Nothing was sent."),
    acceptLabel: "Accept example",
    modifyLabel: "Adjust example",
    dismissLabel: "Set aside example",
  };
  return (
    <Plot.ThemeProvider>
      <Plot.TooltipProvider>
        <a className="skip-link" href="#catalog-main">
          Skip to components
        </a>
        <Plot.Header
          brand="Plot"
          mark="P"
          href={`${rootPath}index.html`}
          items={[
            { label: "Components", href: "#catalog-main", current: true },
            {
              label: "Vita screens",
              href: `${rootPath}screens/vita-health/index.html`,
            },
            {
              label: "GitHub",
              href: "https://github.com/yejuntak/peter-tak-design-system",
            },
          ]}
          actions={<Plot.ThemeToggle />}
        />
        <main id="catalog-main" className="catalog-shell">
          <div className="m-eyebrow-title">
            <span className="t-eyebrow">
              Peter Tak Design System · React 2.0
            </span>
            <h1 className="t-display-l">One system. Reusable components.</h1>
            <p className="t-body-l">
              Typed React components with shadcn/Radix interaction primitives,
              the original semantic design tokens, and complete Vita Health
              reference screens.
            </p>
            <p className="t-body-s">
              All examples run locally. This library does not send messages,
              make clinical recommendations, book appointments or store personal
              data.
            </p>
          </div>
          <nav className="catalog-nav" aria-label="Component categories">
            {[
              "atoms",
              "forms",
              "navigation",
              "feedback",
              "content",
              "media",
              "health",
              "screens",
            ].map((id) => (
              <a className="link-quiet" key={id} href={`#${id}`}>
                {id}
              </a>
            ))}
            <Plot.Button variant="secondary" onClick={() => setCommand(true)}>
              Find a component
            </Plot.Button>
          </nav>
          <Example id="atoms" title="Atoms and typography">
            <Plot.Typography variant="title-xl">
              Clear hierarchy, original tokens.
            </Plot.Typography>
            <div className="cluster cluster-2">
              <Plot.Button>Primary</Plot.Button>
              <Plot.Button variant="secondary">Secondary</Plot.Button>
              <Plot.Button variant="accent">Accent</Plot.Button>
              <Plot.Button variant="ghost">Ghost</Plot.Button>
              <Plot.Button size="icon" aria-label="Settings">
                <Settings size={18} />
              </Plot.Button>
              <Plot.Button size="icon" aria-label="Add">
                <Plus size={18} />
              </Plot.Button>
              <Plot.Button loading>Saving</Plot.Button>
              <Plot.Button disabled>Disabled</Plot.Button>
            </div>
            <div className="cluster cluster-2">
              <Plot.Tag>Tag</Plot.Tag>
              <Plot.Tag className="tag-accent">Accent tag</Plot.Tag>
              <Plot.Chip count={3}>Chip</Plot.Chip>
              <Plot.InitialsAvatar>AB</Plot.InitialsAvatar>
              <Plot.PlotTooltip label="More context for this control">
                <Plot.Button variant="secondary">Tooltip</Plot.Button>
              </Plot.PlotTooltip>
              <Plot.Kbd>⌘</Plot.Kbd>
              <Plot.Code>tokens</Plot.Code>
              <Plot.Sparkline values={[3, 8, -1, 9, 14]} variant="up" />
            </div>
            <Plot.Link className="link-quiet" href="#content">
              Quiet link
            </Plot.Link>
            <Plot.Link className="link-arrow" href="#media">
              Arrow link
            </Plot.Link>
            <Plot.Divider />
          </Example>
          <Example id="forms" title="Fields and selection">
            <Plot.Field>
              <label className="m-field-label" htmlFor="sample-name">
                Example name
              </label>
              <Plot.Input
                id="sample-name"
                aria-describedby="sample-help"
                placeholder="Enter a name"
              />
              <Plot.FieldMessage id="sample-help">
                Your text stays in this page.
              </Plot.FieldMessage>
            </Plot.Field>
            <Plot.Field>
              <label htmlFor="sample-notes">Notes</label>
              <Plot.Textarea id="sample-notes" />
            </Plot.Field>
            <label className="plot-choice">
              <Plot.Checkbox />
              Enable example
            </label>
            <label className="plot-choice">
              <Plot.Switch />
              Notifications example
            </label>
            <Plot.RadioGroup defaultValue="a" aria-label="Example review">
              <label className="plot-choice">
                <Plot.RadioGroupItem value="a" />
                First
              </label>
              <label className="plot-choice">
                <Plot.RadioGroupItem value="b" />
                Second
              </label>
              <label className="plot-choice">
                <Plot.RadioGroupItem value="c" disabled />
                Unavailable
              </label>
            </Plot.RadioGroup>
            <label htmlFor="sample-select">Example category</label>
            <Plot.NativeSelect id="sample-select">
              <option>One</option>
              <option>Two</option>
            </Plot.NativeSelect>
            <Plot.Progress value={45} aria-label="Example progress" />
            <Plot.SkeletonText lines={2} />
          </Example>
          <Example id="navigation" title="Navigation and disclosure">
            <Plot.FilterChips
              enhanced
              options={[
                { value: "all", label: "All", count: 4 },
                { value: "core", label: "Core", count: 2 },
              ]}
              value={filter}
              onValueChange={setFilter}
            />
            <Plot.Tabs defaultValue="overview">
              <Plot.TabsList aria-label="Example tabs">
                <Plot.TabsTrigger value="overview">Overview</Plot.TabsTrigger>
                <Plot.TabsTrigger value="details">Details</Plot.TabsTrigger>
              </Plot.TabsList>
              <Plot.TabsContent value="overview">
                Overview panel
              </Plot.TabsContent>
              <Plot.TabsContent value="details">Details panel</Plot.TabsContent>
            </Plot.Tabs>
            <Plot.Accordion type="single" collapsible>
              <Plot.AccordionItem value="a">
                <Plot.AccordionTrigger>
                  How does this work?
                </Plot.AccordionTrigger>
                <Plot.AccordionContent>
                  React owns disclosure state; Radix owns keyboard semantics.
                </Plot.AccordionContent>
              </Plot.AccordionItem>
            </Plot.Accordion>
            <Plot.PersonaCard
              name="Example persona"
              role="Sample role"
              initials="EP"
              job="Understand one task."
              goals={["Find useful context"]}
              frustrations={["Unclear labels"]}
            />
          </Example>
          <Example id="feedback" title="Dialogs, feedback and code">
            <Plot.Dialog>
              <Plot.DialogTrigger asChild>
                <Plot.Button>Open dialog</Plot.Button>
              </Plot.DialogTrigger>
              <Plot.DialogContent>
                <Plot.DialogTitle>Example dialog</Plot.DialogTitle>
                <Plot.DialogDescription>
                  Original Plot geometry with focus trapping and return.
                </Plot.DialogDescription>
                <div className="o-dialog-foot">
                  <Plot.DialogClose asChild>
                    <Plot.Button variant="secondary">Cancel</Plot.Button>
                  </Plot.DialogClose>
                  <Plot.DialogClose asChild>
                    <Plot.Button>Done</Plot.Button>
                  </Plot.DialogClose>
                </div>
              </Plot.DialogContent>
            </Plot.Dialog>
            <Plot.AlertDialog>
              <Plot.AlertDialogTrigger asChild>
                <Plot.Button variant="secondary">Confirm example</Plot.Button>
              </Plot.AlertDialogTrigger>
              <Plot.AlertDialogContent>
                <Plot.AlertDialogTitle>
                  Confirm local example?
                </Plot.AlertDialogTitle>
                <Plot.AlertDialogDescription>
                  This changes only the example feedback.
                </Plot.AlertDialogDescription>
                <div className="o-dialog-foot">
                  <Plot.AlertDialogCancel asChild>
                    <Plot.Button variant="secondary">Cancel</Plot.Button>
                  </Plot.AlertDialogCancel>
                  <Plot.AlertDialogAction asChild>
                    <Plot.Button
                      onClick={() => Plot.toast.success("Example confirmed")}
                    >
                      Confirm
                    </Plot.Button>
                  </Plot.AlertDialogAction>
                </div>
              </Plot.AlertDialogContent>
            </Plot.AlertDialog>
            <Plot.Button
              variant="secondary"
              onClick={() =>
                Plot.toast("Local feedback", {
                  description: "Nothing was sent or saved.",
                })
              }
            >
              Show toast
            </Plot.Button>
            <Plot.CodeSnippet
              code={'import { Button } from "@peter-tak/design-system";'}
            />
            <Plot.Callout>
              <div className="m-callout-body">
                <strong className="m-callout-title">Component note</strong>
                <p>
                  Example content describes the component without making
                  confidentiality or measured-outcome claims.
                </p>
              </div>
            </Plot.Callout>
          </Example>
          <Example id="content" title="Content, cards and timelines">
            <Plot.WorkCard
              href="#media"
              title="Example work card"
              description="A neutral component example using the original work-card anatomy."
              visualKind="system"
              footer="Explore the example →"
            />
            <Plot.Metric>
              <strong className="m-metric-value">42</strong>
              <span className="m-metric-label">Illustrative number</span>
            </Plot.Metric>
            <Plot.Timeline>
              <Plot.TimelineEntry>
                <span className="m-career-entry-period">Example</span>
                <div className="m-career-entry-detail">
                  <h3 className="m-career-entry-company">A timeline entry</h3>
                  <p className="m-career-entry-role">
                    Supporting copy remains legible.
                  </p>
                </div>
              </Plot.TimelineEntry>
            </Plot.Timeline>
            <Plot.CaseSummary
              summary="A reusable summary."
              note="Illustrative content."
            >
              <p>
                Compose the challenge, approach and supporting context through
                typed React children.
              </p>
            </Plot.CaseSummary>
            <Plot.Quote>
              <p className="m-quote-text">A neutral quotation example.</p>
              <footer className="m-quote-attribution">
                Example attribution
              </footer>
            </Plot.Quote>
            <Plot.EmptyState>
              <h3 className="m-empty-state-title">No examples selected</h3>
              <p className="m-empty-state-body">Choose a filter to continue.</p>
            </Plot.EmptyState>
          </Example>
          <Example id="media" title="Media, motion and tables">
            <Plot.InlineMedia
              src={`${rootPath}screens/vita-health/assets/hero-health-snapshot.svg`}
              alt="Existing reference-screen illustration"
              width={880}
              height={580}
              caption="Public asset retained from the existing repository."
            />
            <Plot.ComparisonSlider
              before={<span>Before example</span>}
              after={<span>After example</span>}
            />
            <Plot.HeroMotion
              label="Five-dot motion illustration"
              caption="Existing CSS motion system with a reduced-motion state."
            />
            <Plot.TableRegion label="Example component variants">
              <table className="ds-matrix">
                <caption>
                  Reach every column with horizontal scrolling when needed.
                </caption>
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>Purpose</th>
                    <th>Visual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Icon</td>
                    <td>
                      A clear accessible name, recognizable glyph and a square
                      touch target.
                    </td>
                    <td>
                      <Plot.Button size="icon" aria-label="Table settings">
                        <Settings size={18} />
                      </Plot.Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Plot.TableRegion>
          </Example>
          <Example id="health" title="Vita patterns">
            <p className="t-body-s">
              Illustrative display patterns only. Qualitative confidence labels
              are not proof of calibration, efficacy or clinical safety. The
              consuming product supplies reviewed content and action handlers.
            </p>
            <Plot.LabResult {...lab} />
            <Plot.HealthSnapshot
              title="Example snapshot"
              results={[{ ...lab, compact: true }]}
            />
            <Plot.ProgressBar
              completed={4}
              target={7}
              unit="example steps"
              encouragement="Progress describes what is complete."
            />
            <Plot.RecommendationCard
              title="A supplied recommendation"
              confidence="medium"
              rationale="This is an interface example, not a recommendation about anyone."
              actions={actions}
              status={status}
              sources={["Example source label"]}
            />
            <Plot.CarePlan
              title="A user-defined example goal"
              goals={[
                {
                  id: "goal",
                  title: "Example routine",
                  completed: 2,
                  target: 4,
                  unit: "steps",
                },
              ]}
            />
            <Plot.ScheduleSelector
              slots={[
                { value: "one", label: "Example slot one" },
                { value: "two", label: "Example slot two" },
              ]}
              onConfirm={(value) =>
                setStatus(`Selected ${value} locally. No booking occurred.`)
              }
            />
          </Example>
          <Example id="screens" title="All existing Vita reference screens">
            <div className="catalog-grid">
              {[
                "index",
                "onboarding",
                "dashboard",
                "journey",
                "labs",
                "lab-interpretation",
                "care-plan",
                "messages",
                "progress-framing",
                "recommendation",
              ].map((name) => (
                <Plot.LinkCard
                  key={name}
                  href={`${rootPath}screens/vita-health/${name}.html`}
                >
                  <span className="m-link-card-title">
                    {name.replaceAll("-", " ")}
                  </span>
                  <span className="m-link-card-arrow" aria-hidden="true">
                    →
                  </span>
                </Plot.LinkCard>
              ))}
            </div>
          </Example>
          <Plot.CommandDialog open={command} onOpenChange={setCommand}>
            <Plot.Command>
              <Plot.CommandInput
                aria-label="Search components"
                placeholder="Search components…"
              />
              <Plot.CommandList>
                <Plot.CommandEmpty>No matching component.</Plot.CommandEmpty>
                {[
                  "atoms",
                  "forms",
                  "navigation",
                  "feedback",
                  "content",
                  "media",
                  "health",
                  "screens",
                ].map((id) => (
                  <Plot.CommandItem
                    key={id}
                    value={id}
                    onSelect={() => {
                      setCommand(false);
                      requestAnimationFrame(() =>
                        document.getElementById(id)?.scrollIntoView(),
                      );
                    }}
                  >
                    {id}
                  </Plot.CommandItem>
                ))}
              </Plot.CommandList>
            </Plot.Command>
          </Plot.CommandDialog>
        </main>
        <Plot.Footer
          brand="Plot"
          statement="Reusable React components and semantic design tokens."
          navigation={[
            {
              label: "Repository",
              href: "https://github.com/yejuntak/peter-tak-design-system",
            },
          ]}
          copyright="MIT · Peter Tak"
        />
        <Plot.Toaster />
      </Plot.TooltipProvider>
    </Plot.ThemeProvider>
  );
}
