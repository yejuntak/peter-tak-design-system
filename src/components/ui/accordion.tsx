import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils.js";
export const Accordion = Primitive.Root;
export function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof Primitive.Item>) {
  return (
    <Primitive.Item className={cn("plot-disclosure", className)} {...props} />
  );
}
export function AccordionTrigger({
  children,
  ...props
}: ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header>
      <Primitive.Trigger className="plot-accordion-trigger" {...props}>
        {children}
        <ChevronDown size={16} />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
export function AccordionContent(
  props: ComponentProps<typeof Primitive.Content>,
) {
  return <Primitive.Content className="plot-accordion-content" {...props} />;
}
