import { it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState, StrictMode } from "react";
import {
  Button,
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  PlotTooltip,
  TooltipProvider,
  Tag,
} from "../index.js";
import {
  VitaDemo,
  DemoButton,
  DemoSearch,
  DemoSchedule,
} from "../../demo/vita/shared.js";

it("restores actual command invoker after Escape and Close across different repeated openings", async () => {
  function Demo() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>First opener</Button>
        <Button onClick={() => setOpen(true)}>Second opener</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput aria-label="Search" />
            <CommandList>
              <CommandItem>One</CommandItem>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  }
  const u = userEvent.setup();
  render(<Demo />);
  for (const [name, escape] of [
    ["First opener", true],
    ["Second opener", false],
    ["First opener", true],
  ] as const) {
    const opener = screen.getByRole("button", { name });
    await u.click(opener);
    await waitFor(() => expect(screen.getByRole("combobox")).toHaveFocus());
    if (escape) await u.keyboard("{Escape}");
    else await u.click(screen.getByRole("button", { name: "Close dialog" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    await waitFor(() => expect(opener).toHaveFocus());
  }
});

it("restores actual Vita button, search input, and schedule confirmation invokers", async () => {
  const u = userEvent.setup();
  render(
    <VitaDemo>
      <DemoButton>First action</DemoButton>
      <DemoButton>Second action</DemoButton>
      <DemoSearch aria-label="Vita search" />
      <DemoSchedule />
    </VitaDemo>,
  );
  for (const name of ["First action", "Second action", "Confirm slot"]) {
    const opener = screen.getByRole("button", { name });
    await u.click(opener);
    await waitFor(() => expect(screen.getByRole("dialog")).toBeInTheDocument());
    await u.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    await waitFor(() => expect(opener).toHaveFocus());
  }
  const input = screen.getByRole("textbox", { name: "Vita search" });
  await u.click(input);
  await u.keyboard("sample{Enter}");
  await waitFor(() => expect(screen.getByRole("dialog")).toBeInTheDocument());
  await u.click(screen.getByRole("button", { name: "Close dialog" }));
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  await waitFor(() => expect(input).toHaveFocus());
});

it.each(["tag", "strong", "text"])(
  "makes noninteractive %s tooltip content keyboard reachable",
  async (kind) => {
    const child =
      kind === "tag" ? (
        <Tag>Info</Tag>
      ) : kind === "strong" ? (
        <strong>Info</strong>
      ) : (
        "Info"
      );
    render(
      <TooltipProvider>
        <PlotTooltip label="Helpful information">{child}</PlotTooltip>
      </TooltipProvider>,
    );
    const u = userEvent.setup();
    await u.tab();
    expect(screen.getByText("Info")).toHaveFocus();
  },
);

it.each(["tag", "span", "button"])(
  "preserves explicit negative tabIndex on %s tooltip triggers",
  async (kind) => {
    const child =
      kind === "tag" ? (
        <Tag tabIndex={-1}>Info</Tag>
      ) : kind === "span" ? (
        <span tabIndex={-1}>Info</span>
      ) : (
        <button tabIndex={-1}>Info</button>
      );
    render(
      <TooltipProvider>
        <PlotTooltip label="Helpful information">{child}</PlotTooltip>
        <button>Next</button>
      </TooltipProvider>,
    );
    expect(screen.getByText("Info")).toHaveAttribute("tabindex", "-1");
    const u = userEvent.setup();
    await u.tab();
    expect(screen.getByRole("button", { name: "Next" })).toHaveFocus();
  },
);

it("preserves native button, link, and disabled button behavior", async () => {
  const u = userEvent.setup();
  render(
    <TooltipProvider>
      <PlotTooltip label="Button help">
        <button>Native button</button>
      </PlotTooltip>
      <PlotTooltip label="Link help">
        <a href="#destination">Native link</a>
      </PlotTooltip>
      <PlotTooltip label="Disabled help">
        <button disabled>Disabled button</button>
      </PlotTooltip>
      <button>Next</button>
    </TooltipProvider>,
  );
  await u.tab();
  expect(screen.getByRole("button", { name: "Native button" })).toHaveFocus();
  await u.tab();
  expect(screen.getByRole("link", { name: "Native link" })).toHaveFocus();
  await u.tab();
  expect(screen.getByRole("button", { name: "Next" })).toHaveFocus();
  expect(
    screen.getByRole("button", { name: "Disabled button" }),
  ).toBeDisabled();
});

it("respects consumer close autofocus override", async () => {
  function Demo() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open overridable command</Button>
        <button id="review-destination">Destination</button>
        <CommandDialog
          open={open}
          onOpenChange={setOpen}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            document.getElementById("review-destination")?.focus();
          }}
        >
          <Command>
            <CommandInput aria-label="Search" />
            <CommandList>
              <CommandItem>One</CommandItem>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  }
  const u = userEvent.setup();
  render(<Demo />);
  await u.click(
    screen.getByRole("button", { name: "Open overridable command" }),
  );
  await u.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "Destination" })).toHaveFocus(),
  );
});

it("safely dismisses after the invoker is unmounted", async () => {
  function Demo() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    return (
      <>
        {visible && (
          <Button onClick={() => setOpen(true)}>Temporary opener</Button>
        )}
        <CommandDialog open={open} onOpenChange={setOpen}>
          <button onClick={() => setVisible(false)}>Remove opener</button>
          <Command>
            <CommandInput aria-label="Search" />
            <CommandList>
              <CommandItem>One</CommandItem>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  }
  const u = userEvent.setup();
  render(<Demo />);
  await u.click(screen.getByRole("button", { name: "Temporary opener" }));
  await u.click(screen.getByRole("button", { name: "Remove opener" }));
  await u.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  expect(screen.queryByRole("button", { name: "Temporary opener" })).toBeNull();
});

it("restores command focus under StrictMode", async () => {
  function Demo() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Strict opener</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput aria-label="Search" />
            <CommandList>
              <CommandItem>One</CommandItem>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  }
  const u = userEvent.setup();
  render(
    <StrictMode>
      <Demo />
    </StrictMode>,
  );
  const opener = screen.getByRole("button", { name: "Strict opener" });
  await u.click(opener);
  await waitFor(() => expect(screen.getByRole("combobox")).toHaveFocus());
  await u.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  await waitFor(() => expect(opener).toHaveFocus());
});
