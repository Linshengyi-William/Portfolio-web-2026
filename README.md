# Portfolio Web 2026

A documentation-first blueprint for building a static, high-signal engineering portfolio website.

This repository currently contains the initial project draft and implementation guidance. It is intended to help you ship a portfolio site that clearly communicates:

- **Who you are** (engineering identity and values)
- **What you built** (projects with measurable impact)
- **How you think** (system design and reliability trade-offs)
- **How to contact you** (clear conversion paths)

---

## Current Repository Contents

- `docs/TECHNICAL_SPECIFICATION.md` — product + technical requirements.
- `docs/ANALYTICS.md` — GA4/Vercel analytics setup and tracking expectations.
- `docs/NOTION_SETUP.md` — structure for documentation and task tracking in Notion.
- `docs/CONTENT_STRATEGY.md` — content architecture, writing templates, and messaging guidance.
- `docs/IMPLEMENTATION_ROADMAP.md` — phased delivery plan with exit criteria.

---

## Project Goal

Build a **static-exported Next.js portfolio** that is:

- fast and SEO-friendly,
- maintainable and modular,
- easy to extend with new case studies,
- structured for both human readers and LLM parsing.

---

## Recommended Build Order

1. Read the **technical specification** end-to-end.
2. Follow the **implementation roadmap** to execute in phases.
3. Use the **content strategy** to draft copy before coding pages.
4. Set up analytics only after core routes and content are in place.
5. Mirror progress in Notion (or your task tool) using the provided templates.

---

## Definition of Success

The portfolio is successful when a recruiter or hiring manager can, within 2–3 minutes:

1. understand your profile and domain strength,
2. see evidence of measurable engineering outcomes,
3. validate technical depth from project detail pages,
4. quickly access your resume and contact channels.

---

## Status

This repository is currently in the **planning/specification stage**.

The next milestone is to scaffold the Next.js app and implement the route set defined in `docs/TECHNICAL_SPECIFICATION.md`.
