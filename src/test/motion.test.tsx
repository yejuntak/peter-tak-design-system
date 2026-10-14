import { afterEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { PersonaCard, TimelineEntry, Metric, CodeSnippet } from "../index.js";
afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});
describe("Original motion ownership", () => {
  it("retains mounted persona details for exit animation while removing them from interaction", () => {
    const { container } = render(
      <PersonaCard
        name="Example"
        role="Designer"
        initials="EX"
        job="Example job"
        goals={["Goal"]}
        frustrations={["Friction"]}
      />,
    );
    const details = container.querySelector(".o-persona-card-details")!;
    expect(details).not.toHaveAttribute("hidden");
    expect(details).toHaveAttribute("inert");
    expect(details).toHaveAttribute("aria-hidden", "true");
    fireEvent.click(screen.getByRole("button"));
    expect(details).not.toHaveAttribute("inert");
    expect(details).toHaveAttribute("aria-hidden", "false");
  });
  it("restores the original timeline visibility class", () => {
    const { container } = render(<TimelineEntry />);
    expect(container.firstChild).toHaveClass("is-visible");
  });
  it("counts metrics once after visibility and restores exact formatting", () => {
    let observe: IntersectionObserverCallback = () => {};
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor(callback: IntersectionObserverCallback) {
          observe = callback;
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    );
    const frames: FrameRequestCallback[] = [];
    vi.stubGlobal("requestAnimationFrame", (fn: FrameRequestCallback) => {
      frames.push(fn);
      return frames.length;
    });
    vi.stubGlobal("cancelAnimationFrame", () => {});
    const { container } = render(
      <Metric>
        <span className="m-metric-value">+12.5%</span>
      </Metric>,
    );
    const value = container.querySelector(".m-metric-value")!;
    expect(value.textContent).toBe("+0.0%");
    act(() =>
      observe(
        [{ isIntersecting: true, target: value } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      ),
    );
    act(() => frames.shift()!(100));
    act(() => frames.shift()!(650));
    expect(value.textContent).not.toBe("+0.0%");
    expect(value.textContent).not.toBe("+12.5%");
    act(() => frames.shift()!(1200));
    expect(value.textContent).toBe("+12.5%");
  });
  it("shows original accent copy feedback for 1600ms", async () => {
    vi.useFakeTimers();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
    render(<CodeSnippet code="example" />);
    await act(async () => fireEvent.click(screen.getByRole("button")));
    expect(screen.getByRole("button")).toHaveClass("is-copied");
    act(() => vi.advanceTimersByTime(1600));
    expect(screen.getByRole("button")).not.toHaveClass("is-copied");
  });
});
