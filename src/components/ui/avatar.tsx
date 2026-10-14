import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils.js";
export function Avatar({
  className,
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root className={cn("m-avatar", className)} {...props} />;
}
export const AvatarImage = Primitive.Image;
export const AvatarFallback = Primitive.Fallback;
