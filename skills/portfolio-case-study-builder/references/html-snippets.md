# HTML Snippets — Portfolio Case Study Builder

Drop-in HTML blocks. All use Adi's existing CSS custom properties — no new tokens.
Pair every snippet with the shared `<head>` from `cs3-seller.html` (Poppins import, root tokens, glass nav styles).

---

## 1. Hero (dark) — `hero-dark`

```html
<section class="cs-hero">
  <div class="cs-hero__inner">
    <span class="eyebrow">CASE STUDY · PRODUCT DESIGN</span>
    <h1 class="cs-hero__title">
      <span class="solid">Top Secret</span>
      <span class="outline">Links</span>
    </h1>
    <p class="cs-hero__tagline">Bridging the creator monetization gap in India — built and shipped in 11 weeks.</p>
    <ul class="cs-hero__tags">
      <li>UX Research</li><li>Design System</li><li>Prototyping</li><li>UI Design</li><li>AB Testing</li>
    </ul>
    <span class="cs-hero__scroll">Scroll ↓</span>
  </div>
</section>

<style>
  .cs-hero { background:#0C0B0A; color:#F5F3EF; min-height:100vh; display:flex; align-items:center; padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-hero__inner { max-width:1180px; margin:0 auto; width:100%; }
  .cs-hero__title { font-size:clamp(56px,9vw,128px); font-weight:800; letter-spacing:-0.04em; line-height:0.92; text-transform:uppercase; margin:24px 0 32px; }
  .cs-hero__title .outline { -webkit-text-stroke:1px #F5F3EF; color:transparent; }
  .cs-hero__tagline { font-size:clamp(18px,1.6vw,24px); max-width:680px; color:#C0BCB5; }
  .cs-hero__tags { list-style:none; display:flex; flex-wrap:wrap; gap:8px; padding:0; margin:32px 0 64px; }
  .cs-hero__tags li { padding:6px 14px; border:1px solid #2A2825; border-radius:999px; font-size:13px; color:#C0BCB5; }
  .cs-hero__scroll { font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#C0BCB5; }
  .eyebrow { font-size:10px; font-weight:600; letter-spacing:0.22em; text-transform:uppercase; color:var(--text-subtle); }
</style>
```

---

## 2. Meta row — `meta-row`

```html
<section class="cs-meta">
  <div class="cs-meta__inner">
    <div class="cs-meta__cell"><span class="eyebrow">Role</span><p>Lead Product Designer · Solo IC on design, paired with 1 PM + 3 eng</p></div>
    <div class="cs-meta__cell"><span class="eyebrow">Timeline</span><p>11 weeks · Mar – May 2025</p></div>
    <div class="cs-meta__cell"><span class="eyebrow">Tools</span><p>Figma · Maze · Amplitude · Notion</p></div>
  </div>
</section>

<style>
  .cs-meta { background:var(--hero-bg); padding:clamp(64px,8vw,96px) clamp(20px,4vw,64px); }
  .cs-meta__inner { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:repeat(3,1fr); gap:48px; }
  .cs-meta__cell p { margin-top:12px; font-size:16px; line-height:1.55; }
  @media (max-width:768px){ .cs-meta__inner{ grid-template-columns:1fr; gap:32px; } }
</style>
```

---

## 3. Problem statement — `problem`

```html
<section class="cs-problem">
  <div class="cs-problem__inner">
    <span class="eyebrow">01 · The Problem</span>
    <h2 class="cs-problem__title">Indian creators were earning <em>cents on the dollar</em> compared to their Western peers — despite driving the same engagement.</h2>
    <div class="cs-problem__stats">
      <div><strong>92%</strong><span>of creators earned &lt; $200/mo</span></div>
      <div><strong>3.4×</strong><span>more time spent on platform vs Western users</span></div>
      <div><strong>0</strong><span>local-currency monetization paths in market</span></div>
    </div>
  </div>
</section>

<style>
  .cs-problem { background:var(--page-bg); padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-problem__inner { max-width:1180px; margin:0 auto; }
  .cs-problem__title { font-size:clamp(32px,4.4vw,56px); font-weight:700; letter-spacing:-0.025em; line-height:1.1; margin:24px 0 64px; max-width:980px; }
  .cs-problem__title em { color:var(--accent); font-style:normal; }
  .cs-problem__stats { display:grid; grid-template-columns:repeat(3,1fr); gap:32px; }
  .cs-problem__stats strong { display:block; font-size:clamp(48px,5vw,72px); font-weight:800; letter-spacing:-0.03em; color:var(--text); }
  .cs-problem__stats span { font-size:14px; color:var(--text-muted); }
  @media (max-width:768px){ .cs-problem__stats{ grid-template-columns:1fr; } }
</style>
```

