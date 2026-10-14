import {
  createContext,
  useContext,
  useEffect,
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
  const [theme, setTheme] = useState<Theme>(() => {
    if (storageKey && typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark" || saved === "system")
          return saved;
      } catch {
        /* Storage is optional. */
      }
    }
    return defaultTheme;
  });
  useEffect(() => {
    if (theme === "system")
      document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
    if (storageKey) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        /* Private browsing must not break theme controls. */
      }
    }
  }, [theme, storageKey]);
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
