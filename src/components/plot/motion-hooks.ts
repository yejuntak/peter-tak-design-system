import { useEffect, useRef, useState } from "react";

// React owns the reveal lifecycle for a component subtree, with a visible fallback.
export function usePlotReveals(root: { current: HTMLElement | null }) {
  useEffect(() => {
    const elements = Array.from(
      root.current?.querySelectorAll<HTMLElement>(
        ".o-section, .o-process, [data-reveal]",
      ) || [],
    );
    const show = (element: HTMLElement) => {
      element.dataset.revealShown = "";
      element.classList.add("is-visible");
    };
    elements.forEach((element) => {
      element.dataset.reveal = "";
      element.dataset.revealInit = "";
    });
    if (
      !("IntersectionObserver" in window) ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach(show);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-40px 0px", threshold: 0.05 },
    );
    elements.forEach((element) => observer.observe(element));
    let frame = 0;
    const flush = () => {
      frame = 0;
      elements.forEach((element) => {
        const box = element.getBoundingClientRect();
        if (box.top < innerHeight * 0.95 && box.bottom > 0) {
          show(element);
          observer.unobserve(element);
        }
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(flush);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    flush();
    const timers = [setTimeout(flush, 600), setTimeout(flush, 1500)];
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, [root]);
}

// Return animation state; never replace text nodes owned by React.
// @deprecated The one-argument DOM hook keeps values static. Use Metric for React-owned count-up.
export function useMetricCountUp(
  root: { current: HTMLElement | null },
  source?: string,
) {
  const original = useRef(source);
  const changed = useRef(false);
  const [progress, setProgress] = useState<number | null>(null);
  useEffect(() => {
    if (source !== original.current) changed.current = true;
    if (
      source === undefined ||
      changed.current ||
      source !== original.current ||
      !("IntersectionObserver" in window) ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const elements =
      root.current?.querySelectorAll<HTMLElement>(".m-metric-value");
    if (!elements?.length) return;
    let active = true,
      started = false,
      frame = 0;
    let start: number | undefined;
    const step = (now: number) => {
      if (!active) return;
      start ??= now;
      const t = Math.min(1, (now - start) / 1100);
      setProgress(t === 1 ? null : 1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          !active ||
          started ||
          !entries.some((entry) => entry.isIntersecting)
        )
          return;
        started = true;
        observer.disconnect();
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.45 },
    );
    setProgress(0);
    elements.forEach((element) => observer.observe(element));
    return () => {
      active = false;
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [root, source]);
  // A new prop is authoritative even before effect cleanup cancels the old RAF.
  return !changed.current && source === original.current ? progress : null;
}
