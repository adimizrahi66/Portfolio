---
name: portfolio-case-study-builder
description: Build a designer portfolio case study page for Adi Mizrahi (Roundforest, performance-marketing/affiliate context) in his existing portfolio design system. Uses Poppins, the warm-gold accent, the 8-section visual rhythm, and dark/light alternation from cs3-seller.html. Use whenever the user says "new case study", "case study page", "portfolio page for [project]", "write a case study", "turn this project into a portfolio piece", or drops project info and wants it published-ready. Produces drop-in HTML that matches the existing tokens, plus a copy pass written in a high-performance / experiment-driven voice (KPIs, lift %, ROAS, AB tests). Do NOT use for the homepage, design system page, or generic marketing copy — this is portfolio case studies only.
---

# Portfolio Case Study Builder — Adi Mizrahi

## Purpose
Produce a single HTML case study page (`[project-slug].html`) that lives next to `index.html`, `design-system.html`, and `cs3-seller.html`. The page must read like the two reference case studies the skill was trained on (Amazon "$1B design strategy" and "Top Secret Links — Bridging the Creator Monetization Gap") while staying inside Adi's established design system (Poppins, `--accent: #C4986A`, glass nav, 48px hero radius, etc.).

Before doing anything else, read `Portfolio design.md` in the project root and `cs3-seller.html` for the live design tokens. Then read `references/html-snippets.md` shipped with this skill for the section blocks.

---

## Core principles (extracted from the references)

### 1. Narrative arc is fixed; section count is flexible
Every case study tells the same story in the same order:

```
Hero → Context (what/role/tools) → Problem (with tension) →
Audience/Research → Approach/Concept → Solution (multiple beats) →
Validation (how I tested it) → Impact (numbers) → Learnings → Sign-off
```

Pick the sections from the library below that fit the project. A small project may collapse Audience + Approach into one beat. A big one (like the Amazon piece) may have 3 separate "Solution" beats. **Never break the order. Never skip Problem, Impact, or Sign-off.**

### 2. Visual rhythm: alternate dark and light, never two of the same in a row
The Amazon piece is dark-dominant. The Top Secret Links piece is dark-dominant. **Both feel premium because every section's background is a deliberate flip of the one before it.** Default cadence:

```
Dark hero → Light meta → Light problem → Dark research panel → Light process →
Dark solution → Gold impact → Light learnings → Dark sign-off
```

If two adjacent sections would both be light, insert a `--hero-bg` (`#F5F3EF`) wash or a dark inset card to break it.

### 3. Lead every section with a label, not a title
Both references open each block with a tiny uppercase eyebrow label (e.g. `RESEARCH`, `01 · DISCOVERY`, `THE PARADOX OF CHOICE`). Use `--text-subtle` color, 10px, +0.22em tracking, 600 weight. The label is the wayfinding; the H2 is the punchline.

### 4. Numbers are characters, not footnotes
Stats earn their own section and their own typographic weight (clamp 56–96px display, weight 800, accent color or outline). The Amazon piece ends on `$1B / +80% / 2x`. Top Secret Links ends on three big numbers. **Every case study must end with 3 (sometimes 4) hero stats** — even early-stage projects. If real numbers don't exist yet, use directional ones ("4× faster discovery", "0 → first 200 sellers") rather than skipping.

### 5. Voice: Roundforest performance-marketing DNA
Adi sells himself as a designer who lives in spreadsheets and AB tests. Default voice rules:
- Open the Problem section with a business tension (revenue lost, paradox of choice, friction in funnel) — not a UX abstraction.
- Reference experiments, hypotheses, AB tests, lift %, ROAS, CTR, conversion rate wherever they fit.
- Verbs are operational: *shipped, validated, scaled, killed, doubled, drove*. Avoid *crafted, explored, journeyed*.
- Quote real user/stakeholder insight in pull-quote form (left-border accent, see references).
- Sign off with "Let's create cool things together" or "Want to talk?" + email link.

