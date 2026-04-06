# Notion Setup: Portfolio Documentation and Task Tracking

Use this document to create your Notion page and task database. Copy each section into Notion as needed.

---

## 1. Notion Page Structure (Documentation)

Create one main page (e.g. **Portfolio Website — Spec**) and structure it so it mirrors the technical specification. Use toggles or subpages for long sections so the main page stays scannable.

### Suggested structure

1. **Overview**
   - Objective, role positioning (Full-Stack Engineer with Automation & Reliability Focus)
   - Tech stack: Next.js 14+ App Router, TypeScript, TailwindCSS, MDX
   - Constraints: no backend, static only, `output: 'export'` in next.config

2. **Routes**
   - Table of routes: `/`, `/projects`, `/projects/[slug]`, `/engineering`, `/resume`, `/contact`

3. **Features** (one subpage or toggle per feature)
   - **Home** — Hero, Proof strip, Featured projects, Engineering philosophy, Footer
   - **Projects** — List + tag filtering
   - **Project detail** — MDX + 7 sections (TL;DR, Problem, Architecture, Engineering Decisions, Implementation Details, Results, Future Improvements)
   - **Engineering** — Reliability, System design, Automation sections
   - **Resume** — PDF viewer, download, 3–5 bullet summary
   - **Contact** — mailto, LinkedIn, GitHub only

4. **Tech reference**
   - Folder structure (from spec §5)
   - `ProjectMetadata` interface (from spec §6)
   - Design tokens: accent color, font, spacing, max-width container

5. **Implementation order**
   - Phase 1: Layout, Navbar, Footer, globals, Tailwind theme
   - Phase 2: getProjects, mdxUtils, sample MDX files
   - Phase 3: Home → Projects list/detail → Engineering, Resume, Contact

6. **Done when**
   - Table of acceptance criteria (from spec §11) so each feature is checkable

---

## 2. Notion Tasks for Progress Tracking

Create a **Task database** or **list** with one task per deliverable. Use short, imperative titles so you can hand a task to an LLM (e.g. "Implement: Add Proof strip to home page; see Notion spec section Home > Proof strip").

### Suggested properties

| Property | Type | Values / Notes |
|----------|------|----------------|
| **Status** | Select | Not started, In progress, Done |
| **Phase** | Select | Setup, Phase 1, Phase 2, Phase 3 (optional) |
| **Blocked by** | Relation | Link to another task if dependent |

### Task list (aligned with implementation order)

Copy these as individual tasks into your Notion database or list.

| # | Task | Phase |
|---|------|--------|
| 1 | Setup: Next.js 14+ App Router, TypeScript, Tailwind, static export config (`output: 'export'`), folder structure | Setup |
| 2 | Design system: `globals.css`, Tailwind theme (accent, neutrals), typography, max-width container | Phase 1 |
| 3 | Layout: `layout.tsx`, `Navbar`, `Footer` | Phase 1 |
| 4 | Data layer: `ProjectMetadata` type, `getProjects.ts`, `mdxUtils.ts`, 1 sample MDX with full metadata | Phase 2 |
| 5 | Home: Hero (H1, subheadline, 2 CTAs), Proof strip (3–5 metrics), Featured projects (3 cards from `getProjects`), Engineering philosophy (3 principles), footer links | Phase 3 |
| 6 | Projects: List page with tag filter; ProjectCard/row with title, stack, problem, impact, link | Phase 3 |
| 7 | Project detail: Dynamic route `[slug]`, load MDX by slug, render 7 sections in order; diagram `alt` text | Phase 3 |
| 8 | Engineering: Static page with Reliability, System design, Automation sections | Phase 3 |
| 9 | Resume: Page with embedded PDF, download button, 3–5 bullet summary | Phase 3 |
| 10 | Contact: Links only (mailto, LinkedIn, GitHub) | Phase 3 |
| 11 | Polish: Lighthouse ≥90, WebP/next-image for images, sitemap (optional) | Phase 3 |

### Task title examples (short and imperative)

- Add Proof strip to home page
- Implement Projects list with tag filter
- Add Project detail page with MDX and 7 sections
- Create Engineering page with three sections
- Add Resume page with PDF and download button
- Add Contact page with mailto and social links
- Run Lighthouse and fix to ≥90; add sitemap

Keep task titles short so they work as prompts when delegating to an LLM: *"Implement the task: [title]; see Notion spec section [section]."*
