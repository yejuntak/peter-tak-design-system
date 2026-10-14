import { useEffect, useRef, useState, type ComponentProps } from "react";
import { cn } from "../../lib/utils.js";
export function TimelineEntry({ className, ...props }: ComponentProps<"div">) {
  const node = useRef<HTMLDivElement>(null),
    [shown, setShown] = useState(false);
  useEffect(() => {
    const element = node.current;
    if (!element) return;
    if (
      !("IntersectionObserver" in window) ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      {...props}
      ref={node}
      className={cn("m-career-entry", shown && "is-visible", className)}
      data-reveal-init="true"
      data-reveal-shown={shown ? "true" : undefined}
    />
  );
}
