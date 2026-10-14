import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils.js";
export function Progress({
  className,
  value = null,
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  return (
    <Primitive.Root
      className={cn("plot-progress-root", className)}
      value={value}
      {...props}
    >
      <Primitive.Indicator
        className="plot-progress-indicator"
        style={{
          transform:
            value === null
              ? undefined
              : `translateX(-${100 - Math.max(0, Math.min(100, value))}%)`,
        }}
      />
    </Primitive.Root>
  );
}
