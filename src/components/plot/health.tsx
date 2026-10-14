import { useId, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Button } from "../ui/button.js";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.js";
import { cn } from "../../lib/utils.js";
export type ConfidenceLevel = "high" | "medium" | "low";
const tierLabels = {
  high: "Based on supplied context",
  medium: "Consider",
  low: "Review with a person",
};
/** Qualitative presentation only. A tier is not evidence of calibration or clinical validity. */
export function ConfidenceTier({
  level,
  label,
  explanation,
  className,
}: {
  level: ConfidenceLevel;
  label?: string;
  explanation?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "m-confidence-tier",
        `m-confidence-tier--${level}`,
        className,
      )}
    >
      <span className="m-confidence-tier-dot" aria-hidden="true" />
      {label ?? tierLabels[level]}
      {explanation && (
        <span className="m-confidence-tier-detail">{explanation}</span>
      )}
    </span>
  );
}
export interface ActionTrioProps {
  onAccept: () => void;
  onModify: () => void;
  onDismiss: () => void;
  acceptLabel?: string;
  modifyLabel?: string;
  dismissLabel?: string;
  label?: string;
  disabled?: boolean;
}
export function ActionTrio({
  onAccept,
  onModify,
  onDismiss,
  acceptLabel = "Accept",
  modifyLabel = "Adjust",
  dismissLabel = "Set aside",
  label = "Respond to recommendation",
  disabled,
}: ActionTrioProps) {
  return (
    <div className="m-action-trio" role="group" aria-label={label}>
      <Button
        variant="ghost"
        size="sm"
        data-action="dismiss"
        onClick={onDismiss}
        disabled={disabled}
      >
        {dismissLabel}
      </Button>
      <Button
        variant="secondary"
        data-action="modify"
        onClick={onModify}
        disabled={disabled}
      >
        {modifyLabel}
      </Button>
      <Button data-action="accept" onClick={onAccept} disabled={disabled}>
        {acceptLabel}
      </Button>
    </div>
  );
}
export function TrendArrow({
  direction,
  children,
}: {
  direction: "up" | "down" | "flat";
  children: ReactNode;
}) {
  const Icon =
    direction === "up"
      ? ArrowUpRight
      : direction === "down"
        ? ArrowDownRight
        : ArrowRight;
  return (
    <span className={`m-trend-arrow m-trend-arrow--${direction}`}>
      <Icon size={16} aria-hidden="true" />
      {children}
    </span>
  );
}
export function RangeIndicator({
  position,
  label,
  lowLabel,
  highLabel,
  referenceLabel,
}: {
  position: number;
  label: string;
  lowLabel: string;
  highLabel: string;
  referenceLabel?: string;
}) {
  const safe = Number.isFinite(position)
    ? Math.max(0, Math.min(100, position))
    : 50;
  return (
    <div
      className="m-range-indicator"
      role="img"
      aria-label={label}
      style={{ "--range-position": `${safe}%` } as CSSProperties}
    >
      <div className="m-range-indicator-bar" />
      <span className="m-range-indicator-marker" />
      <div className="m-range-indicator-labels" aria-hidden="true">
        <span>{lowLabel}</span>
        {referenceLabel && <span>{referenceLabel}</span>}
        <span>{highLabel}</span>
      </div>
    </div>
  );
}
export interface LabResultProps {
  name: string;
  value: string | number;
  unit: string;
  status: "ok" | "watch" | "attention";
  statusLabel: string;
  explanation: string;
  trend: { direction: "up" | "down" | "flat"; label: string };
  range: {
    position: number;
    label: string;
    lowLabel: string;
    highLabel: string;
    referenceLabel?: string;
  };
  compact?: boolean;
  detailHref?: string;
}
/** Values and interpretations are supplied by the consumer; this component never diagnoses. */
export function LabResult({
  name,
  value,
  unit,
  status,
  statusLabel,
  explanation,
  trend,
  range,
  compact,
  detailHref,
}: LabResultProps) {
  const id = useId();
  return (
    <article
      className={cn(
        "m-lab-result",
        compact && detailHref && "m-lab-result--compact",
      )}
      aria-labelledby={id}
    >
      <div className="m-lab-result-head">
        <h3 id={id} className="m-lab-result-name">
          {name}
        </h3>
        <span className={`m-lab-result-status m-lab-result-status--${status}`}>
          {statusLabel}
        </span>
      </div>
      <div className="m-lab-result-value">
        <strong className="m-lab-result-number">{value}</strong>
        <span className="m-lab-result-unit">{unit}</span>
      </div>
      <RangeIndicator {...range} />
      <TrendArrow direction={trend.direction}>{trend.label}</TrendArrow>
      <p className="m-lab-result-explanation">{explanation}</p>
      {compact && detailHref && (
        <a className="link-quiet" href={detailHref}>
          View {name} interpretation
        </a>
      )}
    </article>
  );
}
export function ProgressBar({
  completed,
  target,
  unit = "steps",
  encouragement,
  streak,
  label = "Progress",
}: {
  completed: number;
  target: number;
  unit?: string;
  encouragement?: ReactNode;
  streak?: string;
  label?: string;
}) {
  const done = Number.isFinite(completed) ? Math.max(0, completed) : 0;
  const goal = Number.isFinite(target) && target > 0 ? target : null;
  const measured = goal === null ? null : Math.min(done, goal);
  return (
    <div
      className="m-progress-bar"
      data-completed={done}
      data-target={goal ?? undefined}
    >
      <div className="m-progress-bar-head">
        <span className="m-progress-bar-count">
          <strong>{done}</strong>{" "}
          {goal === null
            ? `${unit} completed; no target set`
            : `of ${goal} ${unit} completed`}
        </span>
        {streak && <span className="m-progress-bar-streak">{streak}</span>}
      </div>
      <ProgressPrimitive.Root
        className="m-progress-bar-track"
        value={measured}
        max={goal ?? 100}
        aria-label={label}
        getValueLabel={() =>
          `${done}${goal === null ? "" : ` of ${goal}`} ${unit} completed`
        }
      >
        <ProgressPrimitive.Indicator
          className="m-progress-bar-fill"
          style={{ width: `${goal === null ? 0 : (measured! / goal) * 100}%` }}
        />
      </ProgressPrimitive.Root>
      {encouragement && (
        <p className="m-progress-bar-encouragement">{encouragement}</p>
      )}
    </div>
  );
}
export function RecommendationCard({
  title,
  confidence,
  children,
  rationale,
  actions,
  status,
  metadata,
  sources,
}: {
  title: string;
  confidence: ConfidenceLevel;
  children?: ReactNode;
  rationale?: ReactNode;
  actions: ActionTrioProps;
  status?: string;
  metadata?: ReactNode;
  sources?: string[];
}) {
  const id = useId();
  return (
    <article className="o-recommendation-card" aria-labelledby={id}>
      <header className="o-recommendation-card-head">
        <ConfidenceTier level={confidence} />
        {metadata && (
          <span className="o-recommendation-card-meta">{metadata}</span>
        )}
      </header>
      <div className="o-recommendation-card-body">
        <h3 id={id} className="o-recommendation-card-title">
          {title}
        </h3>
        {rationale && (
          <p className="o-recommendation-card-rationale">{rationale}</p>
        )}
        {children}
        {sources && (
          <ul className="o-recommendation-card-sources">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        )}
        {status && (
          <p className="plot-health-status" role="status">
            {status}
          </p>
        )}
      </div>
      <ActionTrio {...actions} />
    </article>
  );
}
export interface CareGoal {
  id: string;
  title: string;
  description?: ReactNode;
  completed: number;
  target: number;
  unit?: string;
  actions?: ReactNode;
}
export function CarePlan({
  title,
  goals,
  children,
  direction,
  source,
}: {
  title: string;
  goals: CareGoal[];
  children?: ReactNode;
  direction?: string;
  source?: string;
}) {
  const id = useId();
  return (
    <section className="o-care-plan" aria-labelledby={id}>
      <header className="o-care-plan-head">
        {direction && (
          <span className="o-care-plan-direction">{direction}</span>
        )}
        <h2 id={id} className="o-care-plan-goal">
          {title}
        </h2>
        {source && <p className="o-care-plan-goal-source">{source}</p>}
      </header>
      {children}
      <ul className="o-care-plan-list">
        {goals.map((goal) => (
          <li key={goal.id} className="o-care-plan-item">
            <div className="o-care-plan-item-text">
              <h3 className="t-title-m">{goal.title}</h3>
              {goal.description && <p>{goal.description}</p>}
              <ProgressBar
                completed={goal.completed}
                target={goal.target}
                unit={goal.unit}
                label={`${goal.title} progress`}
              />
              {goal.actions}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export function HealthSnapshot({
  title,
  results,
  children,
}: {
  title: string;
  results: LabResultProps[];
  children?: ReactNode;
}) {
  const id = useId();
  return (
    <section className="o-health-snapshot" aria-labelledby={id}>
      <header className="o-health-snapshot-head">
        <h2 id={id} className="o-health-snapshot-title">
          {title}
        </h2>
      </header>
      {children}
      <div className="o-health-snapshot-grid">
        {results.map((result) => (
          <LabResult key={result.name} {...result} />
        ))}
      </div>
    </section>
  );
}
export function ScheduleSelector({
  slots,
  value: controlled,
  defaultValue,
  onValueChange,
  onConfirm,
  label = "Choose an appointment time",
}: {
  slots: {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
  }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onConfirm: (value: string) => void;
  label?: string;
}) {
  const [local, setLocal] = useState(defaultValue);
  const value = controlled ?? local;
  const eligible = slots.some((slot) => slot.value === value && !slot.disabled);
  return (
    <div>
      <RadioGroup
        value={value}
        aria-label={label}
        onValueChange={(next) => {
          setLocal(next);
          onValueChange?.(next);
        }}
      >
        {slots.map((slot) => (
          <label
            className="v-schedule-slot plot-choice"
            data-selected={slot.value === value}
            key={slot.value}
          >
            <RadioGroupItem value={slot.value} disabled={slot.disabled} />
            <span>
              {slot.label}
              {slot.description && <small>{slot.description}</small>}
            </span>
          </label>
        ))}
      </RadioGroup>
      <Button
        disabled={!eligible}
        onClick={() => eligible && value && onConfirm(value)}
      >
        Confirm slot
      </Button>
    </div>
  );
}
