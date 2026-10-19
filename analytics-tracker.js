/* ─────────────────────────────────────────
   Portfolio analytics tracker (GoatCounter)
   - Pageviews: automatic
   - Events: resume opens, contact clicks, video plays,
     60s deep reads, 90% scroll depth
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

  /* ── Deep read: 60s of visible time on a page ── */
  var visibleMs = 0, last = document.hidden ? null : Date.now(), readSent = false;
  function tick() {
    if (last !== null) { visibleMs += Date.now() - last; last = document.hidden ? null : Date.now(); }
    if (!readSent && visibleMs >= 60000) { readSent = true; send('read-60s/' + slug, '60s read · ' + slug); }
  }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { tick(); last = null; } else { last = Date.now(); }
  });
  var timer = setInterval(function () { tick(); if (readSent) clearInterval(timer); }, 5000);

  /* ── Scroll depth: 90% of the page ── */
  var scrollSent = false;
  window.addEventListener('scroll', function () {
    if (scrollSent) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    if (max > 400 && (window.scrollY / max) >= 0.9) {
      scrollSent = true;
      send('scroll-90/' + slug, 'Scrolled 90% · ' + slug);
    }
  }, { passive: true });
})();
