import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib/utils.js";
export const AlertDialog = Primitive.Root;
export const AlertDialogTrigger = Primitive.Trigger;
export const AlertDialogAction = Primitive.Action;
export const AlertDialogCancel = Primitive.Cancel;
export function AlertDialogContent({
  className,
  children,
  ...props
}: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="plot-overlay" />
      <Primitive.Content
        className={cn("plot-dialog o-dialog", className)}
        {...props}
      >
        {children}
      </Primitive.Content>
    </Primitive.Portal>
  );
}
export function AlertDialogTitle({
  className,
  ...props
}: ComponentProps<typeof Primitive.Title>) {
  return (
    <Primitive.Title className={cn("o-dialog-title", className)} {...props} />
  );
}
export function AlertDialogDescription({
  className,
  ...props
}: ComponentProps<typeof Primitive.Description>) {
  return (
    <Primitive.Description
      className={cn("o-dialog-body", className)}
      {...props}
    />
  );
}
