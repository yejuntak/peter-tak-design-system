import type { ComponentProps, ElementType } from "react";
import { cn } from "../../lib/utils.js";
export type HealthFrameProps = ComponentProps<"div"> & {
  as?: ElementType;
  href?: string;
};
/** Composable anatomy for the reference screens; prefer complete components when their props fit. */
export function LabResultFrame({
  as: Root = "article",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("m-lab-result", className)} {...props} />;
}
export function RangeIndicatorFrame({
  as: Root = "div",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("m-range-indicator", className)} {...props} />;
}
export function TrendArrowFrame({
  as: Root = "span",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("m-trend-arrow", className)} {...props} />;
}
export function ProgressBarFrame({
  as: Root = "div",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("m-progress-bar", className)} {...props} />;
}
export function ConfidenceTierFrame({
  as: Root = "span",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("m-confidence-tier", className)} {...props} />;
}
export function ActionTrioFrame({
  as: Root = "div",
  className,
  ...props
}: HealthFrameProps) {
  return (
    <Root role="group" className={cn("m-action-trio", className)} {...props} />
  );
}
export function RecommendationCardFrame({
  as: Root = "article",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("o-recommendation-card", className)} {...props} />;
}
export function CarePlanFrame({
  as: Root = "section",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("o-care-plan", className)} {...props} />;
}
export function HealthSnapshotFrame({
  as: Root = "section",
  className,
  ...props
}: HealthFrameProps) {
  return <Root className={cn("o-health-snapshot", className)} {...props} />;
}
