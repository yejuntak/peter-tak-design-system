import { useEffect } from "react";

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

export function useMetricCountUp(root: { current: HTMLElement | null }) {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const elements = Array.from(
      root.current?.querySelectorAll<HTMLElement>(".m-metric-value") || [],
    );
    const originals = new Map<HTMLElement, string>();
    const frames = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          const raw = originals.get(element)!;
          const match = raw.match(
            /^([^\d+\-−.]*)([+\-−]?)(\d+(?:[.,]\d+)?)(.*)$/,
          )!;
          const prefix = match[1] + match[2],
            number = match[3].replace(",", "."),
            target = Number(number),
            suffix = match[4];
          const decimals = (number.split(".")[1] || "").length;
          let start: number | undefined;
          const step = (now: number) => {
            start ??= now;
            const t = Math.min(1, (now - start) / 1100);
            element.textContent =
              t === 1
                ? raw
                : prefix +
                  (target * (1 - Math.pow(1 - t, 3))).toFixed(decimals) +
                  suffix;
            if (t < 1) frames.add(requestAnimationFrame(step));
          };
          frames.add(requestAnimationFrame(step));
        });
      },
      { threshold: 0.45 },
    );
    elements.forEach((element) => {
      const raw = element.textContent?.trim() || "";
      const match = raw.match(/^([^\d+\-−.]*)([+\-−]?)(\d+(?:[.,]\d+)?)(.*)$/);
      if (!match || Number(match[3].replace(",", ".")) === 0) return;
      originals.set(element, raw);
      element.textContent =
        match[1] +
        match[2] +
        (0).toFixed((match[3].split(/[.,]/)[1] || "").length) +
        match[4];
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      frames.forEach(cancelAnimationFrame);
      originals.forEach((raw, element) => {
        element.textContent = raw;
      });
    };
  }, [root]);
}
