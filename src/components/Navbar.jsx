import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../data/site";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const linkClass = "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand dark:text-slate-300 dark:hover:text-sky-accent";
  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-navy/95">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="font-heading text-xl font-bold text-navy dark:text-white" aria-label="Ayesha, back to top">
          Ayesha<span className="text-brand dark:text-sky-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>)}
          <button type="button" onClick={toggleTheme} aria-label={themeLabel} className="ml-2 rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
            <ThemeIcon size={20} aria-hidden="true" />
          </button>
          <a href="#contact" className="ml-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800">Hire Me</a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button type="button" onClick={toggleTheme} aria-label={themeLabel} className="rounded-lg p-2 text-slate-600 dark:text-slate-300">
            <ThemeIcon size={22} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation menu" className="rounded-lg p-2 text-navy dark:text-white">
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-4 dark:border-slate-800 dark:bg-navy md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={close} className={`${linkClass} block py-3`}>{l.label}</a></li>
            ))}
          </ul>
          <a href="#contact" onClick={close} className="block rounded-xl bg-brand px-5 py-3 text-center text-sm font-semibold text-white">Hire Me</a>
        </div>
      )}
    </header>
  );
}
