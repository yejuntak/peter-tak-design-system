import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  type ReactNode,
} from "react";
type TextProps = { children?: ReactNode; className?: string };
export function metricSource(children: ReactNode): string {
  return Children.toArray(children)
    .map((child): string => {
      if (typeof child === "string" || typeof child === "number")
        return String(child);
      return isValidElement<TextProps>(child) &&
        (typeof child.type === "string" || child.type === Fragment)
        ? metricSource(child.props.children)
        : "";
    })
    .join("");
}
export function animateMetricChildren(
  children: ReactNode,
  progress: number | null,
): ReactNode {
  function visit(nodes: ReactNode, metric?: { used: boolean }): ReactNode {
    return Children.map(nodes, (child) => {
      if (
        metric &&
        !metric.used &&
        (typeof child === "string" || typeof child === "number")
      ) {
        const raw = String(child);
        const match = raw.match(
          /^([^\d+\-−.]*)([+\-−]?)(\d+(?:[.,]\d+)?)(.*)$/,
        );
        if (!match) return child;
        metric.used = true;
        if (progress === null) return child;
        const number = match[3].replace(",", ".");
        const decimals = (number.split(".")[1] || "").length;
        return (
          match[1] +
          match[2] +
          (Number(number) * progress).toFixed(decimals) +
          match[4]
        );
      }
      // Custom component children may be opaque (including render props). Never rewrite them.
      if (
        !isValidElement<TextProps>(child) ||
        child.props.children === undefined ||
        (typeof child.type !== "string" && child.type !== Fragment)
      )
        return child;
      const scope = /(?:^|\s)m-metric-value(?:\s|$)/.test(
        child.props.className || "",
      )
        ? { used: false }
        : metric;
      return cloneElement(child, undefined, visit(child.props.children, scope));
    });
  }
  // Keep the same element keys/structure before, during, and after the animation.
  return visit(children);
}
