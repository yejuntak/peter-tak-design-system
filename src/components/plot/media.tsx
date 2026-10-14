import { useState, type CSSProperties, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.js";
export function InlineMedia({
  src,
  alt,
  caption,
  expandable = true,
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  expandable?: boolean;
}) {
  const image = <img src={src} alt={alt} loading="lazy" />;
  return (
    <figure className="o-inline-media">
      {expandable ? (
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="plot-media-button"
              type="button"
              aria-label={`Expand ${alt}`}
            >
              {image}
            </button>
          </DialogTrigger>
          <DialogContent className="plot-lightbox" aria-describedby={undefined}>
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <img src={src} alt={alt} />
          </DialogContent>
        </Dialog>
      ) : (
        image
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
export function ComparisonSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  label = "Comparison slider",
  value: controlled,
  defaultValue = 50,
  onValueChange,
  id,
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  label?: string;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  id?: string;
}) {
  const [local, setLocal] = useState(defaultValue);
  const value = Math.max(0, Math.min(100, controlled ?? local));
  return (
    <div
      id={id}
      className="o-comparison"
      style={{ "--comparison-pos": `${value}%` } as CSSProperties}
    >
      <div className="o-comparison-before">{before}</div>
      <div className="o-comparison-after">{after}</div>
      <span className="o-comparison-label o-comparison-label--before">
        {beforeLabel}
      </span>
      <span className="o-comparison-label o-comparison-label--after">
        {afterLabel}
      </span>
      <span className="o-comparison-handle" aria-hidden="true" />
      <input
        className="o-comparison-input"
        type="range"
        min={0}
        max={100}
        value={value}
        aria-label={label}
        aria-valuetext={`${value}% ${beforeLabel}, ${100 - value}% ${afterLabel}`}
        onChange={(event) => {
          const next = Number(event.target.value);
          setLocal(next);
          onValueChange?.(next);
        }}
      />
    </div>
  );
}
