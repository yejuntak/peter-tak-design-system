import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils.js";
export function Progress({
  className,
  value = null,
  max = 100,
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  const maximum = Number.isFinite(max) && max > 0 ? max : 100;
  const current =
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= maximum
      ? value
      : null;
  return (
    <Primitive.Root
      className={cn("plot-progress-root", className)}
      value={current}
      max={maximum}
      {...props}
    >
      <Primitive.Indicator
        className="plot-progress-indicator"
        style={{
          transform:
            current === null
              ? undefined
              : `translateX(-${100 - (current / maximum) * 100}%)`,
        }}
      />
    </Primitive.Root>
  );
}
