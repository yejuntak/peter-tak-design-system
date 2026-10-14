import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "../../lib/utils.js";
export type TypographyRole =
  | "display-xl"
  | "display-l"
  | "title-xl"
  | "title-l"
  | "title-m"
  | "body-l"
  | "body-m"
  | "body-s"
  | "eyebrow"
  | "mono"
  | "mono-s";
export function Typography({
  as: Tag = "p",
  variant = "body-m",
  className,
  ...props
}: ComponentProps<"p"> & { as?: ElementType; variant?: TypographyRole }) {
  return <Tag className={cn(`t-${variant}`, className)} {...props} />;
}
export function Chip({
  children,
  count,
  selected,
  className,
  ...props
}: ComponentProps<"button"> & { count?: number; selected?: boolean }) {
  return (
    <button
      type="button"
      className={cn("m-chip", className)}
      aria-pressed={selected}
      data-active={selected || undefined}
      {...props}
    >
      {children}
      {count !== undefined && <span className="m-chip-count">{count}</span>}
    </button>
  );
}
export function KeyboardHint({
  children,
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span className={cn("m-keyboard-hint", className)} {...props}>
      {children}
    </span>
  );
}
export function ReadingProgress({
  target,
  label = "Reading progress",
}: {
  target?: React.RefObject<HTMLElement | null>;
  label?: string;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const update = () => {
      const node = target?.current;
      const top = node ? -node.getBoundingClientRect().top : window.scrollY;
      const height =
        (node?.offsetHeight ?? document.documentElement.scrollHeight) -
        innerHeight;
      setValue(
        height > 0 ? Math.max(0, Math.min(100, (top / height) * 100)) : 100,
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [target]);
  return (
    <div
      className="m-progress-indicator"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
    >
      <div
        className="m-progress-indicator-bar"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
export function FilterChips({
  options,
  value,
  onValueChange,
  label = "Filter items",
  enhanced = false,
}: {
  options: { value: string; label: string; count?: number }[];
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  enhanced?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  useLayoutEffect(() => {
    const node = root.current;
    if (!node || !enhanced) return;
    const update = () => {
      const button = node.querySelector<HTMLElement>('[aria-pressed="true"]');
      setRect(
        button
          ? {
              x: button.offsetLeft,
              y: button.offsetTop,
              width: button.offsetWidth,
              height: button.offsetHeight,
            }
          : { x: 0, y: 0, width: 0, height: 0 },
      );
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    node
      .querySelectorAll("button")
      .forEach((button) => observer.observe(button));
    return () => observer.disconnect();
  }, [value, enhanced, options]);
  return (
    <div
      ref={root}
      className="m-filter-row"
      role="group"
      aria-label={label}
      data-fr-enhanced={
        (enhanced && rect.width > 0 && rect.height > 0) || undefined
      }
    >
      {enhanced && (
        <span
          className="m-filter-row-indicator is-positioned"
          aria-hidden="true"
          style={{
            transform: `translate(${rect.x}px, ${rect.y}px)`,
            width: rect.width,
            height: rect.height,
          }}
        />
      )}
      {options.map((option) => (
        <Chip
          key={option.value}
          selected={value === option.value}
          count={option.count}
          onClick={() => onValueChange(option.value)}
        >
          {option.label}
        </Chip>
      ))}
    </div>
  );
}
export function SkeletonText({
  lines = 3,
  label = "Loading content",
}: {
  lines?: number;
  label?: string;
}) {
  return (
    <div role="status" aria-label={label}>
      {Array.from({ length: Math.max(0, lines) }, (_, index) => (
        <span
          key={index}
          className="skeleton skeleton-text"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
export function Stack({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("stack", className)} {...props} />;
}
export function Cluster({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cluster", className)} {...props} />;
}
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("container", className)} {...props} />;
}
export function FieldMessage({
  id,
  children,
  error = false,
}: {
  id: string;
  children: ReactNode;
  error?: boolean;
}) {
  return (
    <p id={id} className={error ? "plot-field-error" : "m-field-help"}>
      {children}
    </p>
  );
}
