import type { ReactNode } from "react";
/** Five stable dots follow the existing 28-second CSS cycle. Add overlay layers as children. */
export function HeroMotion({
  label,
  children,
  caption,
}: {
  label?: string;
  children?: ReactNode;
  caption?: ReactNode;
}) {
  return (
    <div className="hero-motion-frame">
      <svg
        className="hero-motion"
        viewBox="0 0 600 600"
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={!label}
      >
        {children}
        {[1, 2, 3, 4, 5].map((index) => (
          <circle
            key={index}
            cx="0"
            cy="0"
            r="4"
            className={`hm-flow-dot hm-flow-dot--${index}`}
          />
        ))}
      </svg>
      {caption && <div className="hero-motion-caption">{caption}</div>}
    </div>
  );
}
