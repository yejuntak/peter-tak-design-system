// Adapted from shadcn/ui Button (MIT). Plot classes preserve the canonical identity.
import {
  cloneElement,
  isValidElement,
  type ComponentProps,
  type ReactElement,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils.js";
const variants = cva("button", {
  variants: {
    variant: {
      default: "button-primary",
      bare: "",
      primary: "button-primary",
      secondary: "button-secondary",
      outline: "button-secondary",
      ghost: "button-ghost",
      accent: "button-accent",
      destructive: "button-destructive",
      link: "link",
    },
    size: {
      default: "",
      sm: "button-sm",
      lg: "button-lg",
      icon: "button-icon",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof variants> & { asChild?: boolean; loading?: boolean };
export function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  onClick,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const content =
    asChild && (disabled || loading) && isValidElement(children)
      ? cloneElement(children as ReactElement<ComponentProps<"a">>, {
          onClick: (event) => {
            event.preventDefault();
            event.stopPropagation();
          },
          onClickCapture: (event) => {
            event.preventDefault();
            event.stopPropagation();
          },
          onKeyDown: (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              event.stopPropagation();
            }
          },
        })
      : children;
  const hasContentWrapper =
    isValidElement(children) &&
    (children as ReactElement<{ className?: string }>).props.className
      ?.split(/\s+/)
      .includes("button-content");
  return (
    <Comp
      data-slot="button"
      className={cn(
        variants({
          variant:
            variant ??
            (size === "icon" || className?.split(/\s+/).includes("button-icon")
              ? "bare"
              : "default"),
          size,
        }),
        className,
      )}
      type={type ?? (asChild ? undefined : "button")}
      aria-disabled={asChild && (disabled || loading) ? true : undefined}
      onClick={(event) => {
        if (disabled || loading) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      disabled={disabled || loading}
      {...props}
    >
      {loading && !asChild && !hasContentWrapper ? (
        <span className="button-content">{children}</span>
      ) : (
        content
      )}
    </Comp>
  );
}
