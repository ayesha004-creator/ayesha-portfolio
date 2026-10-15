import { useState, useCallback } from "react";
import { Github } from "lucide-react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";
import { site } from "../data/site";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelected} />)}
      </div>
      <div className="mt-10 text-center">
        <a href={site.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-navy hover:border-sky-accent dark:border-slate-600 dark:text-white">
          <Github size={20} aria-hidden="true" /> See more on GitHub<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </Section>
  );
}
