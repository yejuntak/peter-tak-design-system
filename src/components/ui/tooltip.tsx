import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-tooltip";
import { cn } from "../../lib/utils.js";
export const TooltipProvider = Primitive.Provider;
export const Tooltip = Primitive.Root;
export const TooltipTrigger = Primitive.Trigger;
export function TooltipContent({
  className,
  sideOffset = 6,
  children,
  ...props
}: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Portal>
      <Primitive.Content
        className={cn("plot-tooltip", className)}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        <Primitive.Arrow className="plot-tooltip-arrow" width={8} height={4} />
      </Primitive.Content>
    </Primitive.Portal>
  );
}
