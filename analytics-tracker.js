/* ─────────────────────────────────────────
   Portfolio analytics tracker (GoatCounter)
   - Pageviews: automatic
   - Events: resume opens, contact clicks, video plays,
     active-time milestones, scroll depth
   - Session recordings: Microsoft Clarity
   - Your own browser is skipped once you connect on analytics.html
───────────────────────────────────────── */
(function () {
  var GC_CODE = 'adimiz'; // ← your GoatCounter site code (adimiz.goatcounter.com)

  var queue = [];
  var slug = (function () {
    var p = location.pathname.replace(/\/+$/, '').split('/').pop() || 'index';
    p = p.replace(/\.html$/, '');
    return p === 'index' ? 'home' : p;
  })();

  /* ── A/B test: homepage version (set by index.html / home-b.html) ── */
  var abV = null, abSrc = null;
  try { abV = localStorage.getItem('abHome'); abSrc = localStorage.getItem('abHomeSrc'); } catch (e) {}
  if (abV !== 'a' && abV !== 'b') {
    try { var abM = document.cookie.match(/(?:^|; )abHome=([ab])/); if (abM) abV = abM[1]; } catch (e) {}
  }

  /* Opening home-b.html directly = Adi testing → this browser is left out of all stats (GoatCounter + Clarity) */
  if (abSrc === 'direct') { try { localStorage.setItem('skipgc', 't'); } catch (e) {} }

  /* Version B visitors: links back to the homepage ("Home", "Back to work") go straight to home-b.html */
  if (abV === 'b') {
    var fixHomeLinks = function () {
      document.querySelectorAll('a[href]').forEach(function (a) {
        var h = a.getAttribute('href');
        var m = h.match(/^(?:\.\/|\/)?(?:index\.html)?(#.*)?$/);
        if (h && m && (h.indexOf('index.html') > -1 || h === '/' || h === './')) a.setAttribute('href', 'home-b.html' + (m[1] || ''));
      });
      var cta = document.getElementById('contactBtn');
      if (cta && /Contact\s*\+/.test(cta.textContent)) cta.textContent = 'Contact';
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fixHomeLinks); else fixHomeLinks();
  }
  var abTag = (abV === 'a' || abV === 'b') ? abV.toUpperCase() + (abSrc === 'assigned' ? '-assigned' : '') : null;
  var AB_EVENTS = /^(resume-open|contact-|cs-open|home-view)/;

  /* ── Visitor ID: anonymous random ID per browser, so one person's visits connect across days.
     ?who=name (e.g. adimiz.com/?v=b&who=wix) labels this browser from then on ── */
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} try { document.cookie = k + '=' + v + '; path=/; max-age=31536000; SameSite=Lax'; } catch (e) {} }
  function recall(k) {
    var v = null;
    try { v = localStorage.getItem(k); } catch (e) {}
    if (!v) { try { var m = document.cookie.match(new RegExp('(?:^|; )' + k + '=([^;]+)')); if (m) v = m[1]; } catch (e) {} }
    return v;
  }
  var vid = recall('vid');
  if (!vid || !/^[a-z0-9]{6,12}$/.test(vid)) { vid = Math.random().toString(36).slice(2, 10); store('vid', vid); }
  var who = null;
  try { who = new URLSearchParams(location.search).get('who'); } catch (e) {}
  who = (who || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 24);
  if (who) store('vidName', who); else who = (recall('vidName') || '').replace(/[^a-z0-9_-]/g, '');
  // Appended to every title GoatCounter receives → read back by the visit log on analytics.html
  var idTag = ' [@' + vid + (abV === 'a' || abV === 'b' ? ' ' + abV.toUpperCase() : '') + (who ? ' ' + who : '') + ']';
  window.goatcounter = window.goatcounter || {};
  window.goatcounter.title = function (t) { return (t || document.title || '') + idTag; };

  function send(name, title) {
    sendRaw(name, title);
    if (abTag && AB_EVENTS.test(name)) sendRaw('ab/' + abTag + '/' + name, '[' + abTag + '] ' + (title || name));
  }

  function sendRaw(name, title) {
    var gc = window.goatcounter;
    if (gc && typeof gc.count === 'function') {
      try { gc.count({ path: name, title: (title || name) + idTag, event: true }); } catch (e) {}
    } else {
      queue.push([name, title]);
    }
  }

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GC_CODE + '.goatcounter.com/count');
  s.onload = function () { while (queue.length) { var q = queue.shift(); sendRaw(q[0], q[1]); } };
  document.head.appendChild(s);

  /* ── Microsoft Clarity: session recordings & per-visitor journeys ──
     Skipped in your own browser (same flag GoatCounter uses) ── */
  var CLARITY_ID = 'z0m2rctvyp';
  var skipSelf = false;
  try { skipSelf = localStorage.getItem('skipgc') === 't'; } catch (e) {}
  if (!skipSelf && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && location.protocol !== 'file:') {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
    if (abTag) { try { window.clarity('set', 'home_variant', abV.toUpperCase()); window.clarity('set', 'variant_source', abSrc || 'unknown'); } catch (e) {} }
    try { window.clarity('identify', vid, null, null, who || vid); window.clarity('set', 'visitor_id', vid); if (who) window.clarity('set', 'visitor_name', who); } catch (e) {}
  }

  /* ── Homepage view, tagged by version ── */
  if (slug === 'home' || slug === 'home-b') send('home-view', 'Homepage view · ' + slug);

  /* ── Clicks ── */
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('a, button, [role="button"]');
    if (!el) return;
    var href = el.getAttribute('href') || '';
    var copy = el.getAttribute('data-copy') || '';

    if (/resume\.pdf/i.test(href))            send('resume-open', 'Resume opened · ' + slug);
    else if (/wa\.me\/|whatsapp\.com/i.test(href)) send('contact-phone', 'WhatsApp · ' + slug);
    else if (/linkedin\.com/i.test(href))     send('contact-linkedin', 'LinkedIn · ' + slug);
    else if (/^mailto:/i.test(href) || copy.indexOf('@') > -1) send('contact-email', 'Email · ' + slug);
    else if (/^tel:/i.test(href) || /^\+?\d[\d\s-]{6,}$/.test(copy)) send('contact-phone', 'Phone · ' + slug);
    else if (el.id === 'backpackTrigger')     send('video-backpack', 'Backpack video · ' + slug);
    var cs = href.match(/(copycat-v2|cs2-funnel|seller-platform|unit-ep)\.html/);
    if (cs && (slug === 'home' || slug === 'home-b')) send('cs-open-' + cs[1], 'Case study opened · ' + cs[1] + ' · ' + slug);
  }, true);

  /* ── Active time ──
     Counts only while the tab is visible AND the visitor interacted
     (scroll, mouse, key, touch) within the last 45s.
     Background tabs and idle open tabs add no time.
     One event per milestone: time-10s, time-30s, time-60s, time-3m, time-5m ── */
  var IDLE_MS = 45000;
  var MILESTONES = [[10, '10s'], [30, '30s'], [60, '60s'], [180, '3m'], [300, '5m']];
  var activeMs = 0, lastInput = Date.now(), lastTick = Date.now(), next = 0;

  function markActive() { lastInput = Date.now(); }
  ['scroll', 'wheel', 'mousemove', 'mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (ev) {
    window.addEventListener(ev, markActive, { passive: true, capture: true });
  });
  document.addEventListener('visibilitychange', function () {
    lastTick = Date.now();
    if (!document.hidden) markActive();
  });

  var timer = setInterval(function () {
    var now = Date.now();
    var gap = Math.min(now - lastTick, 2000); // ignore sleep / throttled timers
    lastTick = now;
    if (!document.hidden && now - lastInput < IDLE_MS) activeMs += gap;
    while (next < MILESTONES.length && activeMs >= MILESTONES[next][0] * 1000) {
      var m = MILESTONES[next][1];
      send('time-' + m + '/' + slug, 'Active ' + m + ' · ' + slug);
      next++;
    }
    if (next >= MILESTONES.length) clearInterval(timer);
  }, 1000);

  /* ── Scroll depth: 25 / 50 / 75 / 90% ── */
  var DEPTHS = [25, 50, 75, 90], depthNext = 0;
  window.addEventListener('scroll', function () {
    if (depthNext >= DEPTHS.length) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    if (max < 200) return;
    var pct = (window.scrollY / max) * 100;
    while (depthNext < DEPTHS.length && pct >= DEPTHS[depthNext]) {
      send('scroll-' + DEPTHS[depthNext] + '/' + slug, 'Scrolled ' + DEPTHS[depthNext] + '% · ' + slug);
      depthNext++;
    }
  }, { passive: true });
})();
