import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-switch";
import { cn } from "../../lib/utils.js";
export function Switch({
  className,
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  return (
    <Primitive.Root className={cn("switch", className)} {...props}>
      <Primitive.Thumb className="plot-switch-thumb" />
    </Primitive.Root>
  );
}
