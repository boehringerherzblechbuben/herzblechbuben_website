/* Gemeinsames Skript für alle Seiten.
   Bewusst schlank gehalten: Mobilmenü, Zurück-nach-oben-Button,
   bot-sichere E-Mail-Adressen.
   Kein Framework, keine Abhängigkeiten. */
(function () {
  'use strict';

  /* --- Mobilmenü --- */
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.mobile-nav');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* --- Zurück nach oben --- */
  var top = document.querySelector('.scroll-top');
  if (top) {
    var update = function () {
      top.classList.toggle('is-visible', window.scrollY > 300);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    top.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- Bot-sichere E-Mail-Adressen ---
     Die Adresse steht nie zusammenhängend im Quelltext, sondern wird erst
     hier aus data-benutzer und data-domain zusammengesetzt.
     Mit data-anzeigen="ja" wird sie zusätzlich als Linktext eingesetzt. */
  var mailLinks = document.querySelectorAll('.js-mail');
  Array.prototype.forEach.call(mailLinks, function (el) {
    var benutzer = el.getAttribute('data-benutzer');
    var domain = el.getAttribute('data-domain');
    if (!benutzer || !domain) { return; }

    var adresse = benutzer + String.fromCharCode(64) + domain;
    el.setAttribute('href', 'mailto:' + adresse);
    if (el.getAttribute('data-anzeigen') === 'ja') {
      el.textContent = adresse;
    }
  });
})();
