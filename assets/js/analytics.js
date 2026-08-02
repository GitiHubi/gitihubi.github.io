(function () {
  var meta = document.querySelector('meta[name="ga-measurement-id"]');
  var id = meta && meta.content;
  if (!id) return;

  window['ga-disable-' + id] = window.doNotTrack === "1" || navigator.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1";
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', id);
})();
