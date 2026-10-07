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

// Preview the green hero (kept for a future dark mode): /?hero=green
(function () {
  var hero = document.getElementById('hero');
  if (hero && /[?&]hero=green/.test(location.search)) hero.setAttribute('data-theme', 'green');
})();
