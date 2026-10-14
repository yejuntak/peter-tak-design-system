import type { ComponentProps, ReactNode } from "react";
import { cn } from "../../lib/utils.js";
export function CaseSummary({
  summary,
  children,
  note,
}: {
  summary: ReactNode;
  children: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="o-summary-grid">
      <div className="o-summary-grid-lede">{summary}</div>
      <div className="o-summary-grid-body">
        {children}
        {note && <p className="o-notice">{note}</p>}
      </div>
    </div>
  );
}
export function Notice({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("o-notice", className)} {...props} />;
}
export function CaseMeta({
  items,
}: {
  items: { label: string; value: ReactNode }[];
}) {
  return (
    <dl className="o-case-meta">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
export function ReferenceLink({
  label,
  children,
  className,
  ...props
}: ComponentProps<"a"> & { label: ReactNode }) {
  return (
    <a className={cn("o-section-ref-link", className)} {...props}>
      <span className="o-section-ref-label">{label}</span>
      <span className="o-section-ref-note">{children}</span>
    </a>
  );
}
