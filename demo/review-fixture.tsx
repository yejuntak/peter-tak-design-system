import { useState } from "react";
import {
  Button,
  Command,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
  ComparisonSlider,
  Metric,
  PlotTooltip,
  Progress,
  TableRegion,
  Tag,
  TooltipProvider,
} from "../src";
export default function ReviewFixture() {
  const [metric, setMetric] = useState<number | null>(null),
    [nested, setNested] = useState(true),
    [wide, setWide] = useState(false),
    [open, setOpen] = useState(false);
  return (
    <main style={{ padding: 24, maxWidth: 720, margin: "auto" }}>
      <h1>Component regression examples</h1>
      <Button onClick={() => setMetric(12)}>Start metric</Button>
      <Button onClick={() => setMetric(99)}>Update metric</Button>
      <Button onClick={() => setNested(false)}>Remove nested value</Button>
      {metric !== null && (
        <Metric>
          <span className="m-metric-value">
            {nested ? <strong>{metric}</strong> : null}
            <i>%</i>
          </span>
        </Metric>
      )}
      <Progress value={5} max={10} aria-label="Half complete" />
      <Button onClick={() => setWide(!wide)}>Toggle columns</Button>
      <TableRegion label="Dynamic columns">
        <table style={{ width: wide ? 1200 : 200 }}>
          <tbody>
            <tr>
              <td>First column</td>
              <td>Last column</td>
            </tr>
          </tbody>
        </table>
      </TableRegion>
      <Button onClick={() => setOpen(true)}>First command</Button>
      <Button onClick={() => setOpen(true)}>Second command</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput aria-label="Search examples" />
          <CommandList>
            <CommandItem>Example destination</CommandItem>
          </CommandList>
        </Command>
      </CommandDialog>
      <TooltipProvider>
        <PlotTooltip label="Tag information">
          <Tag>Tooltip tag</Tag>
        </PlotTooltip>
        <PlotTooltip label="Strong information">
          <strong>Tooltip strong</strong>
        </PlotTooltip>
      </TooltipProvider>
      <Button>Before comparison</Button>
      <ComparisonSlider
        label="Review comparison"
        before={
          <div style={{ height: 220, background: "var(--color-bg-tinted)" }}>
            Before
          </div>
        }
        after={
          <div style={{ height: 220, background: "var(--color-surface)" }}>
            After
          </div>
        }
      />
    </main>
  );
}