---

## 4. Audience / persona cards — `audience`

```html
<section class="cs-audience">
  <div class="cs-audience__inner">
    <span class="eyebrow">02 · Understanding the Audience</span>
    <h2>Three creators, one shared bottleneck.</h2>
    <div class="cs-audience__grid">
      <article>
        <div class="cs-audience__icon">🎬</div>
        <h3>The Vlogger</h3>
        <p>Posts daily. Audience of 80k. Earns ₹4k/mo from ads. Can't access AdSense thresholds.</p>
      </article>
      <article>
        <div class="cs-audience__icon">🎙️</div>
        <h3>The Educator</h3>
        <p>Niche tech tutorials. Trusted by audience. No clear path beyond YouTube CPMs.</p>
      </article>
      <article>
        <div class="cs-audience__icon">📸</div>
        <h3>The Lifestyle Creator</h3>
        <p>Brand deals are inconsistent. Wants recurring income, not one-off campaigns.</p>
      </article>
    </div>
  </div>
</section>

<style>
  .cs-audience { background:#0C0B0A; color:#F5F3EF; padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-audience__inner { max-width:1180px; margin:0 auto; }
  .cs-audience h2 { font-size:clamp(32px,3.4vw,40px); font-weight:700; letter-spacing:-0.02em; margin:24px 0 64px; }
  .cs-audience__grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .cs-audience__grid article { background:#16140F; border:1px solid #2A2825; border-radius:24px; padding:32px; }
  .cs-audience__icon { font-size:32px; margin-bottom:16px; }
  .cs-audience h3 { font-size:24px; font-weight:600; margin-bottom:12px; }
  .cs-audience p { font-size:14px; color:#C0BCB5; line-height:1.6; }
  @media (max-width:768px){ .cs-audience__grid{ grid-template-columns:1fr; } }
</style>
```

---

## 5. Solution beat (REPEATABLE) — `solution-beat`

Alternate `.is-reverse` on every other beat for the zigzag rhythm.

```html
<section class="cs-beat">
  <div class="cs-beat__inner">
    <div class="cs-beat__copy">
      <span class="eyebrow">Beat 01</span>
      <h3>The hybrid recommendation engine</h3>
      <p>I combined collaborative filtering with editorial curation so the carousel never felt cold-start empty. Result: every user sees ≥4 personalized picks within 200ms of page load.</p>
      <ul>
        <li>Editorial layer: 12 hand-picked fallbacks per category</li>
        <li>Personalization layer: weighted by last 30 days of interaction</li>
        <li>Telemetry baked in: every impression logs to Amplitude</li>
      </ul>
    </div>
    <div class="cs-beat__visual feature-screen">[ Hybrid engine screenshot ]</div>
  </div>
</section>

<style>
  .cs-beat { background:#0C0B0A; color:#F5F3EF; padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-beat__inner { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
  .cs-beat.is-reverse .cs-beat__inner { direction:rtl; }
  .cs-beat.is-reverse .cs-beat__inner > * { direction:ltr; }
  .cs-beat h3 { font-size:clamp(28px,3vw,36px); font-weight:700; letter-spacing:-0.02em; margin:16px 0 16px; }
  .cs-beat p { font-size:16px; color:#C0BCB5; line-height:1.65; margin-bottom:24px; }
  .cs-beat ul { list-style:none; padding:0; }
  .cs-beat li { position:relative; padding-left:20px; margin-bottom:10px; font-size:14px; color:#C0BCB5; }
  .cs-beat li::before { content:""; position:absolute; left:0; top:8px; width:8px; height:8px; border-radius:50%; background:var(--accent); }
  .cs-beat__visual { aspect-ratio:9/19.5; background:#1B1815; border-radius:24px; display:flex; align-items:center; justify-content:center; color:#3F3A33; font-size:12px; }
  @media (max-width:768px){ .cs-beat__inner{ grid-template-columns:1fr; gap:32px; } .cs-beat.is-reverse .cs-beat__inner{ direction:ltr; } }
</style>
```

---

## 6. Validation — `validation`

