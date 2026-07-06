# CopyCat CRM Design

A content-arbitrage CRM for Roundforest. We designed the Tasks Pipeline and the full Article → Creatives workflow for CopyCat, working in the established rhythm: **prototype in HTML → review/approve → build in Figma.**

## 1. Tasks management screen (first build)

From the reference screenshots, the first build was a single scrolling Tasks screen: navy sidebar, top bar, and the "Facebook Creative Pipeline" board. After clarifying layout, color, and data fidelity, the table shipped with the exact columns, then iterated on feedback:

- Moved Task Overview analytics under a clickable **Dashboard** tab.
- Used the **exact 16 column names/order**.
- Made **Name + checkbox sticky** on horizontal scroll; **rounded checkboxes**.
- Added per-row **"Article"** and **"Creatives"** action buttons.
- Added the **created state** ("✓ Article" + pencil) and made **PIDs appear only after an article exists**.

## 2. Create Article modal

An AI-drafted generator: page title auto-filled from the task, prominent banner with regenerate, AI-generated Description 1/2 + Sharing Description (3 options), per-field regenerate, "AI generated" indicators, Create/Cancel.

## 3. Figma build

Created a cloud Figma file and built the Tasks screen, Dashboard tab, and Create Article modal natively (auto-layout, green brand, Inter). Then applied UI tweaks (more column spacing, higher-contrast chips/avatars, less-rounded tags) in both HTML and Figma.

**Figma file:** https://www.figma.com/design/zQQSSPdQjQ4YxcCr5dGxzM

## 4. Design-system adoption

