import Section from "./Section";

const facts = [
  ["Degree", "BBIT"],
  ["Location", "Lahore, Pakistan"],
  ["Focus", "Frontend Development, React, WordPress"],
  ["Career Goal", "Junior frontend and WordPress opportunities"],
];

export default function About() {
  return (
    <Section id="about" title="About Me" alt>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p>I am a BBIT graduate with an Information Technology background, interested in frontend development, React.js, WordPress, and creating useful, accessible web experiences. My practical experience includes frontend development, WordPress websites, SEO, and academic projects.</p>
          <p>My Final Year Project, TalkBase, is an AI-powered customer support chatbot SaaS. I am also completing an AI freelancing course, where I am learning to use AI tools for no-code website creation, image and video generation, presentations, and digital content. I am currently learning client acquisition and look forward to applying these skills in real projects while continuing to grow professionally.</p>
        </div>
        <dl className="space-y-4 self-start rounded-xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-card">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt className="text-sm font-semibold text-brand dark:text-sky-accent">{k}</dt>
              <dd className="text-navy dark:text-white">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
