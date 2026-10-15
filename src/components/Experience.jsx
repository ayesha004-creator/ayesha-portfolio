import { Briefcase, GraduationCap } from "lucide-react";
import Section from "./Section";

const items = [
  { icon: Briefcase, title: "Frontend & WordPress Development", meta: "Practical experience", text: "Hands-on experience with frontend development, WordPress websites, and SEO through practical and academic work." },
  { icon: GraduationCap, title: "BBIT Graduate", meta: "Education", text: "Bachelor of Business Information Technology. Final year project: TalkBase AI." },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education" alt>
      <ol className="ml-5 max-w-3xl border-l-2 border-slate-200 dark:border-slate-700">
        {items.map(({ icon: Icon, title, meta, text }) => (
          <li key={title} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-sky-accent bg-white text-brand dark:bg-navy dark:text-sky-accent">
              <Icon size={18} aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm font-semibold text-brand dark:text-sky-accent">{meta}</p>
            <p className="mt-2">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
