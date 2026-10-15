import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, onOpen }) {
  const { icon: Icon, title, context, featured, description, tags, liveDemo, github } = project;
  const hasLiveDemo = Boolean(liveDemo && liveDemo !== "#");
  const hasGithub = Boolean(github && github !== "#");
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-card">
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-navy to-brand" aria-hidden="true">
        <Icon size={56} className="text-sky-accent" />
        {featured && <span className="absolute left-4 top-4 rounded-full bg-sky-accent px-3 py-1 text-xs font-bold text-navy">Featured</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        {context && <p className="text-sm font-medium text-brand dark:text-sky-accent">{context}</p>}
        <p className="mt-3 flex-1 text-sm">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
          {tags.map((t) => <li key={t} className="rounded-full border border-slate-200 bg-light px-3 py-1 text-xs font-medium dark:border-slate-600 dark:bg-slate-800">{t}</li>)}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {hasLiveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-accent">
              View Live Demo <ExternalLink size={16} aria-hidden="true" /><span className="sr-only"> for {title} (opens in a new tab)</span>
            </a>
          )}
          {hasGithub && (
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-navy hover:border-sky-accent dark:border-slate-600 dark:text-white">
              <Github size={16} aria-hidden="true" /> GitHub
              <span className="sr-only"> for {title} (opens in a new tab)</span>
            </a>
          )}
          <button type="button" onClick={() => onOpen(project)} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-navy hover:border-sky-accent dark:border-slate-600 dark:text-white">
            View Details<span className="sr-only"> of {title}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
