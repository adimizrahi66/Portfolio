/* ─────────────────────────────────────────
   About modal · homepage A (index.html) + B (home-b.html)
   Opens from any a[href="about.html"] link, or #about in the URL.
───────────────────────────────────────── */
(function () {
  var WA = '<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" style="vertical-align:-2px;margin-right:4px"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  var css = '' +
  '.am-overlay{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(30,24,18,.42);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:0;visibility:hidden;transition:opacity .28s ease,visibility .28s}' +
  '.am-overlay.open{opacity:1;visibility:visible}' +
  '.am-panel{position:relative;width:100%;max-width:760px;max-height:calc(100vh - 48px);overflow-y:auto;overscroll-behavior:contain;border-radius:28px;padding:56px 48px 40px;font-family:"Poppins",system-ui,sans-serif;color:#1E1E1E;text-align:center;' +
    'background-color:#E2DED6;background-image:radial-gradient(circle at 30% 40%,rgba(255,255,255,.06) 0 .8px,transparent 1.2px),radial-gradient(circle at 70% 70%,rgba(0,0,0,.07) 0 .8px,transparent 1.2px),radial-gradient(circle at 50% 20%,rgba(255,255,255,.05) 0 .6px,transparent 1px),radial-gradient(80% 70% at 50% 40%,rgba(255,255,255,.4) 0%,rgba(255,255,255,0) 70%);background-size:5px 5px,7px 7px,3px 3px,100% 100%;' +
    'box-shadow:0 40px 90px -30px rgba(30,24,18,.5);transform:translateY(24px) scale(.98);transition:transform .38s cubic-bezier(.22,1,.36,1)}' +
  '.am-overlay.open .am-panel{transform:none}' +
  '.am-close{position:absolute;top:16px;right:16px;width:40px;height:40px;border-radius:50%;border:1px solid #D3CEC5;background:#F5F3EF;color:#5A544C;font:400 22px/1 "Poppins",sans-serif;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s,color .2s}' +
  '.am-close:hover{background:#FFFFFF;color:#1E1E1E}' +
  '.am-photo{width:150px;margin:0 auto 26px;padding:9px;background:#FFFFFF;border-radius:16px;box-shadow:0 18px 36px -18px rgba(60,45,30,.35)}' +
  '.am-photo img{display:block;width:100%;aspect-ratio:1/1.1;object-fit:cover;border-radius:9px;background:#F5F3EF}' +
  '.am-title{margin:0 0 20px;font-family:"Fraunces",serif;font-weight:600;font-size:56px;line-height:1;letter-spacing:-.03em;color:#1E1E1E}' +
  '.am-lede{margin:0 auto 14px;max-width:560px;font-family:"Fraunces",serif;font-weight:400;font-size:22px;line-height:1.4;letter-spacing:-.01em;color:#1E1E1E}' +
  '.am-body{margin:0 auto;max-width:560px;font-size:15px;line-height:1.75;color:#5A544C}' +
  '.am-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:28px}' +
  '.am-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 24px;border-radius:999px;font:500 15px/1 "Poppins",sans-serif;text-decoration:none;cursor:pointer;transition:background .2s}' +
  '.am-btn-primary{background:#1E1E1E;color:#FFFFFF;border:0}.am-btn-primary:hover{background:#000}' +
  '.am-btn-ghost{background:rgba(255,255,255,.35);border:1px solid rgba(30,30,30,.22);color:#1E1E1E}.am-btn-ghost:hover{background:rgba(255,255,255,.6)}' +
  '.am-contact{position:relative}' +
  '.am-menu{position:absolute;bottom:calc(100% + 10px);left:0;min-width:220px;display:flex;flex-direction:column;gap:2px;padding:6px;text-align:left;background:rgba(255,255,255,.97);border:1px solid rgba(0,0,0,.08);border-radius:16px;box-shadow:0 16px 40px rgba(0,0,0,.16);opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .16s,transform .16s,visibility .16s;z-index:2}' +
  '.am-menu.open{opacity:1;visibility:visible;transform:none}' +
  '.am-item{font:500 13px "Poppins",sans-serif;color:rgba(12,11,10,.85);background:none;border:0;border-radius:10px;padding:10px 12px;cursor:pointer;text-decoration:none;text-align:left;display:flex;flex-direction:column;gap:2px}' +
  '.am-item:hover{background:rgba(12,11,10,.06)}' +
  '.am-hint{font-size:11px;font-weight:400;color:rgba(12,11,10,.5)}' +
  '.am-item.copied .am-hint::after{content:" — copied";color:#B8865A}' +
  '.am-principles{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:40px;text-align:left}' +
  '.am-principle{background:#F5F3EF;border:1px solid #D3CEC5;border-radius:16px;padding:20px}' +
  '.am-principle h3{margin:0 0 6px;font-family:"Fraunces",serif;font-weight:600;font-size:18px;line-height:1.2;color:#1E1E1E}' +
  '.am-principle p{margin:0;font-size:13.5px;line-height:1.6;color:#5A544C}' +
  'html.am-lock,html.am-lock body{overflow:hidden}' +
  '@media (max-width:768px){.am-overlay{padding:12px;align-items:flex-end}.am-panel{max-height:calc(100vh - 24px);padding:52px 22px 28px;border-radius:24px}.am-photo{width:124px}.am-title{font-size:42px}.am-lede{font-size:19px}.am-principles{grid-template-columns:1fr;margin-top:28px}}' +
  '@media (prefers-reduced-motion:reduce){.am-overlay,.am-panel{transition:none}}';

  var html = '' +
  '<div class="am-panel" role="dialog" aria-modal="true" aria-labelledby="amTitle" tabindex="-1">' +
    '<button class="am-close" type="button" aria-label="Close">×</button>' +
    '<div class="am-photo"><img src="images and videos/Me.jpg" alt="Adi Mizrahi" loading="lazy"></div>' +
    '<h2 class="am-title" id="amTitle">Hey, I’m Adi</h2>' +
    '<p class="am-lede">I design B2C, B2B and SaaS products, mostly in ad-tech, using research and data to find what actually moves people.</p>' +
    '<p class="am-body">I started in Industrial &amp; Product Design, with a long-running curiosity about why people decide what they decide. UX is where the two meet, so how people think and behave shapes every flow from day one. Today I own the full cycle, from research and A/B tests to prototypes and polished UI, working with product and engineering to balance user needs, business goals and tech limits, at pace.</p>' +
    '<div class="am-actions">' +
      '<div class="am-contact">' +
        '<button class="am-btn am-btn-primary" type="button" aria-haspopup="true" aria-expanded="false" data-am-contact>Let’s talk</button>' +
        '<div class="am-menu" role="menu" aria-hidden="true">' +
          '<a class="am-item" href="https://www.linkedin.com/in/adi-mizrahi/" target="_blank" rel="noopener" role="menuitem">LinkedIn</a>' +
          '<button class="am-item" type="button" role="menuitem" data-copy="adimizrahi66@gmail.com">Email<span class="am-hint">adimizrahi66@gmail.com</span></button>' +
          '<a class="am-item" href="https://wa.me/972544304626" target="_blank" rel="noopener" role="menuitem" aria-label="Phone: message +972 54-430-4626 on WhatsApp">Phone<span class="am-hint">' + WA + '+972 54-430-4626</span></a>' +
        '</div>' +
      '</div>' +
      '<button class="am-btn am-btn-ghost" type="button" data-am-work>View my work</button>' +
    '</div>' +
  '</div>';

  function init() {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.className = 'am-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    var panel = overlay.querySelector('.am-panel');
    var menuBtn = overlay.querySelector('[data-am-contact]');
    var menu = overlay.querySelector('.am-menu');
    var lastFocus = null;

    function closeMenu() { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); menuBtn.setAttribute('aria-expanded', 'false'); }

    function open() {
      lastFocus = document.activeElement;
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('am-lock');
      panel.scrollTop = 0;
      setTimeout(function () { panel.focus({ preventScroll: true }); }, 30);
      try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: 'about-open', title: 'About modal opened', event: true }); } catch (e) {}
    }
    function close() {
      closeMenu();
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('am-lock');
      if (location.hash === '#about') history.replaceState(null, '', location.pathname + location.search);
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }

    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href="about.html"], a[href="#about"]');
      if (!a) return;
      e.preventDefault();
      open();
    });

    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('.am-close').addEventListener('click', close);
    overlay.querySelector('[data-am-work]').addEventListener('click', function () {
      close();
      var work = document.getElementById('work');
      if (work) work.scrollIntoView({ behavior: 'smooth' });
    });

    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = menu.classList.toggle('open');
      menu.setAttribute('aria-hidden', String(!isOpen));
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    panel.addEventListener('click', function (e) { if (!menu.contains(e.target) && e.target !== menuBtn) closeMenu(); });

    menu.querySelectorAll('[data-copy]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        var val = el.getAttribute('data-copy');
        var done = function () { el.classList.add('copied'); setTimeout(function () { el.classList.remove('copied'); }, 1400); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(val).then(done, fallback); else fallback();
        function fallback() { var t = document.createElement('textarea'); t.value = val; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (err) {} document.body.removeChild(t); done(); }
      });
    });

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') { menu.classList.contains('open') ? closeMenu() : close(); return; }
      if (e.key === 'Tab') {
        var f = panel.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
        f = Array.prototype.filter.call(f, function (x) { return x.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    if (location.hash === '#about') open();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
