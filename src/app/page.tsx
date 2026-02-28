import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/lib/projects';

const proofMetrics = [
  'Reduced regression effort by 6+ hours/week',
  'Improved verification efficiency by 30%',
  'Lowered release rollback frequency',
];

export default function HomePage() {
  const featured = getProjects().filter((project) => project.featured).slice(0, 3);

  return (
    <div className="container-page space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Full-Stack Engineer focused on automation and reliability.</h1>
        <p className="max-w-2xl text-slate-700">
          I build systems that improve delivery speed, reduce operational noise, and provide measurable outcomes.
        </p>
        <div className="flex gap-4">
          <Link className="rounded-lg bg-accent px-4 py-2 text-white" href="/projects">
            View Projects
          </Link>
          <Link className="rounded-lg border border-slate-300 px-4 py-2" href="/resume">
            Download Resume
          </Link>
        </div>
      </section>

      <section className="grid gap-3 rounded-xl bg-slate-100 p-4 md:grid-cols-3">
        {proofMetrics.map((metric) => (
          <p key={metric} className="text-sm font-medium">
            {metric}
          </p>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Engineering Philosophy</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Reliability-first</li>
          <li>Observability-driven</li>
          <li>Automation-centric</li>
        </ul>
      </section>
    </div>
  );
}
