// Adapted from shadcn/ui Dialog (MIT). Radix owns trapping, dismissal and focus restoration.
import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils.js";
export const Dialog = Primitive.Root;
export const DialogTrigger = Primitive.Trigger;
export const DialogClose = Primitive.Close;
export function DialogTitle({
  className,
  ...props
}: ComponentProps<typeof Primitive.Title>) {
  return (
    <Primitive.Title className={cn("o-dialog-title", className)} {...props} />
  );
}
export function DialogDescription({
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
export function DialogContent({
  className,
  children,
  overlayClassName,
  ...props
}: ComponentProps<typeof Primitive.Content> & { overlayClassName?: string }) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay
        className={cn(
          "plot-overlay",
          overlayClassName,
          className?.includes("plot-command-dialog") && "plot-overlay--command",
        )}
      />
      <Primitive.Content
        className={cn("plot-dialog o-dialog", className)}
        {...props}
      >
        {children}
        <Primitive.Close className="o-dialog-close" aria-label="Close dialog">
          <X size={18} />
        </Primitive.Close>
      </Primitive.Content>
    </Primitive.Portal>
  );
}
