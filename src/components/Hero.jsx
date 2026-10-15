import { site } from "../data/site";

const stats = ["BBIT Graduate", "Frontend · React · WordPress", "Open to Opportunities"];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="py-12 sm:py-20">
      <div className="hero-fade mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="order-2 lg:order-1">
          <h1 id="hero-title" className="text-3xl font-bold leading-tight sm:text-5xl">
            Frontend development, WordPress, and AI-assisted digital creation.
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg">
            I'm Ayesha Karamat, a BBIT graduate from Lahore with practical experience in frontend development, WordPress, and SEO. I enjoy learning new tools and building useful web experiences.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-xl bg-brand px-6 py-3 text-center font-semibold text-white shadow-soft transition-colors hover:bg-blue-800">View My Projects</a>
            <a href={site.cv} download className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-navy transition-colors hover:border-sky-accent hover:text-brand dark:border-slate-600 dark:text-white dark:hover:text-sky-accent">Download CV</a>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <li key={s} className="rounded-xl border border-l-4 border-slate-200 border-l-sky-accent bg-white px-4 py-3 text-sm font-semibold text-navy shadow-soft dark:border-slate-700 dark:border-l-sky-accent dark:bg-card dark:text-white">{s}</li>
            ))}
          </ul>
        </div>

        <div className="order-1 mx-auto lg:order-2">
          <div className="rounded-full bg-gradient-to-br from-brand to-sky-accent p-1.5">
            <img src={site.profileImage} width="360" height="360" alt="Portrait of Ayesha Karamat, frontend and WordPress developer from Lahore"
              className="aspect-square w-52 rounded-full border-4 border-white object-cover dark:border-navy sm:w-72 lg:w-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
