NodeList.prototype.__proto__ = Array.prototype;

var stickyNavClass = 'sticky-nav';
var linkActiveClass = 'nav__link--active';

var nav = document.querySelector('.nav');
var body = document.querySelector('body');

if (nav) {
  var navHeight = nav.offsetHeight;

  /**
   * Update nav height.
   */
  function updateNavHeight() {
    navHeight = nav.offsetHeight;
  }

  window.addEventListener('resize', updateNavHeight);
}

if (body && nav) {
  /**
   * Update sticky nav state of the body.
   */
  function updateStickyState() {
    var bodyHasStickyClass = body.classList.contains(stickyNavClass);

    if (window.scrollY > navHeight && !bodyHasStickyClass) {
      body.classList.add(stickyNavClass);
    } else if (bodyHasStickyClass) {
      body.classList.remove(stickyNavClass);
    }
  }

  window.addEventListener('scroll', updateStickyState);
}

/**
 * Set given element to the active nav link.
 * @param {DOMElement} el Wanted active nav link
 */
function setActiveNavLink(el) {
  var active = document.querySelector('.' + linkActiveClass);
  if (active) {
    active.classList.remove(linkActiveClass);
  }

  if (!el.classList.contains(linkActiveClass)) {
    el.classList.add(linkActiveClass);
  }
}

var links = document.querySelectorAll('.nav__link');
if (links) {
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      setActiveNavLink(link);
    });
  });
}

var hashLink = document.querySelector('.nav__link[href*="' + document.location.hash + '"]');
if (hashLink) {
  setActiveNavLink(hashLink);
} else {
  setActiveNavLink(links[0]);
}