```html
<section class="cs-validation">
  <div class="cs-validation__inner">
    <span class="eyebrow">Hypothesis-driven validation</span>
    <h2>We didn't ship until the data agreed.</h2>
    <p class="cs-validation__hypothesis"><strong>Hypothesis:</strong> Surfacing 3 personalized picks above the fold will lift add-to-cart by ≥15%.</p>
    <div class="cs-validation__variants">
      <figure><div class="feature-screen">[ Variant A — control ]</div><figcaption>Variant A · Control · 100% traffic baseline</figcaption></figure>
      <figure><div class="feature-screen">[ Variant B — 3 picks ]</div><figcaption>Variant B · 3 picks above fold · <strong>+22% ATC</strong></figcaption></figure>
      <figure><div class="feature-screen">[ Variant C — 5 picks ]</div><figcaption>Variant C · 5 picks above fold · +9% ATC, but −14% scroll depth</figcaption></figure>
    </div>
    <p class="cs-validation__verdict">Shipped Variant B in week 9. Variant C archived in the AB log.</p>
  </div>
</section>

<style>
  .cs-validation { background:var(--page-bg); padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-validation__inner { max-width:1180px; margin:0 auto; }
  .cs-validation h2 { font-size:clamp(32px,3.4vw,40px); font-weight:700; letter-spacing:-0.02em; margin:16px 0 24px; }
  .cs-validation__hypothesis { background:var(--hero-bg); border-left:3px solid var(--accent); padding:20px 24px; border-radius:8px; font-size:16px; margin-bottom:48px; }
  .cs-validation__variants { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .cs-validation__variants figure { margin:0; }
  .cs-validation__variants .feature-screen { aspect-ratio:9/19.5; background:#1B1815; color:#C0BCB5; border-radius:18px; display:flex; align-items:center; justify-content:center; font-size:12px; }
  .cs-validation__variants figcaption { margin-top:12px; font-size:13px; color:var(--text-muted); }
  .cs-validation__verdict { margin-top:48px; font-size:18px; font-weight:600; }
  @media (max-width:768px){ .cs-validation__variants{ grid-template-columns:1fr; } }
</style>
```

---

## 7. Impact (HERO STATS) — `impact`

Gold variant — bold and celebratory. Use this most of the time.

```html
<section class="cs-impact">
  <div class="cs-impact__inner">
    <span class="eyebrow cs-impact__eyebrow">Lasting impact</span>
    <h2>The numbers that closed the loop.</h2>
    <div class="cs-impact__stats">
      <div><strong>$1B</strong><span>Incremental annual revenue attributed to the recommendation surface.</span></div>
      <div><strong>+80%</strong><span>Lift in add-to-cart on personalized cohorts vs control.</span></div>
      <div><strong>2×</strong><span>Faster discovery — time-to-first-add cut from 38s to 19s.</span></div>
    </div>
    <blockquote>"This is the highest-leverage surface in the app. The team is now building the next two rows on top of it." — VP Product</blockquote>
  </div>
</section>

<style>
  .cs-impact { background:var(--accent); color:#0C0B0A; padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-impact__inner { max-width:1180px; margin:0 auto; }
  .cs-impact__eyebrow { color:#0C0B0A; opacity:0.7; }
  .cs-impact h2 { font-size:clamp(36px,4vw,52px); font-weight:700; letter-spacing:-0.025em; margin:16px 0 64px; max-width:880px; }
  .cs-impact__stats { display:grid; grid-template-columns:repeat(3,1fr); gap:48px; margin-bottom:64px; }
  .cs-impact__stats strong { display:block; font-size:clamp(56px,7vw,96px); font-weight:800; letter-spacing:-0.04em; line-height:1; }
  .cs-impact__stats span { display:block; margin-top:16px; font-size:14px; line-height:1.5; max-width:280px; }
  .cs-impact blockquote { font-size:clamp(20px,2vw,28px); font-style:italic; max-width:880px; padding-left:24px; border-left:3px solid #0C0B0A; }
  @media (max-width:768px){ .cs-impact__stats{ grid-template-columns:1fr; gap:32px; } }
</style>
```

---

## 8. Learnings — `learnings`

