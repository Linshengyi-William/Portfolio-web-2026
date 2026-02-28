import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/lib/projects';

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container-page space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>

      <section>
        <h2 className="text-xl font-semibold">TL;DR</h2>
        <ul className="list-disc pl-5">
          <li>Built with: {project.stack.join(', ')}</li>
          <li>Problem: {project.problem}</li>
          <li>Impact: {project.impact}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p>Key workflows were slowed by manual validation and limited release confidence.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Architecture</h2>
        <p>Input events flow through validation utilities, CI checks, and a delivery pipeline.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Engineering Decisions</h2>
        <p>Prioritized deterministic automation and observability to reduce hidden failures.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Implementation Details</h2>
        <p>Implemented reusable test utilities, pipeline gates, and explicit failure handling.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Results</h2>
        <p>{project.impact}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Future Improvements</h2>
        <p>Expand telemetry depth and automate regression detection with trend alerts.</p>
      </section>
    </article>
  );
}
