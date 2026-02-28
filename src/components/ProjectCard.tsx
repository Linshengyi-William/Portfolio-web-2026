import Link from 'next/link';
import { ProjectMetadata } from '@/lib/projects';

export function ProjectCard({ project }: { project: ProjectMetadata }) {
  return (
    <article className="rounded-xl border border-slate-200 p-5">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{project.stack.join(' · ')}</p>
      <p className="mt-3 text-sm">Problem: {project.problem}</p>
      <p className="mt-2 text-sm text-slate-700">Impact: {project.impact}</p>
      <Link className="mt-4 inline-block text-sm font-medium text-accent" href={`/projects/${project.slug}`}>
        View details →
      </Link>
    </article>
  );
}
