import { useEffect, useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button.js";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.js";
export interface NavigationItem {
  label: string;
  href: string;
  current?: boolean;
}
export function MobileMenu({
  items,
  trigger,
  label = "Navigation",
  breakpoint = 900,
}: {
  items: NavigationItem[];
  trigger?: ReactNode;
  label?: string;
  breakpoint?: number;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const media = matchMedia(`(min-width: ${breakpoint + 1}px)`);
    const close = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, [breakpoint]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button size="icon" aria-label="Open navigation">
            <Menu aria-hidden="true" size={20} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="plot-mobile-menu o-mobile-menu is-open"
        aria-describedby={undefined}
        overlayClassName="plot-mobile-menu-overlay"
      >
        <DialogTitle className="sr-only">{label}</DialogTitle>
        <nav aria-label={label}>
          {items.map((item) => (
            <a
              key={item.href}
              className="o-mobile-menu-link"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
export function Header({
  brand,
  mark,
  href = "/",
  items,
  actions,
}: {
  brand: string;
  mark?: ReactNode;
  href?: string;
  items: NavigationItem[];
  actions?: ReactNode;
}) {
  return (
    <header className="o-header plot-header">
      <a className="o-header-brand" href={href}>
        {mark && <span className="o-header-mark">{mark}</span>}
        <span className="o-header-name">{brand}</span>
      </a>
      <nav className="o-header-nav" aria-label="Main navigation">
        {items.map((item) => (
          <a
            key={item.href}
            className={`o-header-nav-link${item.current ? " is-active" : ""}`}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="o-header-end">
        {actions}
        <div className="o-header-mobile">
          <MobileMenu items={items} />
        </div>
      </div>
    </header>
  );
}
export function Footer({
  brand,
  statement,
  navigation,
  secondary,
  copyright,
  status,
}: {
  brand: ReactNode;
  statement?: ReactNode;
  navigation: NavigationItem[];
  secondary?: ReactNode;
  copyright?: ReactNode;
  status?: ReactNode;
}) {
  return (
    <footer className="o-footer">
      <div className="o-footer-grid">
        <div className="o-footer-statement">
          <div className="o-footer-mark">{brand}</div>
          {statement && <p className="o-footer-line">{statement}</p>}
          {status}
        </div>
        <nav className="o-footer-col" aria-label="Footer navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        {secondary && <div className="o-footer-col">{secondary}</div>}
      </div>
      {copyright && <div className="o-footer-meta">{copyright}</div>}
    </footer>
  );
}
