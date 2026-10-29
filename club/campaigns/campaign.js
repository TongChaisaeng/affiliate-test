// ไฮไลต์ Session ที่กำลังดูอยู่ในแถบเมนู
(function () {
  var links = [].slice.call(document.querySelectorAll('.snav a'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) {
        var on = a.getAttribute('href') === '#' + e.target.id;
        a.classList.toggle('on', on);
        if (on && a.scrollIntoView) a.parentNode.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });
})();
