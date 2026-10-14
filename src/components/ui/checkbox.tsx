// Adapted from shadcn/ui Checkbox (MIT), with Plot tokens and individual Radix import.
import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "../../lib/utils.js";
export function Checkbox({
  className,
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  return (
    <Primitive.Root
      data-slot="checkbox"
      className={cn("plot-checkbox", className)}
      {...props}
    >
      <Primitive.Indicator className="plot-choice-indicator">
        {props.checked === "indeterminate" ? (
          <Minus size={14} />
        ) : (
          <Check size={14} />
        )}
      </Primitive.Indicator>
    </Primitive.Root>
  );
}
