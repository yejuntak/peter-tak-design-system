import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "../ui/button.js";
export type Theme = "system" | "light" | "dark";
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (value: Theme) => void;
} | null>(null);
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey,
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  // The first render is deterministic; persistence starts only after restoration.
  const initialTheme = useRef(defaultTheme).current;
  const source = JSON.stringify([storageKey]);
  const [selection, setSelection] = useState<{
    theme: Theme;
    source: string | null;
  }>({ theme: defaultTheme, source: null });
  const theme = selection.theme;
  useEffect(() => {
    let restored = initialTheme;
    if (storageKey) {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark" || saved === "system")
          restored = saved;
      } catch {
        /* Storage is optional. */
      }
    }
    setSelection({ theme: restored, source });
  }, [storageKey, initialTheme, source]);
  const setTheme = (value: Theme) => setSelection({ theme: value, source });
  useEffect(() => {
    if (theme === "system")
      document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
    if (storageKey && selection.source === source) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        /* Private browsing must not break theme controls. */
      }
    }
  }, [theme, storageKey, source, selection.source]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function ThemeToggle() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeToggle requires ThemeProvider");
  const { theme, setTheme } = context;
  const next =
    theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  return (
    <Button
      variant="bare"
      size="icon"
      className="theme-toggle"
      aria-label={`Theme: ${theme}. Switch to ${next}`}
      onClick={() => setTheme(next)}
    >
      <Icon size={18} aria-hidden="true" />
    </Button>
  );
}
