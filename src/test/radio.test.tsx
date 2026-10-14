import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup, RadioGroupItem } from "../index.js";
describe("Radio keyboard regressions", () => {
  it("held radio arrows invoke selection callbacks once and maintain the tab stop", async () => {
    const u = userEvent.setup();
    const click = vi.fn(),
      change = vi.fn();
    render(
      <RadioGroup
        value="a"
        onValueChange={change}
        aria-label="Controlled choices"
      >
        <RadioGroupItem value="a" aria-label="A" />
        <RadioGroupItem value="b" aria-label="B" onClick={click} />
        <RadioGroupItem value="c" aria-label="C" onClick={click} />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    radios[0].focus();
    await u.keyboard("{ArrowRight>}");
    await waitFor(() => expect(radios[1]).toHaveFocus());
    expect(click).toHaveBeenCalledTimes(1);
    expect(change).toHaveBeenCalledTimes(1);
    await u.keyboard("{ArrowRight>}");
    await waitFor(() => expect(radios[2]).toHaveFocus());
    expect(click).toHaveBeenCalledTimes(2);
    expect(change).toHaveBeenCalledTimes(2);
    expect(radios[2]).toHaveAttribute("tabindex", "0");
    await u.keyboard("{/ArrowRight}");
  });
  it("radio modifiers and item keydown cancellation preserve the selection", async () => {
    const u = userEvent.setup();
    const change = vi.fn();
    render(
      <RadioGroup
        defaultValue="a"
        onValueChange={change}
        aria-label="Canceled choices"
      >
        <RadioGroupItem
          value="a"
          aria-label="A"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") event.preventDefault();
          }}
        />
        <RadioGroupItem value="b" aria-label="B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    radios[0].focus();
    await u.keyboard("{ArrowRight}");
    await u.keyboard("{Shift>}{ArrowLeft}{/Shift}");
    expect(radios[0]).toHaveFocus();
    expect(radios[0]).toHaveAttribute("aria-checked", "true");
    expect(change).not.toHaveBeenCalled();
  });
  it.each([
    ["ArrowRight", "ArrowLeft", "C"],
    ["ArrowLeft", "ArrowRight", "B"],
  ])(
    "queued radio taps %s then %s keep focus and selection together",
    async (first, second, expected) => {
      render(
        <RadioGroup defaultValue="a" aria-label="Burst choices">
          <RadioGroupItem value="a" aria-label="A" />
          <RadioGroupItem value="b" aria-label="B" />
          <RadioGroupItem value="c" aria-label="C" />
        </RadioGroup>,
      );
      const start = screen.getByRole("radio", { name: "A" });
      start.focus();
      for (const key of [first, second]) {
        fireEvent.keyDown(start, { key });
        fireEvent.keyUp(start, { key });
      }
      const last = screen.getByRole("radio", { name: expected });
      await waitFor(() => {
        expect(last).toHaveFocus();
        expect(last).toHaveAttribute("aria-checked", "true");
        expect(last).toHaveAttribute("tabindex", "0");
      });
    },
  );
});
