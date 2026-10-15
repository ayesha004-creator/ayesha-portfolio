export default function Section({ id, title, children, alt = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-16 sm:py-24 ${alt ? "bg-light dark:bg-slate-900/60" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id={`${id}-title`} className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-2 h-1 w-12 rounded bg-sky-accent" aria-hidden="true" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
