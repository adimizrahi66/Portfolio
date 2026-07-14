# Portfolio Design — Project Summary

## Overview
Building a multi-page HTML portfolio for **Adi Mizrahi**, Product Designer at Roundforest. The site will be production-ready and deployable to any static host with a custom domain.

---

## Inspiration
- **Reference site**: [magnetto.framer.website](https://magnetto.framer.website)
- Bold, editorial aesthetic — large display typography, dark/light contrast, full-bleed imagery, minimal navigation
- Font change: **Poppins** (instead of Magnetto's pixel/bitmap display font)
- Images: to be provided by user later (placeholders in use)

---

## Site Structure
| Page | File | Link | Status |
|---|---|---|---|
| Homepage | `index.html` | [Open →](index.html) | In progress |
| Design System | `design-system.html` | [Open →](design-system.html) | Done ✓ |
| Case Study — CS3 Seller | `cs3-seller.html` | [Open →](cs3-seller.html) | Scaffolded ✓ |
| Additional case studies | TBD | — | Pending |

---

## Design System (`design-system.html`)

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--page-bg` | `#E2DED6` | Outer page background (warm gray) |
| `--hero-bg` | `#F5F3EF` | Hero card background (warm white) |
| `--text` | `#0C0B0A` | Primary text |
| `--text-muted` | `#9A9590` | Secondary text, captions |
| `--text-subtle` | `#C0BCB5` | Placeholders, tags |
| `--accent` | `#C4986A` | Warm gold — labels, highlights |
| Success | `#5CBF8A` | Availability dot |

### Typography — Poppins
| Level | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| Display | 72–128px | 800 | −0.04em | Hero title |
| H1 | 52px | 700 | −0.025em | Page titles |
| H2 | 36–40px | 700 | −0.02em | Section titles |
| H3 | 24px | 600 | −0.01em | Card titles |
| Body | 18px | 400 | 0 | Main content |
| Label | 10px | 600 | +0.22em uppercase | Category tags |

### Spacing (4pt grid)
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`

### Border Radius
| Name | Value | Use |
|---|---|---|
| Sharp | 0px | Raw edges |
| Small | 4px | Tags, buttons |
| Medium | 8px | Cards (design system) |
| Hero | 48px | Main hero card |
| Work cards | 36px | Case study cards |
| Pill | 999px | Nav bar, CTA buttons |

### Motion
| Token | Value | Use |
|---|---|---|
| Fast | 0.12s ease | Hover color changes |
| Base | 0.18s ease | Button/link hover |
| Medium | 0.28s ease | Panel open |
| Slow | 0.45s ease | Page transitions |
| Spring | cubic-bezier(0.34, 1.56, 0.64, 1) | Card scale on hover |

---

## Homepage (`index.html`)

### Hero Section
- **Layout**: Light warm-gray outer frame (`#E2DED6`) with a white card inside, 48px border radius
- **Title**: "ADI" (solid) / "MIZRAHI" (outline stroke) — Poppins 800, uppercase, ~9vw
- **Description**: short paragraph top-right; role tags + scroll hint bottom corners
- **Availability**: pulsing green dot centered at bottom — "Available for new projects"
- **No images** — replaced by animated pastel color blobs
- **Blob animation**: 5 blobs (pink, lavender, mint, peach, sky) track the mouse with individual spring lag; autonomous drift after 3s of idle

### Bottom Glass Navigation (sticky)
- Fixed at `bottom: 20px`, centered horizontally
- Dark charcoal glass: `rgba(16, 14, 11, 0.72)` + `backdrop-filter: blur(24px)`
- Pill shape (999px radius)
- Content: `[AM avatar] Home · Work · About · Journal [Contact +]`
- Avatar: gold circle with initials "AM"
- CTA button: off-white pill with dark text

### Work / Case Studies Section
- **Header**: "02 · Selected Work" label + "Case Studies" H2 (left) + "View All Projects →" link (right)
- **Grid**: 2 columns, 16px gap
- **Card height**: 560px — sized so 2 full cards + tops of 2 more are visible on scroll
- **Card style**: 36px border radius, full-bleed background, subtle vignette overlay
- **Glass title panel**: centered in card — `backdrop-filter: blur(18px)`, dark semi-transparent background, category label (small uppercase) + project title (bold uppercase white)
- **Hover**: background zooms in (scale 1.04), arrow icon fades in bottom-right

### Current Case Study Cards
| # | Title | Category | Placeholder Color |
|---|---|---|---|
| 1 | CS3 Seller Platform | Product Design · SaaS | Warm red-brown |
| 2 | Kueez Experience | UX Design · eCommerce | Deep navy |
| 3 | Affiliate Storefront | Strategy · Growth | Dark forest green |
| 4 | RF Design Language | Design Systems | Warm earth |

---

## Pending Fixes (noted, deferred)
- Hero section tweaks (mentioned by user, details TBD)

## Responsive Design (Mobile)
The portfolio must be fully responsive. All pages should work well on mobile screens (≥320px) and tablets.

### Breakpoint
- Single breakpoint at `max-width: 768px`

### Mobile Adaptations
| Element | Desktop | Mobile |
|---|---|---|
| Outer padding | 20px | 12px |
| Hero border radius | 48px | 28px |
| Hero title | clamp(72px, 9vw, 128px) | clamp(56px, 16vw, 96px) |
| Hero layout | 2-column grid | Single column |
| Hero description | Right-aligned | Left-aligned, full width |
| Hero bottom bar | Row (space-between) | Column, left-aligned |
| Work card grid | 2 columns | 1 column |
| Work card height | 560px | 400px |
| Work card radius | 36px | 24px |
| Glass nav | Full pill with all links | Condensed (shorter link labels) |

### Principles
- Touch targets minimum 44×44px
- No horizontal scroll at any viewport width
- Font sizes use `clamp()` where possible for fluid scaling
- All grid layouts collapse to single column on mobile
- The glass sticky nav remains visible and usable on mobile

---

## Next Steps
- [ ] Add hero section fixes
- [ ] Build remaining homepage sections (About, Stats, Contact)
- [x] Build CS3 Seller case study page
- [ ] Add real project images when provided
- [ ] Build additional case study pages
- [ ] Mobile QA pass across all pages
- [ ] Final review + deploy

---

## Case Study Page — Structure & Design (Session: 2026-06-22)

### What was decided
Defined the standard structure for all case study pages in the portfolio. Built and scaffolded `cs3-seller.html` as the template.

### 8-Section Case Study Structure
| # | Section | Color | Notes |
|---|---|---|---|
| 01 | Hero | Dark (`#0C0B0A`) | Full-bleed, ~100vh. Project title (display weight, outline variant), category label, tagline, pill tags, scroll hint. |
| 02 | Meta Row | Light (3-col grid) | Role · Timeline · Platform — quick-scan context cards. |
| 03 | Problem Statement | Light | Large editorial headline with accent color emphasis. 3 stat callouts at bottom. Sets narrative tension. |
| 04 | Research & Discovery | Split (Light + Dark) | Left: method list with icons. Right: dark card with 3 user insight quotes, accent left-border. |
| 05 | Design Process | Light | 4-step horizontal timeline (Discover → Define → Design → Deliver) + 3 artifact placeholder cards. |
| 06 | The Solution | Dark (`#0C0B0A`) | 3 features, alternating screen-left / screen-right layout. Each: screen placeholder + feature number, title, description, tags. |
| 07 | Impact & Results | Accent (`#C4986A`) | 4-stat grid + one pull-quote. Closes the narrative loop from the problem. |
| 08 | Learnings + Next Steps | Light (2-col) | Left: 3 "what I'd do differently" bullets. Right: 4 next-step items with Planned / Backlog status pills. |

### Visual Rhythm (section backgrounds)
`Dark → Light × 3 → Split → Light → Dark → Gold → Light`
Maintains the high-contrast alternation from the Magnetto reference.

### CS3 Seller Placeholder Content
All stats, quotes, and copy in `cs3-seller.html` are placeholders. To complete:
- Replace 3 feature `<div class="feature-screen">` blocks with actual Figma exports / screenshots
- Update problem stats (Section 03) with real baseline numbers
- Update impact grid (Section 07) with real post-launch metrics
- Replace insight quotes (Section 04) with real research quotes
- Set "Next project →" href once Kueez case study page is built

### Shared Components (replicated from `index.html`)
- Glass sticky nav (same markup and styles)
- Design tokens (all CSS custom properties identical)
- Poppins font import

---

## Seller Platform Case Study (Session: 2026-06-28)

### What was decided
Built `seller-platform.html` as the first real case study with actual content. Used the existing design tokens and visual rhythm but adapted the section structure to fit Adi's content from `Seller platform case study - Portfolio 2026.md`. Wired the homepage Card 1 to point at the new page (replaced the CS3 placeholder).

### Page Structure (content-driven, not the 8-section template)
| # | Section | Background | Notes |
|---|---|---|---|
| 01 | Hero — header + image combined | Dark (`#0C0B0A`) | 2-column inside one rounded container: text + tags left, SVG image placeholder right. Title is "Seller Platform / Amazon Creators Connection" (outline variant). |
| 02 | Meta Row | Light (3-col) | My role · Team · Duration. |
| 03 | Overview | Light (2-col) | Text on left, SVG image placeholder on right (4:3 ratio). |
| 04 | Challenge / Strategy / Results | Light (3-col cards) | Tightened to one sentence each. |
| 05 | Defining the Problem | Light | Headline + 3 bullet points (No Clear Incentive · High Cognitive Load · Risk for High-Volume Sellers). |
| 06 | Strategy & Exploration — User Flow Mapping | Light | Intro + 3 option cards (Forced Onboarding · Persistent Banners · Contextual Discovery). Chosen card uses gold stroke + inline "Chosen" tag. Decision callout + Figma link. |
| 07 | Design Solutions — Implementation process | Warm Dark (`#2D2723`) | 2 abilities (Creator's connection · Extra commission). Streamlining the Connection Flow + Edge Cases & Error Handling subsections. Includes self-note + prototype link. |
| 08 | Results | Accent gold (`#C4986A`) | "What the Data Showed" 3-stat grid (60% sellers · [X]% commission · [X]% engagement). |
| 09 | What's Next? | Light | Survey insight about "before and after" ROI visualization + SVG placeholder for survey Q&A. |

### Design Adjustments Made (during this session)
- **Hero**: combined the image into the hero block (was a separate card below). 2-column layout inside the dark container.
- **Overview**: added SVG image slot on the right.
- **Challenge / Strategy / Results**: shortened each to a single tight sentence.
- **Typography contrast**: body text bumped from 14–16px → 16–18px. `--text-muted` darkened from `#9A9590` → `#5A544C` for stronger legibility on light backgrounds. Added `--text-soft` (`#7A736A`) for secondary copy. Section number labels promoted to gold + 11px / 700.
- **Accent**: deepened from `#C4986A` → `#B8865A` for stronger contrast.
- **User Flow Mapping**: chosen card no longer uses dark fill — same warm light background as the other two, gold 2px stroke instead. "Chosen" tag inline next to "Option 3" so text alignment matches across all three cards.
- **Design Solutions section**: background changed from `#0C0B0A` → `#E4DED5` (soft warm beige) — sits between `--page-bg` and `--surface`, giving a subtle warm differentiation rather than a stark dark block. All internal text flipped to dark-on-light.

### New Token Added
| Token | Hex | Use |
|---|---|---|
| `--warm-dark` | `#E4DED5` | Soft warm beige for case-study sections (replaces near-black `--dark` in section.dark) |
| `--text-soft` | `#7A736A` | Secondary copy / meta-subs |

### SVG Upload Pattern (reusable across future case studies)
All image/video slots use the same swap-ready pattern. Each placeholder has an HTML comment directly above it:

```html
<!-- SWAP: replace inner div with  <img src="your-file.svg" alt="...">  -->
<div class="media-slot">
  <div class="media-empty"> ... empty-state illustration ... </div>
</div>
```

To populate: drop the SVG into the project folder, replace the `media-empty` div with `<img src="...">`. The slot keeps aspect ratio and uses `object-fit: contain/cover` so SVGs stay crisp at any size.

### Image Slots in `seller-platform.html`
1. Hero image (inside hero, right column)
2. Overview image (inside overview, right column)
3. Image 1 — Strategy & Exploration (after 3 options)
4. Image 2 — after "The Decision"
5. Connection flow video/image — after success-banner quote
6. Image 3 — Bulk Input Support
7. Image 4 — Partial Sync & Error States
8. Video illustration — after prototype link (tooltip behavior)
9. Survey Q&A — What's Next

### Homepage Update
- Card 1 on `index.html` now links to `seller-platform.html` (was `cs3-seller.html`).
- Card title updated from "CS3 Seller Platform" → "Seller Platform".
- `cs3-seller.html` scaffold remains in the folder, unlinked from homepage.

### Outstanding for Seller Platform Page
- Real SVG uploads for the 12 image/video slots
- Fill in `[X]%` results numbers (commission lift, engagement increase)
- Confirm the Duration meta value
- Decide final fate of `cs3-seller.html` (delete, repurpose, or build out)

---

## Seller Platform Case Study — Refinement Pass (Session: 2026-06-28, cont.)

### Color & background pass
- **Color palette explored**: Tried a navy + hot-pink alternative palette (preview only), then a minimal accent variant (pink dots + navy stroke layered on the original warm palette). Both rejected. **Original warm beige + gold palette stays as the house style.**
- **`--warm-dark` final value**: `#F5F3F0` — practically identical to `--surface`, so the Design Solutions section now blends with the other light sections. Stroke removed.
- **Quote-callout inside Design Solutions** ("One input, full integration..." banner): background `#FFFFFF` (pure white) to lift it off the surrounding light surface.

### Section renames
- **05 — Label "05 · Results" / Title "The Impact"** (label keeps the original section name, title is the editorial framing)
- **06 — Label "06 · Next steps" / Title "What's Next?"** (mirror pattern: label is the editorial name, title is the question framing)
- This intentional label/title divergence is the new convention — labels carry the section's structural name, H2 carries the narrative voice.

### Overview section — final structure
- Section label `01 · Overview`, H2 `Overview`, and both body paragraphs all live **inside the left text column** of `.overview-grid`.
- Grid uses `align-items: center`, so the whole text block is vertically centered against the image placeholder on the right.
- Internal gap: `14px` between every element (label → title → body → body).

### Visual / iconography upgrades
- **Defining the Problem bullets**: replaced 8px gold dots with 44×44 rounded icon tiles in soft gold (custom outline SVGs — question/uncertainty mark, brain/cognitive load, stacked layers for high-volume risk).
- **Implementation process abilities**: same icon tile treatment — chain/link icon for Creator's connection, percent icon for Extra commission feature.
- **User Flow Mapping options**: every option card now has its own 16:10 image slot at the top (3 new placeholders).
- **Streamlining the Connection Flow paragraph**: dedicated 16:9 image slot inserted directly under the paragraph showing the "single ID → many campaigns" fan-out.
- **Removed**: the Figma frame link from User Flow Mapping (kept the Netlify prototype link in Edge Cases).

### Final Image Slot Count: 12
1. Hero image (inside hero, right column)
2. Overview image (inside overview, right column)
3–5. Option image (one per User Flow Mapping option — Forced Onboarding, Persistent Banners, Contextual Discovery)
6. Image 2 — after "The Decision"
7. Connection flow image — under the "single Campaign ID" paragraph (new)
8. Connection flow video/image — after the white success-banner quote
9. Image 3 — Bulk Input Support
10. Image 4 — Partial Sync & Error States
11. Video illustration — after prototype link (tooltip behavior)
12. Survey Q&A — Next steps

---

## House Style for All Future Case Studies

**Every additional case study should use `seller-platform.html` as the structural and visual template.** That means:

### Structure (in order)
1. **Hero** — dark `#0C0B0A` bg, 2-column inside one rounded container (text + tags left, image right)
2. **Meta Row** — single unified block (`border-radius: var(--radius-card)`, `background: var(--surface)`), 3 columns separated by 1px internal dividers. Fields: My role · Team · Duration. Padding 28px 32px per column.
3. **Overview** — 2-column, text + image right, label/title/body all inside the left column, `align-items: center`
4. **Challenge / Strategy / Results** — 3-col intro trio with arrow-prefixed h3s, one-sentence body each
5. **Defining the Problem** — headline + 3 bullets with 44×44 gold icon tiles
6. **Strategy & Exploration / User Flow Mapping** — intro + 3 option cards (each with its own 16:10 image slot at top), chosen card uses 2px gold stroke + inline "Chosen" badge, decision callout block
7. **Design Solutions / Implementation process** — `--warm-dark` (`#F5F3F0`) bg, 2 ability bullets with icon tiles, subsections with paragraph + media slot + impact bullets + quote-callout (white bg) + edge cases + prototype link
8. **The Impact** — accent gold `#B8865A` bg, label `0X · Results`, H2 `The Impact`, 3-stat results grid
9. **Next steps** — light bg, label `0X · Next steps`, H2 framed as a question, content + media slot

### Design rules
- Poppins, all weights from 400–800
- Tokens identical to `seller-platform.html` — never redefine `--accent`, `--page-bg`, `--text-muted`, etc.
- Body text 16–18px, line-height ~1.7
- Section number labels: gold `--accent`, 11px / 700 / 0.22em tracking
- All image/video slots use the same `.media-slot` swap-ready pattern with the `<!-- SWAP: ... -->` HTML comment above
- 2px gold stroke is the "this is the chosen/featured one" pattern (currently only used on chosen option card)
- Quote callouts on light surface get `--page-bg` background; on `--warm-dark` surface get pure white
- Label/title divergence is allowed (label = structural name, H2 = editorial voice)

### What to never do
- Don't introduce new accent colors (no pink, no navy, no electric anything) — the warm beige + gold is the brand
- Don't put image slots in their own separate section card — embed them inside the section they illustrate
- Don't use the old `cs3-seller.html` 8-section template — that's a placeholder scaffold, not the production pattern

---

## Seller Platform — Refinement Pass (Session: 2026-06-29)

### Color update: `seller-platform.html` now uses a pink accent
- `--accent` changed from `#B8865A` → `#FF628D` (hot pink) for this page only
- **Exception**: the nav avatar (`.nav-avatar`) keeps `#B8865A` (gold) via a hardcoded value — the avatar gold is a brand constant across all pages
- The Results section background is `#FFADC4` (light pink), set via inline `style` on the section element — not via `--accent`

### Meta Row redesign — now the default for all future case studies
The three separate cards (My Role · Team · Duration) were merged into one unified block:
- Single `background: var(--surface)` on the `.meta-row` container (not on individual cards)
- `border-radius: var(--radius-card)` — 36px, matching all other section corners
- `overflow: hidden` on the container clips the card edges cleanly
- Internal dividers via `.meta-card + .meta-card::before` pseudo-element — 1px line, `rgba(12,11,10,0.1)`, spanning 60% of height (top 20% → bottom 20%) on desktop
- Mobile: dividers flip to horizontal (full-width 1px line between stacked rows)
- Padding per card: `28px 32px`

**This unified block is now the standard Meta Row for all future case studies.**

### Copy softening pass
All specific metrics, mechanisms, and operational details were softened for NDA safety:
- Campaign ID / single-input mechanism → "minimal input / automatic account-level synchronization"
- "60% of sellers" → "a majority of sellers"
- "5% opted into higher commission tiers" → "a measurable portion adopted higher-value configuration options"
- "couldn't run formal user testing" → "due to time constraints, launched with an iterative approach"
- "higher commission tiers" → "higher-value configuration options" / "informed configuration decisions"
- Prototype link removed → replaced with "Prototype available upon request"
- Self-note (`*note to myself…*`) removed

### SVG images added
- Slot 1 (Hero): `SP - hero-36e54d94.svg` swapped into `.hero-visual`

---

## Case Study 2 — Data-Driven Funnel UX (Session: 2026-06-30)

### File
`cs2-funnel.html` — built from `Case Study_ Data-Driven UX Funnel Optimization.md`. Uses `cs3-seller.html` as structural base. `cs3-seller.html` was deleted after cs2 was complete.

### Homepage connection
Card 3 on `index.html` (formerly "Affiliate Storefront") now links to `cs2-funnel.html`. Title: "Data-Driven Funnel UX", category: "UX Design · A/B Testing".

### Theme color: `#001B66` (dark navy)
- `--accent: #001B66` — used on light backgrounds
- `--accent-on-dark: #4F7FE3` — used on dark-bg elements (hero label, insight attrs, feature nums, badges) for readability
- Impact section background: `#1A52CC` (3 tones brighter than `#001B66`) with all-white text

### Design system rules applied (now universal for all case studies)
1. **Meta block** — Role/Timeline/Team in one unified block, `border-radius: var(--radius-card)`, flex row with 1px vertical dividers
2. **Quote/insight cards** — no side stroke, background opacity `0.1` (up from `0.05`)
3. **Impact section** — always the theme color, 3 tones brighter, with light text

### Section structure (cs2 specifics)
- 03 Problem: body text color `#5A5651`, stat-label 14px / `#5A5651`
- 04 Strategy: right column (Key Signals card) removed — full-width single panel; title "Experimentation planning"
- 05 Process: step-num "Ongoing" labels removed
- 06 The Work: funnel flow diagram removed; Phase 1 chips replaced with image placeholder + white title + Lorem paragraph; Phase 2 & 3 keep feature tags
- 07 Impact: impact quote removed; 3-stat grid only
- 08 Learnings only (08b Next Experiments removed); full-width single column

### Removed / not carried forward from cs3 template
- Hero year badge
- Long em dashes (replaced with short hyphens throughout)
- Key Signals dark card
- Funnel flow diagram
- Feature tags on Phase 1
- Impact pull-quote
- Next Steps section (08b)

---

## Session — Seller Platform case study (cs3) media + edits
- Inserted media into placeholders from `images and videos/` folder, matching by name
- Filled: Overview (video), Options 1-3, Image 2, Connection flow (video), Image 3, Image 4
- Removed placeholders: Image 1 (Flow exploration), Connection flow video/images, Video illustration (tooltip)
- Filled slots auto-fit media's natural ratio via `:has()` overrides (aspect-ratio auto, object-fit contain)
- Hero image + Unsaved-changes modal linked from folder
- Meta: Duration set to 2 months
- Section labels: leading numbers removed (Overview, Defining the Problem, etc.)
- "The Decision" + "Minimal input..." banners: side stroke → full 2px pink border
- Design Solutions bullet icons: color → pink; background later set to `#EEE4DA`
- Image 3 slot background → `#2F2F2F`
- Removed "Prototype available upon request"
- Results: added 5% (commission) and 20% (engagement)
- Added "Catching Unsaved Changes" subsection + image placement
- Replaced em dashes with en dashes in visible text (kept em dashes in image src filenames)
- Options 1-3 images use the SVG versions from folder

## Session — Seller Platform survey media + shadows
- Inserted `Survey – questions & answers.svg` into Next Steps slot; caption below: "A sneak peak questions from the survey"
- Overview video: added gentle 1px stroke
- Survey frame: `tall` → `wide` (21:9) to fit the wide SVG (3480×1470)
- Added soft drop shadow behind all filled media (hero, overview, options, media-slots)
- Survey slot background → `#272727`

## Session — cs2 Funnel case study edits (cs2-funnel.html)
- Hero title: "Funnel UX" → "UX Funnel"
- Strategy & Approach: inserted `Image placement-Strategy & Approach.svg`; box fit to SVG ratio (2101/787), scaled up via grid cols 0.75fr/1.25fr; click-to-expand lightbox added
- Design Process: removed process-artifacts cards; step icons → pink line SVGs (help-circle, brain, layers, refresh) in rounded-square cards; step-desc grey → `#5A5651`
- "The Work" → "Hands-On Design process"
- feature-desc body → 16px; feature-num (phase titles) → 12px
- Removed feature chips (Phase 2 + 3); "Did Not Scale" callout moved below paragraph
- Section labels color → `#001C6A`; "Hands-On Design process" label → `#0053D4`; "08 · Key Takeaways" → "Key Takeaways" at 13px
- Phase 1: blue chip → "1st Iteration"; inserted `1st iteration.svg`; added "Tweaking for Better Engagement" paragraph; inserted `2nd iteration.svg` (chip "2nd Iteration"); both scaled to 88% width, SVG ratio 1754/1198, click-to-expand

## Session — cs2 Phase 2 interactive iPhone mockups (cs2-funnel.html)
- Phase 2 placeholder → live two-phone mockup using `Phase 02 · Bottom-Funnel Conversion Push.svg` as base (labels/arrow kept intact)
- Both phone screens made scrollable via absolute overlays clipped to glass; content starts under status bar (top 24.5%, height 59.5%; left phone left 16.76%, right 56.70%, width 26.75%)
- Left phone scrolls `List page.svg`; right phone scrolls `Product page.svg`
- Added centered "↕ Scroll inside the screens" tag; mockup frame given 20px corner radius (matches other placements)
- Right column: added "Balancing Engagement & Conversions" block below paragraph (3 dash bullets: Protecting Core Revenue / Familiarity Above the Fold / A Lean Feedback Loop)
- Right phone prototype: tap "View Other Products" (product y≈2864) → swaps page bottom (crop at y2419) for `question flow after clicking View Other Products.svg`; tap any of 3 answers → `question flow after picking answer.svg`; hotspot overlays + `ppShow()` JS, auto-scroll to reveal question

## CS2 — session update (2026-07-01)
- Phase 3: replaced placeholder with `phase 3.svg` (embedded inline so it renders reliably), scaled up; added "Designing for Our Audience" block (55+ audience insight; 3 dash bullets: Boosting Accessibility / Cleaner Visuals / Driving Curiosity); red chip now "✕ Test failed, did not scale"
- Phase 2 mockup: scaled up via `transform: scale(1.04); transform-origin:left center` (left-anchored so it grows rightward only, no text overlap); shortened Phase 2 copy to clear the phones; "scroll inside the screens" tag color → white (#fff)
- Key Takeaways: text 16px, grey darkened to #5A5651; section moved above "Impact & Results"
- Design Process icons: rounded-square card style — icon `#0051D0` on `#EEE4DA` background
- "Hands-On Design process" label recolored to blue `var(--accent-on-dark)` (matches Phase 01 label)
- "AM" nav logo standardized across cs2-funnel, seller-platform, index: solid tan `#B8865A` circle with white text

## Homepage (index.html) — hero + work section refinements
- Hero: removed "Tel Aviv"; "Product Designer" eyebrow bigger, grey `#6E6A64`
- Hero desc moved below "ADI MIZRAHI" title, left-aligned, grey `#6E6A64`
- "ADI MIZRAHI" title color set to `#1E1E1E` (fill + outline stroke)
- Chips: grey text `#6E6A64`, border `#B0ABA2`, scaled up (11px, 8px 16px padding), gap 12px; added "Data Driven" + "Performance Specialist"
- Removed "Available for new projects" badge
- Blob hover animation influence increased (more visible movement); blob colors kept soft
- Year badge → "© 2026", size 12px
- Work section: removed "02 ·" from label; label matched to hero eyebrow (14px/700/`#6E6A64`)
- Reduced spacing between hero and Case Studies (wrapper + hero min-height padding trimmed)
- Nav "Work" → `#work` anchor; custom JS smooth scroll (900ms ease-in-out cubic) for anchor links

## Homepage update (2026-07-01)
- Page background set to #EDEAE6
- Hero block given soft spread shadow
- Case study cards rebuilt: #2E2E2E bg, centered highlight blur circle, contained homepage SVGs (from "images and videos" folder), glass panel with title, labels, and company
- Cards: Seller Platform / Data Driven UX Funnel / Copycat Internal Platform (Roundforest); Unit.e.p App (Freelance · ISR); Questionnaire Engagement Strategy (Bottgenj.ai)
- Unit.e.p and Questionnaire set to coming-soon: "Coming Soon" chip + white opacity disabled overlay
- Removed "View All Projects" button

## Sticky nav — contact menu (2026-07-01)
- Nav "Journal" → "Resume"
- "Contact +" now opens a dropdown menu: LinkedIn (links to linkedin.com/in/adi-mizrahi, new tab), Email (copies adimizrahi66@gmail.com), Phone (copies +972 544304626)
- Email/Phone use clipboard copy on click with "— copied" hint feedback; hint shows the address/number
- Menu closes on outside click, Escape, and on scroll
- Applied identically to case studies (seller-platform.html, cs2-funnel.html); their nav uses `glass-nav`/`nav-cta` classes, menu styling adapted to match
- RULE: any future sticky-banner change must be applied to ALL portfolio pages (index + all case studies + about page when it exists)
- Note: no standalone About page file exists yet; "About" is a nav link with no target
- Unified nav typography: homepage nav restyled to match case studies (links 13px/500 normal-case no letter-spacing; CTA 13px/600; contact-item 13px/500; hint 11px/400) — removed prior uppercase/letter-spaced small-caps look

## Homepage cards — polish pass (2026-07-01)
- Card images shrunk (padding 96px) on all cards except Questionnaire (`card-img--lg`, 40px)
- Highlight blur circle behind images made more dominant (520px, rgba 0.32, blur 44px)
- Glass panel darkened for all cards: base `rgba(20,20,20,0.55)`, active hover `0.65`, disabled `0.55`
- Disabled cards (`is-soon`): glass color kept static + hover removed (glass + image scale)
- Added `hover.svg` as fade-in card background on hover (`::before`, opacity 0→1, 0.45s), existing hover interactions untouched
- Company fixes: Unit.e.p → "Freelance · IDF"; Questionnaire → "Botson.ai"
- Questionnaire chips → Web · Mobile · B2C

## Session — case study + homepage tweaks (2026-07-01)
- seller-platform: removed hero image; removed pink logo-dot next to "Roundforest"
- Project-nav "Previous" cards wired to real pages + matching titles: seller-platform → cs2-funnel (Data-Driven UX Funnel · UX Design · A/B Testing · eCommerce); cs2-funnel → seller-platform (Seller Platform · Product Design · SaaS · B2B)
- cs2-funnel hero: right-corner label "Case Study" → "Roundforest"
- "Roundforest" label sized to 14px on both pages (seller `.hero-brand`, cs2 `.hero-meta-top .label`) to match
- index: disabled hover bg (`::before`) on `is-soon` cards (Unit.e.p, Questionnaire)
- index: added soft top-edge shadow to hero block
- index: case-study cards restructured to stacked rows — text/title left, image (`.card-media`) right at 1fr/2fr (~1:2), hover glow + image scale retained
- index: work-section left/right inset aligned to hero text edge (`calc(var(--pad) + 60px)`) so all page content lines up on one guide
- index card text: title weight → 600 (semi-bold); company moved above title (below chips); `.card-description` added below title (`:empty` hidden); "Selected Work"/"Case Studies" header removed but 95px spacing preserved
- index: case descriptions added for Seller Platform, Data Driven UX Funnel, Copycat Internal Platform

## Session — CopyCat case study build (2026-07-05)
- Created `copycat.html` from `seller-platform.html` template (structure/CSS unchanged, content swapped from "Copycat case study.md")
- Content: hero (CopyCat · Internal Platform), meta (Senior Product Designer · 1 PM/1 Eng · 1 month), overview, challenge/strategy/results, problem (6+ tools), user flow mapping, design solutions (list migration, article↔creatives flow, article creation, multi-step creative flow), results (75% / 6→1 / –5 clicks), full-prototype section
- Prototype previews via `<iframe>`: creative flow after "The Multi-Step Creative Flow" (`CopyCat/copycat-crm.html?flow=creative`), full prototype at page end (`CopyCat/copycat-crm.html`)
- Added gated bootstrap to `copycat-crm.html`: `?flow=creative` auto-calls `openCreative()` (no effect on normal opens)
- New `.proto-embed` styles (browser-chrome bar, live-pulse dot, open-in-new-tab link)
- index: CopyCat card linked (`href="#"` → `copycat.html`); project-nav prev → seller-platform
- Accent color changed pink → `#5967FB` (`--accent` + Results section bg `#FFADC4` → `#5967FB`)
- User Flow Mapping: added `User journey.svg` in media-slot below the tools-chain quote-callout
- Multi-Step Creative Flow: added Before/After toggle above preview (default After = prototype; Before = `Copycat before.svg`); scaled down — wrap max-width 860px, `.proto-frame.flow` height 760→640px

## Session — CopyCat refinements + hero heights (2026-07-05)
- copycat overview & User-journey images: removed background/border (+ overview also box-shadow) so only section bg shows behind them
- Product Context: wrapped in `.context-box` highlighted box — full 2px accent outline (was left-side stroke)
- "Migrating the content tasks list": +16px top spacing
- Added SVGs above titles: `task row undone.svg` → "Connecting Data to Actions"; `article generator flow.svg` → "Streamlining Article Creation"; `task list after article generated.svg` → "The Multi-Step Creative Flow"; `Done tasks.svg` below "Balancing Automation with User Control"
- Before/After toggle: fixed unselected-button contrast (dark text/border for light `.section.dark` bg)
- Multi-Step Creative Flow before/after: scaled to full section width, prototype iframe + before image ratio set to `copycat-list migration.svg` (1508:734)
- Impact section: "–5 clicks" → "–36 clicks" + new label ("automated PID/metadata transfers…"); bg `#5967FB` → `#929BFF`
- Full-prototype heading em-dash → short hyphen
- Hero height parity: seller-platform (`.hero-title .outline`) + cs2-funnel (`.hero-title span`) got `white-space:nowrap` so second title row stays one line (no font change) → same height as copycat

## Mobile optimization pass (mobile-only, desktop untouched)
- All edits scoped inside `@media (max-width:768px)` + new `@media (max-width:400px)` per file; desktop CSS unchanged
- Touch targets: nav links, Contact CTA, contact-menu items, before/after toggle → `min-height:44px`
- Floating glass nav: `max-width:calc(100vw - 20px)` so it never overflows narrow screens
- Body copy enlarged + `overflow-x:hidden`; smooth scroll; wider chip gaps to avoid mis-taps
- Metrics kept 3-up side-by-side (compact numbers) so they stay comparable, not stacked
- cs2 funnel diagram → vertical flow, arrows rotated to point down
- copycat before/after toggle → full-width
- index cards: image moved above text (`.card-media order:-1`); `.card-description` 16px→14px
- index cards: 1px black border + radius + padding; `.card-title br { display:none }` so titles stay one line

## Mobile home-page pass (index.html, ≤768px only)
- `.card-title` → Figma "Fill container": `flex:1 1 auto; width:100%; align-self:stretch`
- `.card-title` overflow fix (5th "Coming Soon" title): `min-width:0; overflow-wrap/word-break: break-word`
- CS card stroke color changed `#000` → `#9B9590`
- hero-scroll → bottom of hero = 60px (`.hero`/`.page-wrapper` min-height auto so hero sizes to content; hero-bottom padding-bottom 60px)
- hero chips hidden on mobile (`.hero-tags { display:none }`)
- hero→first CS card spacing = 28px (`.work-header` height 16px + 12px page padding)

## Hero + nav adjustments pass (index.html + 3 case studies)
- Page side spacing set to 24px (`--pad: 24px`)
- Hero chips moved into `.hero-left` under the description; desktop chips forced one line (`flex-wrap:nowrap`); mobile chips wrap + smaller (`9.5px`, tighter padding)
- Hero grid → `auto auto 1fr`; chips-to-scroll gap = 60px (`.hero-bottom` padding-top 60px)
- Scroll cue text "Scroll" → "Scroll to view my work"; color matched to chip text `#6E6A64` (text + arrow border)
- Case-study card images realigned to hero gridline (`.work-card` → `1fr 1fr`)
- Cards fade/slide in on scroll (IntersectionObserver + `.js .work-card` reveal; desktop + mobile)
- `.card-title` line-height 1.0 → 1.18 for space between stacked words
- Sticky nav → white glass (dark text for contrast), kept blur; top-center on desktop, bottom-center on mobile (padding aligned to page spacing)
- Nav trimmed: removed "AM" avatar + "View my work" hero CTA; Contact + dropdown removed then re-added
- LinkedIn button → https://www.linkedin.com/in/adi-mizrahi/ (all pages)
- index card titles: added space before each `<br>` so words don't join on mobile (where `br` is hidden)

## Case-study refinements pass (seller-platform + all CS pages)
- seller-platform hero title = Figma "Fill container": `flex:1 1 auto; align-self:stretch; width:100%`; inner flex column centered
- Mobile hero overflow fix: `.hero-title .outline { white-space:normal }` + title floor lowered to `clamp(32px,9vw,72px)`
- All 3 case-study pages: reduced every font-size by 2px inside mobile breakpoints only (desktop + index untouched)
- Overview section: replaced video with `Overview - catalog managment.svg`; path corrected after file moved out of "Seller platform" subfolder
- Overview image scaled up: desktop grid `1fr 1.5fr`; mobile full-bleed to section edges (`margin:0 -24px; width:calc(100% + 48px)`), SVG `object-fit:contain`

## Nav tweaks pass (index.html)
- Desktop nav `top` spacing set to 36px (base rule; mobile stays bottom-anchored)
- Nav glass more transparent: background `rgba(255,255,255,0.72)` → `0.55`

## Git workflow fix
- GitHub Desktop showed no changes because the tracked repo is `~/Documents/GitHub/Portfolio`, not the edited copy in `~/Downloads/Portfolio`
- Edits had been saving to the Downloads copy, which is not a git repo
- Copied the 4 changed HTML files (index, copycat, cs2-funnel, seller-platform) from Downloads into the GitHub repo; now show as modified, ready to commit + push
- Non-HTML diffs left untouched: Portfolio design.md, resume.md, Adi_Mizrahi_Resume.pdf
- Going forward: all HTML edits happen directly in `~/Documents/GitHub/Portfolio` (single source of truth)

## Unit.e.p case study build (unit-ep.html)
- Connected the GitHub folder (`~/Documents/GitHub/Portfolio`) as source of truth; content came from `Unit.e.p Case Study (1).md`
- Built `unit-ep.html` by reusing cs3-seller (seller-platform.html) structure/styles/nav verbatim, swapping in Unit.e.p content only
- Sections: hero (text-only), meta (Solo Product Designer/Freelance · 1 Behavioral Commander + 1 Engineer · 6 months), Overview, Challenge/Strategy/Results trio, Defining the Problem, User Flow Mapping + Product Context, Design Solutions (dark), Streamlining the Workflow, Multi-Step Evaluation Flow, Results (accent), Interactive Prototype
- 8 image slots left as labeled empty placeholders (SVGs to be added next step)
- Prev/next nav: Copycat ← / Back to Home →
- Accent color changed from pink `#FF628D` → `#59D7A1`; light Results bg `#FFADC4` → `#9FE5C7`
- Connected homepage card (index.html, Card 4): activated from `is-soon`/"Coming Soon" → live link to unit-ep.html, added labels + description + CTA
- Replaced all long dashes (em/en) in unit-ep.html with short hyphens

## Homepage hero redesign (index.html)
- Replaced the "ADI MIZRAHI" text hero with a floating-composition hero matching the provided screenshot
- Soft pastel gradient background (pink/lavender/mint/gray radial blobs) inside the rounded hero card; removed old blob mouse-tracking + cursor dot
- Central white bubble: "Hey, I'm Adi / I'm a product designer / Problem solver, / Passionate creator." — clean rounded rectangle, no speech tail (removed for straight edges)
- 4 floating vector elements with gentle idle bob animation: flowers (`images and videos/flowe bouquet.svg`), profit dashboard (`budget_dashboard 1.svg`), phone rating card (`phone card.svg`), backpack (`images and videos/backpack.svg`)
- Hover: element lifts to front (scale + shadow micro-interaction) and a blue text chip appears; chips follow the cursor with a soft trailing motion (JS)
- Chip texts: dashboard "I'm a data-driven designer focused on impact." · flowers "Did you know? I started my design journey with flowers." · phone "E-commerce is my playground - designing for conversion." · backpack "Bag design is my thing - tap to check out my final industrial design project ✨" (short hyphens)
- Backpack click opens a video modal (small window) playing `images and videos/Final project industrial design.mp4` with play/pause, close (✕ / Esc / click-outside), and elapsed/total time display
- Sizing/position tuning: flowers raised near "Hey, I'm Adi" line and enlarged; phone card enlarged (282px); backpack enlarged
- Note: extension file-URL access is off, so live render (hover trail, video) verified via composited SVG preview rather than the user's browser

## Hero centering + View my work button (index.html)
- Centered the hero composition to the section block: central bubble moved to left 50% / top 50%
- Mirrored the 4 floating assets symmetrically around center, then nudged for depth: flowers left 36% / top 31%, dashboard left 67% / top 31%, phone left 33% / top 69%, backpack left 64% / top 69%
- Backpack pulled slightly left and flowers slightly right so both tuck partly behind the main box
- Added "View my work" button (links to #work): dark pill, centered, absolute-positioned 24px from the hero's bottom edge, with hover lift
