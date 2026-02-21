// Navbar scroll behavior
(function() {
  var navbar = document.getElementById('navbar');
  var lastScroll = 0;
  window.addEventListener('scroll', function() {
    var scrollY = window.pageYOffset;
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile toggle
  var toggle = document.getElementById('navToggle');
  var cta = document.getElementById('navCta');
  if (toggle && cta) {
    toggle.addEventListener('click', function() {
      var open = cta.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// IntersectionObserver for scroll animations
(function() {
  var selectors = '.anim, .anim-left, .anim-right, .anim-scale';
  var elements = document.querySelectorAll(selectors);
  if (!elements.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function(el) { observer.observe(el); });
})();