From the UI-kit screenshot, built a **design-system reference page** and re-skinned the product to the **indigo (#5C67F2) palette** with pill tags.

## 5. Full Creative Creation flow + refinement (latest)

Rebuilt everything into one production-feel prototype (`copycat-crm.html`), then applied the large refinement spec:

- **Asana-matched table** (columns, order, data, statuses, categories), now with **Name + Page Title both frozen**.
- A **two-step workflow control** (Write article → Create creatives) with every state, aligned across rows.
- **Completed-row tint** + a new **Ready for PPC** section reached by checking a completed task.
- **Download CSV** in the toolbar.
- Creative flow: **sticky, clickable stepper**; live **Creatives Status**; branching **Setup** (Image/Video + New/Duplicate-winner upload); redesigned **PID & List**; selectable **Templates** + Settings panel; **merged Review & Select** with per-card Switch ASIN/Regenerate (in-card tweak prompt + Gemini Pro), **floating bulk-action banner**, and a **checkbox review checklist** that gates progress; **Download** with **Upload to Kueez CMS** + completion state.

## 6. UX/UI refinement pass (latest session)

A focused round of usability + visual-polish work across the Tasks Pipeline and the full Creative Creation flow, all in `copycat-crm.html` and verified in a headless DOM sandbox.

### Tasks Pipeline

- **Live search** — the top-bar search now filters rows in real time by page title, PID, creative ID, category, tag, and assignee, with per-section counts, an "X of N" footer, and empty states.
- **Clearer PPC affordance** — the row checkbox is dashed/dimmed and disabled until a task's article + creatives are both complete (with an explanatory tooltip); completed rows can be checked to move to **Ready for PPC**, and unchecking sends them back to Backlog.
- **Scroll-aware frozen columns** — the Name/Page Title divider shadow only appears once the table is scrolled horizontally.

### Creative Creation flow — global

- **Gated stepper** — users can no longer jump ahead to steps they haven't reached; future steps render locked. Back-navigation and full access for completed tasks are preserved.
- **Collapsing header** — from Step 2 onward, the top task box (title/status/PID) minimizes into a single compact row to reduce scrolling; it expands again on Step 1.

### Step 1 — Setup

- Choice boxes are now compact **squares** instead of wide rectangles.
- Added an **Influencer** option under "Which article path?" (alongside New Article / Duplicate Winner).
- Article-path selection has a distinct style (white fill + primary stroke) to differentiate it from the creative-type selection (indigo fill).

### Step 2 — PID & Storefront (was "PID & List")

- Renamed **PastePick → Storefront**. The dropdown is gone; the card shows the **list title** (truncated with ellipsis + hover tooltip), the product count, and a **View storefront on Amazon** link. The category name and "synced" chip were removed.
- Storefront connection is now a **single toggle, default ON** (replacing the two-box control).
- Boxes are capped narrower so they don't stretch full width.

### Step 3 — Templates

- Added a **storefront strip** (list title + product count + Amazon link).
- Bigger cards, **4 per row**, with portrait **896×1200** image area.
- Shows **20 templates with 88 hidden** (108 total) behind a **"View & pick more templates"** expander; the selected count is dynamic.
- A **sticky floating bar** appears at the bottom showing the selected-template count (with a quick Generate action) once the header count scrolls out of view.

### Step 5 — Review & Select

- **Modifiable auto-pick** — the fixed "Auto-pick best 9" is now an auto-pick number selector with a **"+ Add number…"** option; the last number used becomes the default on the next flow entry. The rigid 6–9 cap was relaxed to a minimum of 6 with no upper limit.
- **Gallery view** — creative cards are now portrait (896×1200, matching Step 3).
- **Lightbox** — clicking the image (not the checkbox) opens a full-screen viewer with prev/next nav, a counter, and a side panel showing **Filename, editable Tags (add/remove), PID, Title** plus **Switch ASIN** and **Regenerate**. Supports arrow-key / Esc navigation.
- **Gallery Regenerate** opens a provider dropdown + tweak-instructions field.
- **Switch ASIN modal** (from both grid cards and the gallery) — a searchable product list with Amazon product images (enlarged thumbnails) and a "Current" badge.
- The **review checklist** was trimmed to two items (visible logos, hidden/incorrect text); both must be checked to continue.

### Step 6 — Download

- The completion title now includes the PID (e.g. **"Uploaded to Kueez CMS · PID 97761"**).

### Components

- The floating **bulk-action bar** was made responsive: single-line button labels, tighter fonts, viewport-capped width with a hidden-scrollbar fallback.

## 7. Polish & UX fixes pass (current session)

A focused round of targeted fixes and UX improvements across the Creative Creation flow and the Tasks Pipeline table.

### Step 2 — PID & Storefront: Connection Settings

Added a **Settings gear button** inside the Storefront Connection card (between the description text and the toggle), so it is visually scoped to the card it controls. Clicking it opens an anchored popover with:

- **Mapping Mode** toggle: 1-to-1 vs. Many-to-Many
- **Insert first N ASINs** stepper (−/+ control, min 1) with the note "Total images = number of selected templates"
- **Set as default** — saves the current values as the session default, with a "✓ Saved as default" confirmation flash
- **Apply** button closes the popover and confirms the settings

### Generate stage — success banner

The "Done!" completion message was overlapping the floating bulk-action bar at the bottom of the screen. Replaced it with a **top-of-screen green banner** that springs in from above ("Generation complete! · 20 creatives are ready for review"), stays visible for ~3 seconds while the app transitions to the Review step, then slides back up. No more overlap with any bottom-fixed element.

### Toast positioning fix

The "Auto-picked 9 creatives" toast was rendering at the same `bottom: 24px` as the bulk-action bar, sitting directly on top of it. The toast now detects whether the bulk bar is visible and **lifts itself above it** dynamically (bulk bar height + 8px gap), with a smooth bottom-position transition.

### Tasks table — Actions column redesign

Replaced the multi-state, multi-color workflow buttons with a clean **two-state system** per action:

| State | Style | Icon |
|---|---|---|
| Not created (available) | Ghost button — white bg, gray border, dark text | `+` plus |
| Created | Soft green — `#DCFCE7` bg, `#15803D` text | `✓` check |
| Disabled (article missing) | Transparent, muted text, 55% opacity | `+` (inactive) |

Removed all intermediate states (Writing…, Preparing…, pulsing animation, lock icon, clock icon). The article button is always clickable; the creatives button is disabled with a tooltip until the article exists. No PPC button in the actions cell — the row checkbox handles that.

### Tasks table — visual and layout fixes

- **Tags** — all status/category chips changed from full pill (`border-radius:999px`) to soft rounded rectangle (`border-radius:7px`), matching the design-system screenshot reference.
- **Page Title column** — narrowed to 180px max-width; long titles truncate with `…` and show the full title on hover via a native `title` attribute.
- **Name → Page Title gap** — Name column reduced to 200px; the Page Title sticky offset corrected from `left:236px` to `left:200px` (eliminating a visible white gap between the two frozen columns).
- **Actions column** — header center-aligned; column width reduced to 280px with tighter horizontal padding.
- **Done rows to top** — completed tasks (both ✓ Article + ✓ Creatives) automatically sort to the top of the Backlog section on every render.
- **Completed row tint** — updated to `#F5FDF8` (slightly warmer green wash) with `#EDFAF2` on hover.

## 8. Preferences Settings screen

Added a full **Preferences** section to the platform, accessible from the sidebar under a new "Settings" group. It uses a left-nav + right-panel layout with three panels built so far. This section will grow incrementally as new platform features are added; Admin-only access is planned for a future phase.

### Templates settings panel

A table listing every template with inline controls:

- **Tags** — each template shows its current tags as removable pills; clicking `+` opens an inline text input to add a new tag (Enter to confirm, Escape to cancel).
- **Storefront connection toggle** — a per-template toggle (`.tgl`) that reflects and persists the `sfConn` boolean for each template. These values are stored in the shared `PREF_TEMPLATES` array, which is also consumed by the Creative Creation flow.

### Dashboard columns panel

Four sub-tabs — **BI Dashboard**, **Articles List**, **Winner Discovery**, **Tasks Status** — each showing a list of available columns with a toggle to enable/disable them. The active column set is stored in `PREF_COLUMNS` per dashboard key.

### AI model settings panel

Lists every AI-powered feature in the platform (article generation, title suggestions, tag inference, ASIN matching, etc.) with a `<select>` dropdown per feature to choose the active model (GPT-4o, Claude Sonnet, Gemini Pro, etc.). A vendor badge updates dynamically to reflect the selected provider.

### Sidebar additions

Added four new stub screens under a **Dashboards** group — BI Dashboard, Articles List, Winner Discovery, Tasks Status — each with a "Coming soon" placeholder. Each nav item carries a `soon` badge. The Preferences nav item is under a separate **Settings** group.

---

## 9. Creative flow restructure — remove PID & Storefront step

Removed **Step 2 (PID & Storefront)** from the Creative Creation flow entirely, and distributed its functionality into other steps.

### Step renumbering

| Old | New | Name |
|---|---|---|
| Step 1 | Step 1 | Setup |
| Step 2 | *(removed)* | PID & Storefront |
| Step 3 | Step 2 | Templates |
| Step 4 | Step 3 | Generate |
| Step 5 | Step 4 | Review & Select |
| Step 6 | Step 5 | Download |

The `STEPS` array, `STATUS_BY_STEP` map, all `gotoStep()` calls, `startGeneration()`, and the `maxStep` for completed tasks were all updated to match the new 5-step numbering.

### Storefront toggle per template card

Each template card in Step 2 (Templates) now has a **storefront connection row** at the bottom — a small house icon, "Storefront" label, and a compact `.tgl-sm` toggle. Behaviour:

- On first render, each card's toggle is **seeded from the global Preferences** (`PREF_TEMPLATES[i % 12].sfConn`), so the manager's default setting is respected automatically.
- The user can **override the toggle per card** within the session by clicking it — this updates the local `tplSfConn[]` array without touching the global preference.
- Clicking the row or the toggle button both work; propagation is stopped so the card selection (`toggleTpl`) is not triggered.

## Deliverables (in the CopyCat project folder)

- **`copycat-crm.html`** — the current, complete prototype (refined Tasks Pipeline + full Creative Creation flow). This is the main file.
- **`copycat-design-system.html`** — the indigo UI-kit reference (palette, buttons, tags, forms, elements).
- **`copycat-tasks-preview.html`** — the earlier standalone Tasks screen + Article modal.

**Figma file (Roundforest workspace):** https://www.figma.com/design/zQQSSPdQjQ4YxcCr5dGxzM

## Open items / next step

The Figma file currently holds the earlier Tasks screen, Dashboard tab, and Article modal (in the indigo + spacing/contrast revisions). All later work — Sections 5–9 above — lives in `copycat-crm.html` and is **not yet ported to Figma**. Whenever the prototype is approved, that is the next build.

Preferences will grow incrementally: each new platform feature that requires a configurable default will get an entry added to the relevant panel (or a new panel) at build time.
