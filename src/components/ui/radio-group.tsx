import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ComponentProps,
} from "react";
import * as Primitive from "@radix-ui/react-radio-group";
import { cn } from "../../lib/utils.js";

type ArrowIntent = { source: EventTarget };
const Navigation = createContext<{
  pending: { current: ArrowIntent | null };
  heldArrow: { current: boolean };
  orientation: ComponentProps<typeof Primitive.Root>["orientation"];
} | null>(null);

export function RadioGroup({
  className,
  orientation,
  onPointerDownCapture,
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  const pending = useRef<ArrowIntent | null>(null);
  const heldArrow = useRef(false);
  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
      )
        heldArrow.current = true;
    };
    const up = () => {
      heldArrow.current = false;
    };
    document.addEventListener("keydown", down);
    document.addEventListener("keyup", up);
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("keyup", up);
    };
  }, []);
  return (
    <Navigation value={{ pending, heldArrow, orientation }}>
      <Primitive.Root
        className={cn("plot-radio-group", className)}
        orientation={orientation}
        {...props}
        onPointerDownCapture={(event) => {
          pending.current = null;
          onPointerDownCapture?.(event);
        }}
      />
    </Navigation>
  );
}
export function RadioGroupItem({
  className,
  onKeyDown,
  onFocus,
  ...props
}: ComponentProps<typeof Primitive.Item>) {
  const navigation = useContext(Navigation);
  return (
    <Primitive.Item
      className={cn("plot-radio", className)}
      {...props}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (
          !navigation ||
          event.defaultPrevented ||
          event.altKey ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey
        )
          return;
        const horizontal =
          event.key === "ArrowLeft" || event.key === "ArrowRight";
        const vertical = event.key === "ArrowUp" || event.key === "ArrowDown";
        if (
          (!horizontal && !vertical) ||
          (horizontal && navigation.orientation === "vertical") ||
          (vertical && navigation.orientation === "horizontal")
        )
          return;
        const intent = { source: event.currentTarget };
        navigation.pending.current = intent;
        // Radix schedules roving focus in this keydown. Expire an unused intent
        // just after that task, including no-move and canceled navigation.
        queueMicrotask(() => {
          setTimeout(() => {
            if (navigation.pending.current === intent)
              navigation.pending.current = null;
          }, 0);
        });
      }}
      onFocus={(event) => {
        onFocus?.(event);
        const intent = navigation?.pending.current;
        if (!intent || intent.source === event.currentTarget) return;
        if (event.defaultPrevented) return;
        // Radix handles selection while an arrow is held. Supply the missing
        // click only when a fast keyup preceded its deferred focus task.
        if (!navigation!.heldArrow.current) event.currentTarget.click();
      }}
    >
      <Primitive.Indicator className="plot-radio-indicator" />
    </Primitive.Item>
  );
}
