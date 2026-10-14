import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  ActionTrio,
  ConfidenceTier,
  LabResult,
  ProgressBar,
  RangeIndicator,
  RecommendationCard,
  CarePlan,
  HealthSnapshot,
  ScheduleSelector,
  type LabResultProps,
} from "../index.js";
const example: LabResultProps = {
  name: "Sample",
  value: 12,
  unit: "units",
  status: "watch",
  statusLabel: "Review",
  explanation: "Supplied interpretation.",
  trend: { direction: "up", label: "Increased in this example" },
  range: {
    position: 40,
    label: "Example at 40 percent",
    lowLabel: "Low",
    referenceLabel: "Reference",
    highLabel: "High",
  },
};
describe("Vita reusable contracts", () => {
  it("keeps dismiss, modify, accept in logical order and invokes each once", () => {
    const onDismiss = vi.fn(),
      onModify = vi.fn(),
      onAccept = vi.fn();
    render(<ActionTrio {...{ onDismiss, onModify, onAccept }} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.map((b) => b.textContent)).toEqual([
      "Set aside",
      "Adjust",
      "Accept",
    ]);
    buttons.forEach((b) => fireEvent.click(b));
    [onDismiss, onModify, onAccept].forEach((fn) =>
      expect(fn).toHaveBeenCalledTimes(1),
    );
    expect(screen.getByRole("group")).toHaveAccessibleName(
      "Respond to recommendation",
    );
  });
  it.each([
    ["high", "Based on supplied context"],
    ["medium", "Consider"],
    ["low", "Review with a person"],
  ] as const)("retains %s qualitative label", (level, label) => {
    render(<ConfidenceTier level={level} />);
    expect(screen.getByText(label)).toBeVisible();
  });
  it("requires meaningful text alongside range, status and trend", () => {
    render(<LabResult {...example} />);
    expect(screen.getByText("Supplied interpretation.")).toBeVisible();
    expect(screen.getByRole("img")).toHaveAccessibleName(
      "Example at 40 percent",
    );
    expect(screen.getByText("Reference")).toBeVisible();
    expect(screen.getByText("Increased in this example")).toBeVisible();
  });
  it("only uses compact styling when detail is reachable, without duplicate explanation", () => {
    const { container, rerender } = render(<LabResult {...example} compact />);
    expect(container.firstChild).not.toHaveClass("m-lab-result--compact");
    expect(screen.getAllByText("Supplied interpretation.")).toHaveLength(1);
    rerender(<LabResult {...example} compact detailHref="/detail" />);
    expect(container.firstChild).toHaveClass("m-lab-result--compact");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/detail");
  });
  it.each([-10, 0, 50, 100, 120, NaN])(
    "clamps range position %s safely",
    (position) => {
      const { container } = render(
        <RangeIndicator
          position={position}
          label="Range"
          lowLabel="Low"
          highLabel="High"
        />,
      );
      const value = (
        container.firstChild as HTMLElement
      ).style.getPropertyValue("--range-position");
      expect(parseFloat(value)).toBeGreaterThanOrEqual(0);
      expect(parseFloat(value)).toBeLessThanOrEqual(100);
    },
  );
  it.each([
    [0, 7, 0],
    [4, 7, 4],
    [9, 7, 7],
    [-2, 7, 0],
  ])("progress %s/%s has valid measured ARIA", (completed, target, value) => {
    render(<ProgressBar completed={completed} target={target} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", String(value));
    expect(bar).toHaveAttribute("aria-valuemax", String(target));
  });
  it.each([0, -1, NaN])(
    "invalid target %s is unmeasured, with an honest label",
    (target) => {
      render(<ProgressBar completed={2} target={target} />);
      expect(screen.getByRole("progressbar")).not.toHaveAttribute(
        "aria-valuenow",
      );
      expect(screen.getByText(/no target set/)).toBeVisible();
    },
  );
  it("preserves recommendation head/body/direct footer anatomy", () => {
    const { container } = render(
      <RecommendationCard
        title="Example"
        confidence="medium"
        rationale="Rationale"
        metadata="Meta"
        actions={{ onAccept: vi.fn(), onModify: vi.fn(), onDismiss: vi.fn() }}
      />,
    );
    expect(
      container.querySelector(
        ".o-recommendation-card-body > .o-recommendation-card-title",
      ),
    ).toHaveTextContent("Example");
    expect(
      container.querySelector(
        ".o-recommendation-card-body > .o-recommendation-card-rationale",
      ),
    ).toHaveTextContent("Rationale");
    expect(
      container.querySelector(".o-recommendation-card > .m-action-trio"),
    ).toBeTruthy();
  });
  it("preserves care checklist and snapshot title geometry", () => {
    const { container } = render(
      <>
        <CarePlan
          title="Plan"
          goals={[{ id: "one", title: "Goal", completed: 1, target: 3 }]}
        />
        <HealthSnapshot title="Snapshot" results={[example]} />
      </>,
    );
    expect(
      container.querySelector(".o-care-plan-list > .o-care-plan-item"),
    ).toBeTruthy();
    expect(
      container.querySelector(".o-health-snapshot-title"),
    ).toHaveTextContent("Snapshot");
  });
  it("cannot confirm stale or disabled appointment values", () => {
    const onConfirm = vi.fn();
    const slots = [
      { value: "one", label: "One" },
      { value: "two", label: "Two", disabled: true },
    ];
    const { rerender } = render(
      <ScheduleSelector slots={slots} value="missing" onConfirm={onConfirm} />,
    );
    expect(screen.getByRole("button")).toBeDisabled();
    rerender(
      <ScheduleSelector slots={slots} value="two" onConfirm={onConfirm} />,
    );
    expect(screen.getByRole("button")).toBeDisabled();
    rerender(
      <ScheduleSelector slots={slots} value="one" onConfirm={onConfirm} />,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onConfirm).toHaveBeenCalledExactlyOnceWith("one");
  });
});
