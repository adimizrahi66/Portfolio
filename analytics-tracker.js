/* ─────────────────────────────────────────
   Portfolio analytics tracker (GoatCounter)
   - Pageviews: automatic
   - Events: resume opens, contact clicks, video plays,
     active-time milestones, scroll depth
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

  function send(name, title) {
    var gc = window.goatcounter;
    if (gc && typeof gc.count === 'function') {
      try { gc.count({ path: name, title: title || name, event: true }); } catch (e) {}
    } else {
      queue.push([name, title]);
    }
  }

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GC_CODE + '.goatcounter.com/count');
  s.onload = function () { while (queue.length) { var q = queue.shift(); send(q[0], q[1]); } };
  document.head.appendChild(s);

  /* ── Clicks ── */
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('a, button, [role="button"]');
    if (!el) return;
    var href = el.getAttribute('href') || '';
    var copy = el.getAttribute('data-copy') || '';

    if (/resume\.pdf/i.test(href))            send('resume-open', 'Resume opened · ' + slug);
    else if (/linkedin\.com/i.test(href))     send('contact-linkedin', 'LinkedIn · ' + slug);
    else if (/^mailto:/i.test(href) || copy.indexOf('@') > -1) send('contact-email', 'Email · ' + slug);
    else if (/^tel:/i.test(href) || /^\+?\d[\d\s-]{6,}$/.test(copy)) send('contact-phone', 'Phone · ' + slug);
    else if (el.id === 'backpackTrigger')     send('video-backpack', 'Backpack video · ' + slug);
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
