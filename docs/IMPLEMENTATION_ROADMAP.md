# Implementation Roadmap

A practical execution plan to move this repository from draft documentation to a live, purpose-driven portfolio website.

---

## Phase 0 — Foundation Alignment (1 day)

### Goals
- Lock scope and route structure.
- Convert docs into actionable tasks.

### Deliverables
- Confirm all required routes from spec.
- Set project board (Notion or equivalent).
- Finalize 3 initial project case studies to publish first.

### Exit criteria
- No unresolved route or feature ambiguity.
- Each core page has an owner and draft content source.

---

## Phase 1 — App Scaffold + Design System (1–2 days)

### Goals
- Initialize stable static Next.js baseline.
- Build reusable UI foundation.

### Deliverables
- Next.js App Router + TypeScript + Tailwind setup.
- Static export configured (`output: 'export'`).
- Shared layout with Navbar/Footer.
- Core design tokens (spacing, color, typography, container).

### Exit criteria
- Local build and static export succeed.
- Lighthouse baseline report captured for home page.

---

## Phase 2 — Content Data Layer (1 day)

### Goals
- Make projects content-driven and easy to maintain.

### Deliverables
- `ProjectMetadata` type.
- `getProjects()` loader for MDX metadata.
- MDX utility functions and slug validation.
- At least 1 fully structured MDX case study as reference.

### Exit criteria
- Project list and detail pages can be generated from MDX data only.
- Slug/file-name rule enforced.

---

## Phase 3 — Core Pages (2–4 days)

### Goals
- Implement all required pages and key conversion paths.

### Deliverables
- Home page with hero, proof strip, featured projects, engineering preview.
- Projects list with tag filtering.
- Dynamic project detail page with strict 7-section format.
- Engineering page.
- Resume page (embedded PDF + download CTA).
- Contact page (mailto + LinkedIn + GitHub).

### Exit criteria
- All required routes render in production build.
- Internal links and CTAs function without dead ends.

---

## Phase 4 — Analytics + SEO + Performance (1–2 days)

### Goals
- Add measurement and improve discoverability/performance.

### Deliverables
- GA4 integration (`NEXT_PUBLIC_GA_MEASUREMENT_ID`).
- Optional Vercel Analytics.
- Event tracking for resume download and key CTA clicks.
- Metadata, Open Graph tags, sitemap, robots.
- Image optimization and accessibility polish.

### Exit criteria
- Analytics receives page_view events after deployment.
- Lighthouse score >= 90 on Performance/Accessibility/Best Practices/SEO for primary pages.

---

## Phase 5 — Content Hardening + Launch (1 day)

### Goals
- Ensure narrative quality and reliability before public release.

### Deliverables
- Run content quality rubric from `CONTENT_STRATEGY.md`.
- Proofread and consistency pass (voice, metrics format, tense).
- Device/responsive QA.
- Final production deploy and post-launch checklist.

### Exit criteria
- Top 3 project pages meet clarity + evidence bar.
- Contact path works in <=2 clicks from any page.
- Deployment URL is public and shareable.

---

## Suggested Weekly Cadence

If executing part-time:
- **Week 1:** Phase 0–1
- **Week 2:** Phase 2–3
- **Week 3:** Phase 4–5 + launch

---

## Risks and Mitigation

1. **Risk:** Over-investing in UI polish before content is strong.
   - **Mitigation:** Freeze visual polish until 3 case studies are complete.

2. **Risk:** Weak metrics reduce credibility.
   - **Mitigation:** Collect before/after evidence first; publish directional impact when exact values are unavailable.

3. **Risk:** Inconsistent project narratives.
   - **Mitigation:** Use one strict MDX template for all case studies.

4. **Risk:** Scope creep (blog/CMS too early).
   - **Mitigation:** Launch with required routes only; treat blog as post-launch.

---

## Definition of Launch Ready

The project is launch-ready when:
- required routes are complete,
- at least 3 high-quality case studies are live,
- analytics and SEO basics are configured,
- performance and accessibility meet targets,
- resume and contact conversion paths are frictionless.
