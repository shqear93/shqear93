# Portfolio Rebuild — Design Spec

Date: 2026-07-05
Repo: `shqear93/shqear93` (GitHub Pages, custom domain via `CNAME`)

## Goal

Replace the current template-based GitHub Pages site (Bootstrap/owl-carousel template + PHP mailer) with a completely new, premium, single-page portfolio for Khaled AbuShqear, optimized for landing a senior/staff Platform, SRE, or AI-Infrastructure role.

## Source material

Content is synthesized from two live resume pages (`resume.ai.shqear.online/shqear/khaled-abushqear-sre` and `.../khaled-abushqear-main`), which frame the same underlying career two ways (SRE-first vs. Platform/Software-first). Full extracted content for both (experience, projects, skills, certifications, awards, bio) is preserved in the conversation history that produced this spec; the copywriting step should draw on both, merged into one voice.

## Positioning

Single unified narrative: **Platform & AI Infrastructure Engineer**. Reliability/SRE experience appears as supporting evidence (uptime %, incident reduction, SLOs) rather than as the primary job-title framing. No persona toggle, no dual-mode UI.

## Information architecture

Single scrolling page, in this order:

1. **Hero** — full fake terminal window. Boot sequence types out: `$ whoami` → name + title, `$ cat impact.log` → 3-4 headline stats (e.g. 8M+ daily rides, 99.5% uptime, 30+ AI agents, 500K+ msgs/sec). Resolves into a persistent nav bar + two CTAs: "Email me" (`mailto:qmax93@gmail.com`) and "View Resume ↗" (links out, see Contact section below).
2. **About** — short unified bio, presented as a `$ cat about.md` block. Synthesized from both resume bios (health-tech origin → DevOps/SRE → platform engineering → AI infra), written in first person.
3. **Experience** — reverse-chronological timeline covering Careem (Senior Platform/Infra Engineer, Feb 2023–present; Technical Lead, Oct 2021–Feb 2023) and the earlier Club Feast / ZenHR / Mawdoo3 / Nabed roles (2015–2021). For each role, pick the strongest, most quantified bullets from whichever resume states them better — do not duplicate both framings, merge into one bullet set per role.
4. **Projects** — rich case-study cards (problem → architecture → my role → stack → outcome), one each for:
   - **Athar EMS** (multi-service Rails/gRPC NGO platform, live across 6 orgs)
   - **Beacon / TrekMedics** (HIPAA/SOC2 emergency dispatch, 20+ countries, 65K+ emergencies/yr)
   - **Careem Platform Engineering** (DevX Agent, Gopher, Careem CLI, Kafka/streaming platform) — synthesized from the Careem bullets as a standalone "project" rather than only living in the experience timeline, since it's portfolio-worthy work.
5. **Skills** — categorized like a terminal directory listing (Languages, Infrastructure, AI & Agents, Data & Messaging, Observability, CI/CD & Delivery, Practices). Merge both resumes' category lists into one clean set, dedup overlapping entries.
6. **Certifications & Awards** — AWS Solutions Architect Professional/Associate, AWS Cloud Practitioner, 3x Oracle certs, "Top GitHub Active User in Jordan 2022" award.
7. **Contact / footer** — mailto button, links to GitHub, LinkedIn, StackOverflow, and both resume.ai pages (labeled distinctly, e.g. "Resume (SRE focus)" / "Resume (Platform focus)"). No contact form, no backend.

## Visual system — "Terminal Precision"

- **Palette**: near-black background `#0a0e0a`, panel background `#151b15`, hairline borders `#1c2b1c`, terminal green `#3ddc84` as primary accent, amber `#e8b32c` as secondary accent (used sparingly, e.g. warnings/highlights), off-white text `#eafff0` for headings, muted slate `#8a998a` for body/secondary text.
- **Type**: monospace stack (`'JetBrains Mono', 'SF Mono', Consolas, monospace`) for chrome — nav, labels, stats, section headers styled as commands (e.g. `$ cat experience.log`). A clean sans stack (`Inter`, system-ui fallback) for body paragraphs (bio, case study prose) so long-form text stays readable.
- **Recurring motif**: traffic-light window chrome (three dots) reused atop the hero terminal and, more subtly, as a small decorative element on section headers — not literal terminal windows everywhere, just enough repetition to feel like one system.
- **Texture**: very subtle background grid/scanline effect, low opacity, present but not distracting.
- **Motion**:
  - Hero boot sequence types out once on page load (CSS/JS typewriter effect), then reveals nav + CTAs.
  - Scroll-reveal fade/slide-up on each major section as it enters viewport.
  - Hover glow/border-brighten on project cards and skill chips.
  - All motion respects `prefers-reduced-motion: reduce` (skips typing animation and scroll reveals, shows final state immediately).
- **Theme**: dark only. No light/dark toggle — the dark terminal aesthetic is the site's identity.
- **Responsiveness**: mobile-first; terminal hero, timeline, and card grids all need to degrade gracefully to single-column on small viewports.

## Tech stack & deployment

- **Astro**, static output, no client-side UI framework (no React/Vue). Any interactivity (typing effect, scroll reveal, nav active-state) is a small vanilla JS island loaded per-component.
- Repo becomes an Astro project (`src/`, `astro.config.mjs`, `package.json`, etc.) rather than raw HTML at the root.
- **GitHub Actions** workflow builds (`astro build`) on push to `main` and deploys the `dist/` output to GitHub Pages. Existing `CNAME` file is preserved and carried into the build output so the custom domain keeps working.
- Full clean-slate rebuild: `index.html`, `blog-*.html`, `mailer.php`, and the unused Bootstrap/owl-carousel/lightbox/WOW.js template assets under `assets/` are removed. Anything reusable (e.g. an actual photo, if any of the current images are real rather than template stock) gets carried over; everything else is replaced.

## README refresh

`README.md` (GitHub profile README) gets a lighter-touch update to match the new positioning and bio — refreshed "About Me" wording, updated skills lists to match the site's merged skill categories — while keeping the existing structure (typing SVG header, streak stats, GitHub analytics badges, contact badges). Not a rebuild, just a consistency pass.

## Out of scope

- No CMS/blog system (the `blog-*.html` template pages are being removed, not replaced).
- No contact form or backend service.
- No separate generated resume PDF — resume links point to the existing `resume.ai.shqear.online` pages.
- No persona-switching UI between SRE/Platform framings.