### 6. Show the work, not just the result
Both references intersperse annotated screenshots, phone mockups, and component callouts *inside* the writeup — not in a gallery at the bottom. Every solution beat needs:
- One image placeholder
- A 2–4 sentence description
- 2–3 spec/feature bullets OR tags

### 7. Density rule
Each section is ~one viewport tall on desktop. Long-running prose blocks get broken with a stat, a quote, or an image. **If a section reads as a wall of text, it's wrong.**

---

## Section library

Use the `id` to reference each block in the snippet file (`references/html-snippets.md`).

| id | Section | Default background | Required? | Notes |
|---|---|---|---|---|
| `hero-dark` | Hero (full-bleed, ~100vh) | `#0C0B0A` | Yes | Project title (outline+solid mix), category eyebrow, one-line tagline, 3–5 skill tags, scroll cue. |
| `meta-row` | Role · Timeline · Tools row | Light `#F5F3EF` | Yes | 3-col grid; replaces Top Secret Links' "What did I do?" tag cloud. |
| `problem` | Problem statement | Light `#E2DED6` | Yes | Editorial H2 with `--accent` emphasis on a key noun. 3 stat callouts at bottom set baseline pain. |
| `audience` | Audience / persona cards | Dark `#0C0B0A` | If relevant | 3 cards (icon + name + 1-line insight). Used in Top Secret Links for India creator personas. |
| `economy-grid` | Market context grid | Dark | Optional | 4 stat cards explaining the market opportunity (used for "Breaking Down Indian Creator Economy"). |
| `concept` | The concept / approach | Light | Yes | Big editorial paragraph naming the design bet. Sub-bullets with `--accent` dot markers. |
| `solution-beat` | Solution beat (REPEATABLE 1–3×) | Dark | Yes (≥1) | Alternates image-left / image-right. Each beat: small label, H3, paragraph, 2–3 feature bullets, screenshot. Number the beats (01, 02, 03). |
| `validation` | Hypothesis-driven validation | Light | Yes for AB-tested work | Show before/after, variants A/B/C, or progression of mockups. Add the hypothesis line above the visuals. |
| `impact` | Lasting impact (HERO STATS) | Gold `#C4986A` OR Dark with gold numbers | Yes | 3–4 huge stats with one-line context under each. Optional pull-quote below. |
| `learnings` | What I learned | Light, 2-col | Yes | Left: 3 "what I'd do differently". Right: 3 "what I'd repeat". |
| `next` | Next steps / what's shipping | Light | Optional | Roadmap pills (Planned / In review / Backlog). |
| `signoff` | Thanks + next CTA | Dark | Yes | "Thanks for watching." → "Let's create cool things together →" with mailto and link to next case study. |

---

## Production rules

### File and naming
- Filename: `[kebab-project-slug].html` (e.g. `topsecret-links.html`, `kueez-experience.html`).
- Sits in project root next to `cs3-seller.html`.
- Reuse the same `<head>` block from `cs3-seller.html` (Poppins import, CSS custom properties, glass nav styles).

### Tokens — never override, only reuse
| Token | Value | Where |
|---|---|---|
| `--page-bg` | `#E2DED6` | Light section default |
| `--hero-bg` | `#F5F3EF` | Light card background |
| `--text` | `#0C0B0A` | Dark section background AND body text on light |
| `--text-muted` | `#9A9590` | Captions, secondary copy |
| `--text-subtle` | `#C0BCB5` | Eyebrow labels, placeholders |
| `--accent` | `#C4986A` | Stats, emphasis, dots |

Dark section text uses `#F5F3EF` for body and `--text-subtle` for labels.

### Typography is already in the design system — use it
Display 72–128px for hero, 36–40px for section H2, 24px for H3, 16px body. Eyebrow labels are **always** 10px / 600 / +0.22em / uppercase / `--text-subtle`.

### Spacing
Section vertical padding: `clamp(96px, 12vw, 160px)`. Inner container: `max-width: 1180px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 64px)`.

