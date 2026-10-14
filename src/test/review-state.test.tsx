import { useRef } from "react";
import { useMetricCountUp } from "../components/plot/motion-hooks.js";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { act, render, screen, cleanup } from "@testing-library/react";
import { TableRegion } from "../components/plot/table-region.js";
import { Metric } from "../components/plot/compositions.js";
import { Progress } from "../components/ui/progress.js";
let observer: IntersectionObserverCallback;
let frames: FrameRequestCallback[];
beforeEach(() => {
  frames = [];
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(cb: IntersectionObserverCallback) {
        observer = cb;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    frames.push(cb);
    return frames.length;
  });
  vi.stubGlobal("cancelAnimationFrame", () => {});
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});
const start = (value: Element) =>
  act(() =>
    observer(
      [{ isIntersecting: true, target: value } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    ),
  );
const frame = (time: number) => act(() => frames.shift()!(time));
describe("independent component state review", () => {
  it("metric should retain a newly rendered value after old animation completes", () => {
    const { container, rerender } = render(
      <Metric>
        <span className="m-metric-value">12</span>
      </Metric>,
    );
    const value = container.querySelector(".m-metric-value")!;
    start(value);
    frame(0);
    rerender(
      <Metric>
        <span className="m-metric-value">99</span>
      </Metric>,
    );
    expect(value.textContent).toBe("99");
    frame(1100);
    expect(value.textContent).toBe("99");
  });
  it("metric should preserve React owned nested markup and updates", () => {
    const { container, rerender } = render(
      <Metric>
        <span className="m-metric-value">
          <strong>12</strong>
          <i>%</i>
        </span>
      </Metric>,
    );
    expect(container.querySelector("strong")).toHaveTextContent("0");
    expect(container.querySelector("i")).toHaveTextContent("%");
    expect(() =>
      rerender(
        <Metric>
          <span className="m-metric-value">
            <i>%</i>
          </span>
        </Metric>,
      ),
    ).not.toThrow();
  });
  it("progress should show half fill with value 5 max 10", () => {
    const { container } = render(
      <Progress value={5} max={10} aria-label="Upload" />,
    );
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuemax",
      "10",
    );
    expect(container.querySelector(".plot-progress-indicator")).toHaveStyle({
      transform: "translateX(-50%)",
    });
  });
  it("table overflow should update when wider children replace the same-height content", () => {
    const observed: Element[] = [];
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe(node: Element) {
          observed.push(node);
        }
        disconnect() {}
      },
    );
    let width = 300;
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(
      () => 320,
    );
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockImplementation(
      () => width,
    );
    const { rerender } = render(
      <TableRegion label="Results">
        <table>
          <tbody>
            <tr>
              <td>One column</td>
            </tr>
          </tbody>
        </table>
      </TableRegion>,
    );
    const region = screen.getByRole("region");
    expect(region).not.toHaveAttribute("tabindex");
    expect(observed).toContain(region);
    width = 900;
    rerender(
      <TableRegion label="Results">
        <table>
          <tbody>
            <tr>
              {["One", "Two", "Three", "Four"].map((c) => (
                <td key={c}>{c}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </TableRegion>,
    );
    expect(region.scrollWidth).toBeGreaterThan(region.clientWidth);
    expect(region).toHaveAttribute("tabindex", "0");
  });
});

it.each([
  [0, 10, 100],
  [10, 10, 0],
  [5, 10, 50],
  [25, 50, 50],
])(
  "progress value %s / max %s matches its accessible value",
  (value, max, offset) => {
    const { container } = render(<Progress value={value} max={max} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      String(value),
    );
    expect(container.querySelector(".plot-progress-indicator")).toHaveStyle({
      transform: `translateX(-${offset}%)`,
    });
  },
);
it.each([null, -1, 11, NaN, Infinity])(
  "invalid progress %s is consistently indeterminate",
  (value) => {
    const { container } = render(<Progress value={value} max={10} />);
    expect(screen.getByRole("progressbar")).not.toHaveAttribute(
      "aria-valuenow",
    );
    expect(container.querySelector(".plot-progress-indicator")).toHaveAttribute(
      "data-state",
      "indeterminate",
    );
    expect(
      (container.querySelector(".plot-progress-indicator") as HTMLElement).style
        .transform,
    ).toBe("");
  },
);
it.each([0, -1, NaN, Infinity])(
  "invalid maximum %s uses the default",
  (max) => {
    const { container } = render(<Progress value={50} max={max} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuemax",
      "100",
    );
    expect(container.querySelector(".plot-progress-indicator")).toHaveStyle({
      transform: "translateX(-50%)",
    });
  },
);
it("table content resize adds and removes overflow guidance without an outer resize", () => {
  let resize = () => {};
  const observed: Element[] = [];
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(cb: () => void) {
        resize = cb;
      }
      observe(node: Element) {
        observed.push(node);
      }
      disconnect() {}
    },
  );
  let width = 300;
  vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(320);
  vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockImplementation(
    () => width,
  );
  render(
    <TableRegion label="Dynamic">
      <table>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </table>
    </TableRegion>,
  );
  expect(observed.some((node) => node.tagName === "TABLE")).toBe(true);
  const region = screen.getByRole("region");
  width = 900;
  act(resize);
  expect(region).toHaveAttribute("tabindex", "0");
  expect(region).toHaveAccessibleDescription(/Scroll horizontally/);
  width = 100;
  act(resize);
  expect(region).not.toHaveAttribute("tabindex");
  expect(region).not.toHaveAttribute("aria-describedby");
});
it("animates only the first number and preserves nested suffix markup and custom render-prop contracts", () => {
  const Child = ({ children }: { children: () => string }) => (
    <small>{children()}</small>
  );
  const { container } = render(
    <Metric>
      <span className="m-metric-value">
        <strong>4</strong>
        <span> / 5</span>
      </span>
      <Child>{() => "Detail"}</Child>
    </Metric>,
  );
  expect(container.querySelector(".m-metric-value")).toHaveTextContent("0 / 5");
  expect(screen.getByText("Detail")).toBeVisible();
  const value = container.querySelector(".m-metric-value")!;
  const strong = value.querySelector("strong");
  start(value);
  frame(0);
  frame(1100);
  expect(container.querySelector(".m-metric-value")).toBe(value);
  expect(value.querySelector("strong")).toBe(strong);
  expect(value).toHaveTextContent("4 / 5");
});
it("retains the deprecated one-argument count-up call as a safe static fallback", () => {
  const Legacy = () => {
    const root = useRef<HTMLDivElement>(null);
    useMetricCountUp(root);
    return (
      <div ref={root}>
        <span className="m-metric-value">
          <strong>12</strong>
          <i>%</i>
        </span>
      </div>
    );
  };
  const { container } = render(<Legacy />);
  expect(container.querySelector("strong")).toHaveTextContent("12");
  expect(frames).toHaveLength(0);
});
