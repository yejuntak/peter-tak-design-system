import { useRef, type ComponentProps } from "react";
import { useMetricCountUp } from "./motion-hooks.js";
import { cn } from "../../lib/utils.js";
export function CTAPair({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-cta-pair", className)} {...props} />;
}
export function TagCluster({ className, ...props }: ComponentProps<"ul">) {
  return <ul className={cn("m-tag-cluster", className)} {...props} />;
}
export function CalloutArticle({
  className,
  ...props
}: ComponentProps<"article">) {
  return <article className={cn("m-callout", className)} {...props} />;
}
export function Field({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-field", className)} {...props} />;
}
export function Divider({ className, ...props }: ComponentProps<"hr">) {
  return <hr className={cn("divider", className)} {...props} />;
}
export function Dot({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("dot", className)} {...props} />;
}
export function EyebrowTitle({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-eyebrow-title", className)} {...props} />;
}
export function HeroLedeDiv({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-hero-lede", className)} {...props} />;
}
export function BreadcrumbOl({ className, ...props }: ComponentProps<"ol">) {
  return <ol className={cn("m-breadcrumb", className)} {...props} />;
}
export function Quote({ className, ...props }: ComponentProps<"blockquote">) {
  return <blockquote className={cn("m-quote", className)} {...props} />;
}
export function Stat({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-stat", className)} {...props} />;
}
export function Metric({ className, ...props }: ComponentProps<"div">) {
  const root = useRef<HTMLDivElement>(null);
  useMetricCountUp(root);
  return <div ref={root} className={cn("m-metric", className)} {...props} />;
}
export function CardHeaderHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  return <header className={cn("m-card-header", className)} {...props} />;
}
export function Timeline({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-timeline", className)} {...props} />;
}
export function FilterRow({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-filter-row", className)} {...props} />;
}
export function LinkCard({ className, ...props }: ComponentProps<"a">) {
  return <a className={cn("m-link-card", className)} {...props} />;
}
export function StatusPill({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("o-status-pill", className)} {...props} />;
}
export function HeroDiv({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-hero", className)} {...props} />;
}
export function HeroLede({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("m-hero-lede", className)} {...props} />;
}
export function CaseHeroDiv({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-hero-case", className)} {...props} />;
}
export function ArchetypeCardA({ className, ...props }: ComponentProps<"a">) {
  return <a className={cn("o-card-archetype", className)} {...props} />;
}
export function ProcessSectionDiv({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("o-process", className)} {...props} />;
}
export function OutcomeDiv({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-outcome", className)} {...props} />;
}
export function ContactGrid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-contact-grid", className)} {...props} />;
}
export function TLDR({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-tldr", className)} {...props} />;
}
export function PlatformTag({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("o-platform-tag", className)} {...props} />;
}
export function FeatureGrid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-feature-grid", className)} {...props} />;
}
export function FeatureCardArticle({
  className,
  ...props
}: ComponentProps<"article">) {
  return <article className={cn("o-feature-card", className)} {...props} />;
}
export function ArtifactGrid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-artifact-grid", className)} {...props} />;
}
export function ArtifactTileArticle({
  className,
  ...props
}: ComponentProps<"article">) {
  return <article className={cn("o-artifact-tile", className)} {...props} />;
}
export function MediaShowcaseDiv({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("o-media-showcase", className)} {...props} />;
}
export function CompetitorTableDiv({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("o-competitor-table", className)} {...props} />;
}
export function PrincipleListDiv({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("o-principle-list", className)} {...props} />;
}
export function PersonaGrid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-persona-grid", className)} {...props} />;
}
export function Callout({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-callout", className)} {...props} />;
}
export function Spinner({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("spinner", className)} {...props} />;
}
export function Skeleton({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("skeleton", className)} {...props} />;
}
export function SectionDivider({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-section-divider", className)} {...props} />;
}
export function EmptyState({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("m-empty-state", className)} {...props} />;
}
export function ArchetypeCard({
  className,
  ...props
}: ComponentProps<"article">) {
  return <article className={cn("o-card-archetype", className)} {...props} />;
}
export function ArchetypeCardDiv({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("o-card-archetype", className)} {...props} />;
}
export function FeatureCard({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-feature-card", className)} {...props} />;
}
export function FeatureCardSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return <section className={cn("o-feature-card", className)} {...props} />;
}
