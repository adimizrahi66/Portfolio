/* Tap-to-zoom for screenshots on phones.
   Tap an image to open it full screen; double-tap (or tap) inside to zoom
   in and pan; close with ✕, Esc or the phone's back button.
   Only active at phone/tablet widths, so desktop behaviour is unchanged. */
(function () {
  var mq = window.matchMedia('(max-width: 768px)');
  var SKIP = '.hero img, .hero-brand img, .card-company img, .glass-nav img, .about-photo-frame img, a img, .label img, .wz-live-box img, .rating-anim img:not(:first-child)';
  var overlay, scroller, big, opened = false;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'mz-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = '<div class="mz-bar"><span>Double-tap to zoom &middot; drag to pan</span>' +
      '<button type="button" class="mz-close" aria-label="Close">&times;</button></div>' +
      '<div class="mz-scroll"><img alt=""></div>';
    document.body.appendChild(overlay);
    scroller = overlay.querySelector('.mz-scroll');
    big = scroller.querySelector('img');
    overlay.querySelector('.mz-close').addEventListener('click', function () { close(true); });
    var lastTap = 0;
    big.addEventListener('click', function (e) {
      var now = Date.now();
      if (now - lastTap < 350 || !scroller.classList.contains('zoomed')) toggleZoom(e);
      lastTap = now;
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && opened) close(true); });
    window.addEventListener('popstate', function () { if (opened) close(false); });
  }

  function toggleZoom(e) {
    var r = big.getBoundingClientRect();
    var fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
    var zoomed = scroller.classList.toggle('zoomed');
    if (zoomed) {
      requestAnimationFrame(function () {
        scroller.scrollLeft = fx * big.offsetWidth - scroller.clientWidth / 2;
        scroller.scrollTop = fy * big.offsetHeight - scroller.clientHeight / 2;
      });
    }
  }

  function open(img) {
    if (!overlay) build();
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || '';
    scroller.classList.remove('zoomed');
    scroller.scrollTop = 0; scroller.scrollLeft = 0;
    overlay.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    opened = true;
    try { history.pushState({ mz: 1 }, ''); } catch (err) {}
  }

  function close(fromUi) {
    overlay.classList.remove('open');
    document.documentElement.style.overflow = '';
    opened = false;
    if (fromUi) { try { if (history.state && history.state.mz) history.back(); } catch (err) {} }
  }

  function eligible(img) {
    if (img.closest(SKIP)) return false;
    if (!img.closest('section')) return false;
    return (img.naturalWidth || 0) >= 360;
  }

  function addBadge(img) {
    var p = img.parentElement;
    if (!p || p.querySelector(':scope > .mz-badge')) return;
    if (p.querySelectorAll(':scope > img').length !== 1) return;
    if (getComputedStyle(p).position === 'static') p.style.position = 'relative';
    var b = document.createElement('span');
    b.className = 'mz-badge';
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
    p.appendChild(b);
  }

  function mark() {
    if (!mq.matches) return;
    document.querySelectorAll('section img').forEach(function (img) {
      if (img.classList.contains('mz-zoomable')) return;
      var go = function () { if (eligible(img)) { img.classList.add('mz-zoomable'); addBadge(img); } };
      if (img.complete && img.naturalWidth) go(); else img.addEventListener('load', go, { once: true });
    });
  }

  // Capture phase so the page's own desktop lightboxes don't also open on phones.
  document.addEventListener('click', function (e) {
    if (!mq.matches) return;
    var img = e.target.closest && e.target.closest('img.mz-zoomable');
    var host = !img && e.target.closest && e.target.closest('[onclick*="openLightbox"]');
    if (host) img = host.querySelector('img.mz-zoomable');
    if (!img || (overlay && overlay.contains(img))) return;
    e.preventDefault(); e.stopPropagation();
    open(img);
  }, true);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mark); else mark();
  window.addEventListener('load', mark);
  if (mq.addEventListener) mq.addEventListener('change', mark);
})();
