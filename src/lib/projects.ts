export type ProjectTag =
  | 'Full-Stack'
  | 'Automation'
  | 'DevOps'
  | 'Distributed Systems'
  | 'Infrastructure';

export type ProjectMetadata = {
  slug: string;
  title: string;
  stack: string[];
  problem: string;
  impact: string;
  featured?: boolean;
  tags: ProjectTag[];
};

const projects: ProjectMetadata[] = [
  {
    slug: 'enterprise-content-pipeline',
    title: 'Enterprise Content Pipeline',
    stack: ['Next.js', 'TypeScript', 'Playwright'],
    problem: 'Manual verification and publishing created quality bottlenecks.',
    impact: 'Reduced content verification cycle time by 30%.',
    featured: true,
    tags: ['Full-Stack', 'Automation'],
  },
  {
    slug: 'test-reliability-platform',
    title: 'Test Reliability Platform',
    stack: ['Node.js', 'CI/CD', 'Observability'],
    problem: 'Flaky tests blocked release confidence across teams.',
    impact: 'Cut rerun overhead by 6+ engineering hours per week.',
    featured: true,
    tags: ['Automation', 'DevOps'],
  },
  {
    slug: 'deployment-safety-gates',
    title: 'Deployment Safety Gates',
    stack: ['GitHub Actions', 'Feature Flags', 'Dashboards'],
    problem: 'Production regressions were discovered too late.',
    impact: 'Lowered hotfix frequency while improving release cadence.',
    featured: true,
    tags: ['Infrastructure', 'DevOps'],
  },
];

export const getProjects = () => projects;

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
