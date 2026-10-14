import { useEffect, useRef, useState } from "react";
export function CodeSnippet({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  const [state, setState] = useState("Copy"),
    timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timeout.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setState("Copied");
    } catch {
      setState("Copy unavailable. Select the code to copy.");
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setState("Copy"), 1600);
  }
  return (
    <div className="m-code-snippet">
      <div className="m-code-snippet-head">
        <span className="m-code-snippet-lang">{language}</span>
        <button
          type="button"
          className={`m-code-snippet-copy${state === "Copied" ? " is-copied" : ""}`}
          onClick={() => void copy()}
        >
          {state}
        </button>
        <span className="sr-only" role="status">
          {state === "Copy" ? "" : state}
        </span>
      </div>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
}
