import { Code2, Globe, Sparkles, Presentation } from "lucide-react";
import Section from "./Section";

const services = [
  { icon: Code2, title: "Frontend Development", text: "Building responsive web interfaces and developing my frontend skills through practical projects.", tags: ["React.js", "JavaScript", "HTML", "CSS"] },
  { icon: Globe, title: "Websites & SEO", text: "Practical experience creating WordPress websites and working with SEO.", tags: ["WordPress", "SEO"] },
  { icon: Sparkles, title: "AI-Assisted Digital Creation", text: "Using AI tools and no-code platforms to create websites and digital content.", tags: ["No-code website creation", "AI image generation", "AI video creation", "AI-assisted content"] },
  { icon: Presentation, title: "Presentations", text: "Creating clear pitch decks and presentations with AI-assisted workflows.", tags: ["Pitch decks", "Presentations"] },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Tools">
      <ul className="grid gap-6 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, text, tags }) => (
          <li key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-card">
            <span className="inline-flex rounded-xl bg-sky-accent/15 p-3 text-brand dark:text-sky-accent"><Icon size={24} aria-hidden="true" /></span>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{text}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${title} skills`}>
              {tags.map((t) => <li key={t} className="rounded-full border border-slate-200 bg-light px-3 py-1 text-xs font-medium dark:border-slate-600 dark:bg-slate-800">{t}</li>)}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">I am currently learning client acquisition as part of my AI freelancing journey.</p>
    </Section>
  );
}
