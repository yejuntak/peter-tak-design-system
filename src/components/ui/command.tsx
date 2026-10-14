import { useEffect, type CSSProperties, type ReactNode } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Dialog, DialogContent, DialogTitle } from "./dialog.js";
import { useState } from "react";
export const Command = CommandPrimitive;
export const CommandInput = CommandPrimitive.Input;
export const CommandList = CommandPrimitive.List;
export const CommandEmpty = CommandPrimitive.Empty;
export const CommandGroup = CommandPrimitive.Group;
export const CommandItem = CommandPrimitive.Item;
export const CommandSeparator = CommandPrimitive.Separator;
export function CommandDialog({
  open,
  onOpenChange,
  children,
  title = "Command menu",
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  children: ReactNode;
  title?: string;
}) {
  const [viewport, setViewport] = useState<{ height: number; top: number }>();
  useEffect(() => {
    if (!open) return;
    const visual = window.visualViewport;
    const update = () =>
      setViewport({
        height: visual?.height ?? innerHeight,
        top: visual?.offsetTop ?? 0,
      });
    update();
    visual?.addEventListener("resize", update);
    visual?.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      visual?.removeEventListener("resize", update);
      visual?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="plot-command-dialog"
        aria-describedby={undefined}
        style={
          viewport
            ? ({
                "--plot-viewport-height": `${viewport.height}px`,
                "--plot-viewport-top": `${viewport.top}px`,
              } as CSSProperties)
            : undefined
        }
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}
