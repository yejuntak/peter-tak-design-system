import { useEffect, useId, useRef, useState, type ReactNode } from "react";
export function TableRegion({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const hint = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const update = () => setOverflow(node.scrollWidth > node.clientWidth + 1);
    update();
    const observer =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(update);
    const observeContent = () => {
      observer?.disconnect();
      observer?.observe(node);
      Array.from(node.children).forEach((child) => observer?.observe(child));
      update();
    };
    observeContent();
    const mutations = new MutationObserver(observeContent);
    mutations.observe(node, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    node.addEventListener("load", update, true);
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      mutations.disconnect();
      node.removeEventListener("load", update, true);
      window.removeEventListener("resize", update);
    };
  }, [children]);
  return (
    <div className="plot-table-region">
      {overflow && (
        <p id={hint} className="plot-table-hint">
          Scroll horizontally to see all columns{" "}
          <span aria-hidden="true">→</span>
        </p>
      )}
      <div
        ref={ref}
        className="ds-table-scroll"
        role="region"
        aria-label={label}
        aria-describedby={overflow ? hint : undefined}
        tabIndex={overflow ? 0 : undefined}
      >
        {children}
      </div>
    </div>
  );
}
