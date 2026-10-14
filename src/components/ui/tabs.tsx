import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils.js";
export const Tabs = Primitive.Root;
export function TabsList({
  className,
  ...props
}: ComponentProps<typeof Primitive.List>) {
  return (
    <Primitive.List
      data-ds-tabs=""
      className={cn("m-tabs", className)}
      {...props}
    />
  );
}
export function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Trigger className={cn("m-tabs-tab", className)} {...props} />
  );
}
export function TabsContent({
  className,
  ...props
}: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content className={cn("plot-tab-panel", className)} {...props} />
  );
}
