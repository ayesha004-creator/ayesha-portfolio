import Section from "./Section";

const steps = [
  ["Listen", "I understand your goals, audience, and needs."],
  ["Plan", "I create a clear plan before starting the work."],
  ["Build", "I build a clean, responsive, and useful solution."],
  ["Improve", "I test, refine, and improve the final result."],
];

export default function Process() {
  return (
    <Section id="process" title="How I Work" alt>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([title, text], i) => (
          <li key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-card">
            <span className="font-heading text-3xl font-bold text-brand dark:text-sky-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
