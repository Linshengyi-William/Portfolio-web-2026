# Portfolio Content Strategy

This document upgrades the technical draft into a practical messaging system so the final website can effectively share your findings, your work, and your engineering identity.

---

## 1. Positioning Statement

Use this as your content north star:

> I build reliable, automation-driven software systems and communicate engineering outcomes with measurable impact.

Every page should reinforce this statement through evidence (metrics), clarity (structure), and authenticity (real decisions, real tradeoffs).

---

## 2. Audience and Intent Mapping

### Primary audience
- Recruiters
- Hiring managers
- Senior engineers / tech leads

### User intent by page

| Page | Visitor question | Your content answer |
|------|------------------|---------------------|
| `/` | Who is this person and should I keep reading? | Clear headline + proof strip + featured outcomes |
| `/projects` | What did they build? | Scan-friendly project cards with problem/impact |
| `/projects/[slug]` | How do they think and execute? | Architecture + decisions + results |
| `/engineering` | What principles guide their work? | Reliability/system design/automation philosophy |
| `/resume` | Can I quickly evaluate fit? | Resume + concise highlights |
| `/contact` | How do I reach them now? | Minimal, direct contact options |

---

## 3. Voice and Writing Guidelines

### Tone
- Direct, clear, and specific
- Technical but readable
- Confident without exaggeration

### Rules
1. Prefer measurable claims over adjectives.
   - Better: "Cut flaky test reruns by 40%."
   - Avoid: "Greatly improved test quality."
2. Use action + result in each bullet.
3. Show trade-offs, not just final architecture.
4. Keep paragraphs short (2–4 lines).
5. Avoid buzzword stacking.

---

## 4. Page-level Content Blueprint

## Home (`/`)

### Hero formula
- **Line 1:** Role + domain
- **Line 2:** Value statement
- **CTA 1:** View Projects
- **CTA 2:** Download Resume

Example:
- "Full-Stack Engineer focused on automation and reliability."
- "I build systems that reduce operational noise and speed up delivery with measurable impact."

### Proof strip content model
Use 3–5 short metrics with outcome framing:
- `X%` improvement in throughput/latency/error rate
- `N` hours/week saved through automation
- release frequency or failure-rate improvement

### Featured project card formula
Each card should include:
- Context (what system)
- Problem (what was broken/slow/risky)
- Intervention (what you built)
- Impact (number or measurable behavior change)

---

## Projects (`/projects`)

Keep cards or rows highly scannable:
- 1-line problem
- 1-line impact
- tags aligned with the 5 canonical categories

### Ordering recommendation
1. Highest business impact
2. Strongest systems complexity
3. Most recent project

---

## Project Detail (`/projects/[slug]`)

Follow spec section order exactly. Within that, use this writing pattern:

- **TL;DR:** stack + core impact in 3–5 bullets
- **Problem:** include stakeholder impact and constraints
- **Architecture:** describe components and data flow from left to right
- **Engineering Decisions:** at least 2 rejected alternatives
- **Implementation Details:** include failure modes and test strategy
- **Results:** quantify outcomes + operational changes
- **Future Improvements:** discuss scalability and observability depth

---

## Engineering (`/engineering`)

Structure by principles and include concrete examples:
- Reliability-first: "How I prevent regressions"
- System design: "How I choose trade-offs"
- Automation strategy: "How I remove recurring manual effort"

Each section should contain at least one mini case snippet.

---

## Resume + Contact

- Resume page should summarize your top capabilities in 3–5 bullets before the PDF.
- Contact page should minimize friction: one sentence + three links.

---

## 5. Evidence Collection Checklist

Before writing or polishing content, gather:
- baseline metrics (before)
- post-change metrics (after)
- scale/context (team size, request volume, dataset size)
- constraints (time, compatibility, compliance)
- one key trade-off per project

If a numeric metric is unavailable, use directional + operational evidence:
- "Reduced manual triage from daily to weekly"
- "Lowered rollback frequency from frequent to rare"

---

## 6. Case Study Template (Reusable)

Use this template for each project MDX draft:

```md
# <Project Title>

## TL;DR
- Built <system> using <stack>
- Solved <core problem>
- Achieved <measurable impact>

## Problem
<Context + stakeholders + constraints>

## Architecture
<Diagram + component/data flow>

## Engineering Decisions
- Decision 1: <why + tradeoff>
- Alternative rejected: <why>

## Implementation Details
<Testing, CI/CD, reliability, failure handling>

## Results
- <Metric 1>
- <Metric 2>

## Future Improvements
- <Scalability idea>
- <Observability idea>
```

---

## 7. Quality Rubric (Self-review)

Score each major page from 1–5:

1. **Clarity** — Is the message obvious in <10 seconds?
2. **Evidence** — Are claims backed by metrics/examples?
3. **Depth** — Are trade-offs and constraints explained?
4. **Readability** — Is it easy to scan on mobile/desktop?
5. **Conversion** — Is there a clear next action?

Target average: **>= 4/5** before public launch.

---

## 8. Launch-ready Minimum Content

To avoid over-polishing before shipping, publish once you have:
- Home page with real headline + 3 proof metrics
- 3 strong project case studies
- Engineering page with concrete principles and examples
- Resume page and contact links
- Analytics enabled for page views and CTA tracking

Then iterate monthly with new projects/findings.
