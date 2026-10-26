(function () {
  'use strict';
  var root = document.documentElement;
  var btn = document.querySelector('.hamburger');
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.getElementById('mob-overlay');
  var closeBtn = document.querySelector('.drawer-close');
  function openMenu() {
    if (!drawer) return;
    drawer.removeAttribute('hidden');
    drawer.getBoundingClientRect();
    drawer.classList.add('open');
    overlay.classList.add('visible');
    btn.setAttribute('aria-expanded', 'true');
    root.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }
  function closeMenu() {
    if (!drawer) return;
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    btn.setAttribute('aria-expanded', 'false');
    root.style.overflow = '';
    setTimeout(function () { if (!drawer.classList.contains('open')) drawer.setAttribute('hidden', ''); }, 320);
    btn.focus();
  }
  if (btn) btn.addEventListener('click', function () {
    if (drawer.classList.contains('open')) closeMenu(); else openMenu();
  });
  if (overlay) overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && drawer && drawer.classList.contains('open')) closeMenu();
  });
  var qs = document.querySelectorAll('.faq-q');
  Array.prototype.forEach.call(qs, function (q) {
    q.addEventListener('click', function () {
      var item = q.parentNode;
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
