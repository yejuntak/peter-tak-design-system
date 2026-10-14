import type { ComponentProps } from "react";
import { cn } from "../../lib/utils.js";
export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("o-section", className)} {...props} />;
}
export function SectionInner({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-section-inner", className)} {...props} />;
}
export function WorkGroupHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  return <header className={cn("o-work-group-header", className)} {...props} />;
}
export function ClosingCTA({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("o-cta", className)} {...props} />;
}
export function MetricGrid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-metric-grid", className)} {...props} />;
}
export function MediaRow({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-media-row", className)} {...props} />;
}
export function MediaReal({ className, ...props }: ComponentProps<"figure">) {
  return <figure className={cn("o-media-real", className)} {...props} />;
}
export function MediaPlaceholder({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("o-media-placeholder", className)} {...props} />;
}
export function Principle({ className, ...props }: ComponentProps<"article">) {
  return <article className={cn("o-principle", className)} {...props} />;
}
export function SectionRefs({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("o-section-refs", className)} {...props} />;
}
export function CleanList({ className, ...props }: ComponentProps<"ul">) {
  return <ul className={cn("o-clean-list", className)} {...props} />;
}
export function ContactCard({ className, ...props }: ComponentProps<"a">) {
  return <a className={cn("o-contact-card", className)} {...props} />;
}
export function IdentityTemplate({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      className={cn("plot-template plot-template--identity", className)}
      {...props}
    />
  );
}
export function CaseStudyTemplate({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      className={cn("plot-template plot-template--case-study", className)}
      {...props}
    />
  );
}
export function UtilityTemplate({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      className={cn("plot-template plot-template--utility", className)}
      {...props}
    />
  );
}
export function ShowcaseTemplate({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      className={cn("plot-template plot-template--showcase", className)}
      {...props}
    />
  );
}
export function FilteredIndexTemplate({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      className={cn("plot-template plot-template--filtered-index", className)}
      {...props}
    />
  );
}
