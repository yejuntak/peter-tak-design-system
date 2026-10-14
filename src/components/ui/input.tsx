import type { ComponentProps } from "react";
import { cn } from "../../lib/utils.js";
export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input data-slot="input" className={cn("input", className)} {...props} />
  );
}
export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn("plot-textarea", className)}
      {...props}
    />
  );
}
export function NativeSelect({
  className,
  ...props
}: ComponentProps<"select">) {
  return (
    <select
      data-slot="native-select"
      className={cn("plot-select", className)}
      {...props}
    />
  );
}
