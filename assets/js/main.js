/* =========================================================================
   Nexial Partners — comportamento do site
   Alternância PT/EN, menu mobile, header fixo e animação de entrada.
   ========================================================================= */

(function () {
  'use strict';

  var EN = window.NEXIAL_EN || {};
  var STORAGE_KEY = 'nexial-lang';

  /* ===================================================== idioma ========= */

  /* Guarda o conteúdo original em português na primeira troca, para que
     voltar ao PT seja apenas restaurar o HTML — sem duplicar texto. */
  var originalHTML = new Map();
  var originalAttr = new Map();

  function translateNodes(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!originalHTML.has(el)) originalHTML.set(el, el.innerHTML);
      var en = EN[key];
      el.innerHTML = (lang === 'en' && en != null) ? en : originalHTML.get(el);
    });
  }

  function translateAttributes(lang) {
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      /* formato: "content:meta.description" ou "aria-label:a11y.nav;title:x.y" */
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;

        var attr = parts[0].trim();
        var key = parts[1].trim();
        var cacheKey = el.dataset.i18nUid || (el.dataset.i18nUid = String(originalAttr.size));
        var slot = cacheKey + '|' + attr;

        if (!originalAttr.has(slot)) originalAttr.set(slot, el.getAttribute(attr) || '');

        var en = EN[key];
        el.setAttribute(attr, (lang === 'en' && en != null) ? en : originalAttr.get(slot));
      });
    });
  }

  function setLanguage(lang, persist) {
    translateNodes(lang);
    translateAttributes(lang);

    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-BR';

    var ogLocale = document.getElementById('og-locale');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : 'pt_BR');

    document.querySelectorAll('.lang button[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
    }
  }

  function initialLanguage() {
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { stored = null; }
    if (stored === 'pt' || stored === 'en') return stored;

    var nav = (navigator.language || 'pt').toLowerCase();
    return nav.indexOf('pt') === 0 ? 'pt' : 'en';
  }

  document.querySelectorAll('.lang button[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'), true);
    });
  });

  setLanguage(initialLanguage(), false);

  /* ===================================================== header ========= */

  var header = document.querySelector('.site-header');

  function onScroll() {
    if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ================================================ menu mobile ========= */

  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  /* ============================================ animação de entrada ===== */

  var reveals = document.querySelectorAll('.reveal');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { observer.observe(el); });

    /* Rede de segurança: em contextos onde o observer não é entregue
       (aba em segundo plano, página não compositada), revela o que já está
       na janela para que o topo do site nunca fique em branco. */
    var revealInView = function () {
      reveals.forEach(function (el) {
        if (el.classList.contains('is-visible')) return;
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    };
    window.addEventListener('load', revealInView);
    setTimeout(revealInView, 1200);
  }

  /* ======================================================= rodapé ======= */

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
