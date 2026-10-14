import { useDialogReturnFocus } from "../../src/components/ui/use-dialog-return-focus.js";
import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  ScheduleSelector,
} from "../../src";
export {
  LabResultFrame,
  RangeIndicatorFrame,
  TrendArrowFrame,
  ProgressBarFrame,
  ConfidenceTierFrame,
  ActionTrioFrame,
  RecommendationCardFrame,
  CarePlanFrame,
  HealthSnapshotFrame,
} from "../../src";
const DemoContext = createContext<(label: string) => void>(() => undefined);
export function VitaDemo({ children }: { children: ReactNode }) {
  const returnFocus = useDialogReturnFocus();
  const [action, setAction] = useState("");
  return (
    <DemoContext.Provider value={setAction}>
      <p className="vita-demo-banner">
        Fictional task-planning reference · no live service
      </p>
      {children}
      <aside className="vita-demo-disclaimer">
        Illustrative interface. All values, names and messages are synthetic UI
        examples. Controls simulate local interactions; nothing is sent, booked
        or saved.
      </aside>
      <Dialog
        open={Boolean(action)}
        onOpenChange={(open) => !open && setAction("")}
      >
        <DialogContent {...returnFocus}>
          <DialogTitle>{action}</DialogTitle>
          <DialogDescription>
            Local demonstration only. This action did not send a message, book
            an appointment or change a sample plan.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </DemoContext.Provider>
  );
}
export function DemoButton({
  children,
  className = "",
  onClick,
  ...props
}: ComponentProps<"button">) {
  const show = useContext(DemoContext);
  const handler: ComponentProps<"button">["onClick"] = (event) => {
    onClick?.(event);
    if (!event.defaultPrevented)
      show(
        event.currentTarget.getAttribute("aria-label") ||
          event.currentTarget.textContent?.trim() ||
          "Example action",
      );
  };
  if (className.split(/\s+/).includes("button"))
    return (
      <Button variant="bare" className={className} onClick={handler} {...props}>
        {children}
      </Button>
    );
  return (
    <button type="button" className={className} onClick={handler} {...props}>
      {children}
    </button>
  );
}
export function DemoSearch(props: ComponentProps<"input">) {
  const show = useContext(DemoContext);
  return (
    <input
      {...props}
      onKeyDown={(event) => {
        if (event.key === "Enter" && !event.nativeEvent.isComposing) {
          event.preventDefault();
          show("Example search");
        }
      }}
    />
  );
}
export function DemoTextarea(props: ComponentProps<"textarea">) {
  return <textarea {...props} />;
}
export function DemoSchedule() {
  const show = useContext(DemoContext);
  return (
    <ScheduleSelector
      defaultValue="wed"
      slots={[
        { value: "mon", label: "Mon · Jun 13", description: "7:30 AM" },
        { value: "wed", label: "Wed · Jun 15", description: "8:00 AM" },
        { value: "fri", label: "Fri · Jun 17", description: "7:45 AM" },
        { value: "sat", label: "Sat · Jun 18", description: "9:00 AM" },
      ]}
      onConfirm={() => show("Example appointment selected")}
    />
  );
}
