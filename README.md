# Portfolio-web-2026

Personal portfolio website for **Linshengyi Sun** — Full-Stack Engineer with Automation & Reliability Focus. Built to showcase engineering case studies and convert recruiters into interview requests.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Content | MDX (project case studies) |
| Deployment | Vercel (primary) / Cloudflare Pages |
| Rendering | Static export (`output: 'export'`) — no backend required |

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/projects` | Projects list |
| `/projects/[slug]` | Project detail (slug from MDX filename) |
| `/engineering` | Engineering philosophy |
| `/resume` | Resume page |
| `/contact` | Contact links |

## Docs

Full specifications are in the [`docs/`](docs/) folder:

- [`docs/TECHNICAL_SPECIFICATION.md`](docs/TECHNICAL_SPECIFICATION.md) — architecture, features, acceptance criteria
- [`docs/ANALYTICS.md`](docs/ANALYTICS.md) — GA4 setup and event reference
- [`docs/NOTION_SETUP.md`](docs/NOTION_SETUP.md) — Notion page structure and task list

## Getting Started

> Implementation is in progress. Setup instructions (install, dev server, build) will be added once the project is scaffolded.