### Images
- Use the existing `.feature-screen` placeholder pattern from `cs3-seller.html` until Adi delivers real assets.
- Phone mockups: 9:19.5 ratio (`aspect-ratio: 9/19.5`). Place 1–3 per solution beat.
- Annotated screenshots: 4:3 in a dark inset card with `border-radius: 24px; padding: 24px`.

### Glass nav and footer
Always replicate the glass sticky nav from `index.html`/`cs3-seller.html` at the bottom. Sign-off section sits ABOVE the nav, separated by `120px` of bottom padding so the nav doesn't crash into the CTA.

### Mobile
Single breakpoint at `max-width: 768px`. All solution beats collapse to single column. Hero stats stack vertically. Touch targets ≥44×44px. (Mirrors `Portfolio design.md`.)

---

## Workflow when invoked

1. **Confirm the project.** Ask Adi for: project name, one-line problem, his role, tools, timeline, and 3 result metrics (real or directional). If he says "use the case study brief in [file]", read that file first.
2. **Outline first, write second.** Reply with a numbered section outline (which library sections, in which order, with one-line content for each). Get a thumbs-up before generating HTML.
3. **Generate HTML in one file.** Use snippets from `references/html-snippets.md`. Insert real copy in the voice rules above.
4. **Self-check before delivering.** Run the checklist below. Fix anything failing.
5. **Save to `/Users/adimizrahi/Documents/Claude/Projects/Portfolio/[slug].html`** and present the file.
6. **Update `Portfolio design.md`** — add a row to the Site Structure table and append a session note under "Case Study Pages".

---

## Self-check before delivering

- [ ] Hero present, ~100vh, dark, has eyebrow + title + tagline + tags + scroll cue.
- [ ] Meta row (Role / Timeline / Tools) is the second section.
- [ ] Problem section names a business tension (not a UX abstraction) and has a stat or two.
- [ ] No two adjacent sections share the same background color.
- [ ] At least one Solution beat. Each beat has an image placeholder + 2–3 bullets.
- [ ] Impact section has 3–4 hero numbers in display weight, accent color or outline.
- [ ] Validation section is present if the project was AB-tested.
- [ ] Learnings section exists with two columns (avoid + repeat).
- [ ] Sign-off section + mailto + link to next case study.
- [ ] Glass nav is at the bottom.
- [ ] All eyebrow labels are 10px / +0.22em / uppercase / `--text-subtle`.
- [ ] Mobile media query (`@media (max-width: 768px)`) collapses grids to single column.
- [ ] No new design tokens introduced — only `--page-bg`, `--hero-bg`, `--text`, `--text-muted`, `--text-subtle`, `--accent` used.

---

## Anti-patterns (do not do)

- ❌ Don't open the case study with a personal story or designer manifesto. Open with the business problem.
- ❌ Don't use stock UX vocabulary ("pain points", "user-centric", "delight") without a number next to it.
- ❌ Don't put all images in a gallery at the end. Embed them inline with each solution beat.
- ❌ Don't introduce a new color, font, or radius. The design system is locked.
- ❌ Don't write past 8–10 sections. If it's longer, it's a deck, not a case study.
- ❌ Don't end on Learnings. The last visible block before the nav is always the Sign-off.

---

## References used to build this skill
- Case study screenshot 1: Amazon "$1B design strategy: Turning ambiguity into revenue at Amazon" — hero with phone mockups, "paradox of choice" problem framing, hybrid recommendation engine (3 solution beats), hypothesis-driven validation, `$1B / +80% / 2x` impact.
- Case study screenshot 2: "Top Secret Links — Bridging the Creator Monetization Gap" — colored skill tags as "What did I do?", 4-card "Why creators struggle", India creator economy stat grid, 3 audience personas, instant-gratification design principles, phone mockup walkthroughs, 3-stat results, "What I learned" reflections, "Let's create cool things together" sign-off.
- Adi's existing portfolio: `Portfolio design.md` + `cs3-seller.html` (8-section template already scaffolded — this skill formalizes the pattern across all future case studies).
