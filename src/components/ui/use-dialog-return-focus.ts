import { useRef } from "react";
// For controlled dialogs opened without a Radix Trigger (shortcuts, menus, demos).
export function useDialogReturnFocus() {
  const invoker = useRef<HTMLElement | null>(null);
  return {
    onOpenAutoFocus: () => {
      invoker.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
    },
    onCloseAutoFocus: (event: Event) => {
      if (
        event.defaultPrevented ||
        !invoker.current?.isConnected ||
        invoker.current === document.body
      )
        return;
      event.preventDefault();
      invoker.current.focus({ preventScroll: true });
    },
  };
}
