// Click-to-load video embeds (progressive enhancement; the link works without JS).
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a.video[data-embed]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  var f = document.createElement('iframe');
  f.src = a.dataset.embed;
  f.title = a.dataset.title || 'Video';
  f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen';
  f.allowFullscreen = true;
  f.referrerPolicy = 'strict-origin-when-cross-origin';
  a.replaceWith(f);
  f.parentNode.classList.add('video-live');
  f.focus();
});

// Home hero: switch between the green and light versions (remembered per browser).
(function () {
  var hero = document.getElementById('hero'), btn = document.getElementById('hero-toggle');
  if (!hero || !btn) return;
  function sync() {
    var light = hero.getAttribute('data-theme') === 'light';
    btn.setAttribute('aria-pressed', light);
    btn.textContent = light ? 'Green hero' : 'Light hero';
  }
  btn.hidden = false;
  sync();
  btn.addEventListener('click', function () {
    var light = hero.getAttribute('data-theme') !== 'light';
    if (light) hero.setAttribute('data-theme', 'light'); else hero.removeAttribute('data-theme');
    try { localStorage.setItem('at-hero', light ? 'light' : 'green'); } catch (e) {}
    sync();
  });
})();
