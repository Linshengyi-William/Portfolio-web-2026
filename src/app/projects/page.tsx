import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects, ProjectTag } from '@/lib/projects';

const tags: ProjectTag[] = [
  'Full-Stack',
  'Automation',
  'DevOps',
  'Distributed Systems',
  'Infrastructure',
];

const isProjectTag = (value: string): value is ProjectTag =>
  tags.includes(value as ProjectTag);

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: { tag?: string | string[] };
}) {
  const rawTag = searchParams?.tag;
  const selectedTag = typeof rawTag === 'string' && isProjectTag(rawTag) ? rawTag : undefined;

  const projects = getProjects();
  const filtered = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="container-page space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-2">
        <Link href="/projects" className="rounded-full border px-3 py-1 text-sm">
          All
        </Link>
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/projects?tag=${encodeURIComponent(tag)}`}
            className="rounded-full border px-3 py-1 text-sm"
          >
            {tag}
          </Link>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
