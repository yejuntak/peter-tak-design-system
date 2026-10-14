import type { ComponentProps, ReactNode } from "react";
import { cn } from "../../lib/utils.js";
export type ThumbnailKind =
  | "ai"
  | "voice-ai"
  | "dashboard"
  | "workflow"
  | "admin"
  | "ops"
  | "banking"
  | "payments"
  | "lending"
  | "wealth"
  | "clinical"
  | "health"
  | "clinical-ai"
  | "system"
  | "components"
  | "commerce"
  | "education";
export function CardThumbnail({
  title,
  frames = [],
  visualKind,
  fallback,
  className,
}: {
  title: string;
  frames?: string[];
  visualKind?: ThumbnailKind;
  fallback?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("o-card-work-thumb project-screen-frame", className)}
      data-kind={visualKind}
      data-frames={frames.length}
    >
      {frames.length === 0 ? (
        <span className="o-card-work-thumb-mark">{fallback ?? title}</span>
      ) : (
        frames.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={index === 0 ? `${title} — project screen` : ""}
            loading="lazy"
          />
        ))
      )}
    </div>
  );
}
export interface WorkCardProps extends Omit<ComponentProps<"a">, "title"> {
  title: string;
  description: ReactNode;
  frames?: string[];
  visualKind?: ThumbnailKind;
  metadata?: ReactNode;
  footer?: ReactNode;
  fallback?: ReactNode;
}
export function WorkCard({
  title,
  description,
  frames,
  visualKind,
  metadata,
  footer,
  fallback,
  className,
  ...props
}: WorkCardProps) {
  return (
    <a className={cn("o-card-work", className)} {...props}>
      <CardThumbnail
        title={title}
        frames={frames}
        visualKind={visualKind}
        fallback={fallback}
      />
      <div className="o-card-work-body">
        {metadata && <div className="o-card-work-meta">{metadata}</div>}
        <h3 className="o-card-work-title">{title}</h3>
        <p className="o-card-work-teaser">{description}</p>
        {footer && <div className="o-card-work-foot">{footer}</div>}
      </div>
    </a>
  );
}
