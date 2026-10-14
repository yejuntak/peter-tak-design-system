import {
  cloneElement,
  isValidElement,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "../../lib/utils.js";
import { Avatar, AvatarFallback } from "../ui/avatar.js";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip.js";
export function Tag({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("tag", className)} {...props} />;
}
export function TagItem({ className, ...props }: ComponentProps<"li">) {
  return <li className={cn("tag", className)} {...props} />;
}
export function Link({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      className={cn(
        /(?:^|\s)link-(?:quiet|arrow)(?:\s|$)/.test(className || "")
          ? undefined
          : "link",
        className,
      )}
      {...props}
    />
  );
}
export function InitialsAvatar({
  children,
  className,
  ...props
}: ComponentProps<typeof Avatar>) {
  return (
    <Avatar className={className} {...props}>
      <AvatarFallback>{children}</AvatarFallback>
    </Avatar>
  );
}
export function PlotTooltip({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const child = isValidElement(children) ? (
    (children as ReactElement<{ tabIndex?: number }>)
  ) : (
    <span>{children}</span>
  );
  const trigger =
    child.type === "span" ? cloneElement(child, { tabIndex: 0 }) : child;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
export function Sparkline({
  values,
  variant,
}: {
  values: number[];
  variant: string;
}) {
  const valid = values.filter(
    (value) => Number.isFinite(value) && value !== -1,
  );
  const min = Math.min(...valid),
    max = Math.max(...valid),
    range = Math.max(max - min, 1);
  const points = valid
    .map(
      (v, i) =>
        `${3 + (i * 54) / Math.max(valid.length - 1, 1)},${19 - ((v - min) / range) * 15}`,
    )
    .join(" ");
  return (
    <svg
      className={`ds-sparkline ds-sparkline--${variant}`}
      viewBox="0 0 60 24"
      width={60}
      height={24}
      aria-label={valid.length ? `Trend: ${valid.join(", ")}` : "No trend data"}
      role="img"
    >
      <polyline className="ds-sparkline-line" points={points} fill="none" />
      {valid.length > 0 && (
        <circle
          className="ds-sparkline-dot"
          cx={valid.length > 1 ? 57 : 3}
          cy={19 - ((valid[valid.length - 1] - min) / range) * 15}
          r={2}
        />
      )}
    </svg>
  );
}
export function Kbd(props: ComponentProps<"kbd">) {
  return <kbd {...props} />;
}
export function Code(props: ComponentProps<"code">) {
  return <code {...props} />;
}
export function CodeBlock({ className, ...props }: ComponentProps<"pre">) {
  return <pre className={cn("code-block", className)} {...props} />;
}
