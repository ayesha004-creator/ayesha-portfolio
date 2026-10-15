import { Linkedin, Github } from "lucide-react";
import { navLinks, site } from "../data/site";

export default function Footer() {
  const social = "rounded-lg p-2 text-slate-300 hover:text-sky-accent";
  return (
    <footer className="bg-navy py-10 pb-24 text-slate-300 dark:border-t dark:border-slate-800 sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <p className="text-sm">© 2026 Ayesha Karamat. Built with care.</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-sky-accent">{l.label}</a></li>)}
          </ul>
        </nav>
        <div className="flex gap-2">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Ayesha on LinkedIn" className={social}><Linkedin size={20} aria-hidden="true" /></a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Ayesha on GitHub" className={social}><Github size={20} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