```html
<section class="cs-learnings">
  <div class="cs-learnings__inner">
    <span class="eyebrow">What I learned</span>
    <h2>Two columns. One for honesty.</h2>
    <div class="cs-learnings__grid">
      <div>
        <h3>What I'd do differently</h3>
        <ul>
          <li>Run the audience research in-market sooner. Three of the four personas shifted after week 4.</li>
          <li>Ship the validation framework on day 1, not week 6. We re-ran two tests because the events weren't instrumented.</li>
          <li>Push back on the "ship in 8 weeks" mandate. The real number was 11. Estimates are also a design decision.</li>
        </ul>
      </div>
      <div>
        <h3>What I'd repeat</h3>
        <ul>
          <li>Build the design system before the screens. Saved ~40% of the time on iteration.</li>
          <li>Pair-design with the PM on the problem statement. Aligned the whole org in one workshop.</li>
          <li>End every sprint with a metric, not a demo. Made the work legible to non-design stakeholders.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .cs-learnings { background:var(--hero-bg); padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-learnings__inner { max-width:1180px; margin:0 auto; }
  .cs-learnings h2 { font-size:clamp(32px,3.4vw,40px); font-weight:700; letter-spacing:-0.02em; margin:16px 0 48px; }
  .cs-learnings__grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; }
  .cs-learnings h3 { font-size:20px; font-weight:600; margin-bottom:20px; color:var(--accent); }
  .cs-learnings ul { list-style:none; padding:0; }
  .cs-learnings li { position:relative; padding-left:20px; margin-bottom:14px; font-size:15px; line-height:1.6; }
  .cs-learnings li::before { content:""; position:absolute; left:0; top:9px; width:6px; height:6px; border-radius:50%; background:var(--accent); }
  @media (max-width:768px){ .cs-learnings__grid{ grid-template-columns:1fr; gap:32px; } }
</style>
```

---

## 9. Sign-off — `signoff`

```html
<section class="cs-signoff">
  <div class="cs-signoff__inner">
    <p class="cs-signoff__thanks">Thanks for watching.</p>
    <h2>Let's create cool things together.</h2>
    <div class="cs-signoff__ctas">
      <a class="cs-signoff__primary" href="mailto:adi@example.com">Drop me a line ↗</a>
      <a class="cs-signoff__secondary" href="kueez-experience.html">Next case study — Kueez Experience →</a>
    </div>
  </div>
</section>

<style>
  .cs-signoff { background:#0C0B0A; color:#F5F3EF; padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px) 200px; }
  .cs-signoff__inner { max-width:1180px; margin:0 auto; text-align:center; }
  .cs-signoff__thanks { font-size:14px; letter-spacing:0.22em; text-transform:uppercase; color:var(--text-subtle); margin-bottom:24px; }
  .cs-signoff h2 { font-size:clamp(40px,5vw,72px); font-weight:800; letter-spacing:-0.03em; line-height:1.05; margin-bottom:48px; }
  .cs-signoff__ctas { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
  .cs-signoff__primary { background:var(--accent); color:#0C0B0A; padding:16px 32px; border-radius:999px; font-weight:600; text-decoration:none; }
  .cs-signoff__secondary { color:#C0BCB5; padding:16px 24px; text-decoration:none; }
  .cs-signoff__secondary:hover { color:#F5F3EF; }
</style>
```

---

## Optional: market context grid — `economy-grid`

```html
<section class="cs-economy">
  <div class="cs-economy__inner">
    <span class="eyebrow">The opportunity</span>
    <h2>Breaking down the Indian creator economy.</h2>
    <div class="cs-economy__grid">
      <article><strong>500M+</strong><span>Active social users — 2nd largest market globally</span></article>
      <article><strong>$1.8B</strong><span>Creator economy size by 2027 (RedSeer)</span></article>
      <article><strong>4.4%</strong><span>Of creators currently earn full-time income</span></article>
      <article><strong>0</strong><span>Native rupee-first monetization tools at launch</span></article>
    </div>
  </div>
</section>

<style>
  .cs-economy { background:#0C0B0A; color:#F5F3EF; padding:clamp(96px,12vw,160px) clamp(20px,4vw,64px); }
  .cs-economy__inner { max-width:1180px; margin:0 auto; }
  .cs-economy h2 { font-size:clamp(32px,3.4vw,40px); font-weight:700; letter-spacing:-0.02em; margin:16px 0 48px; }
  .cs-economy__grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
  .cs-economy__grid article { background:#16140F; border:1px solid #2A2825; border-radius:18px; padding:28px; }
  .cs-economy__grid strong { display:block; font-size:clamp(32px,3.4vw,48px); font-weight:800; color:var(--accent); margin-bottom:12px; }
  .cs-economy__grid span { font-size:13px; color:#C0BCB5; line-height:1.5; }
  @media (max-width:768px){ .cs-economy__grid{ grid-template-columns:1fr 1fr; } }
</style>
```
