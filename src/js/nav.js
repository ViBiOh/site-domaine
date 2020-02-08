NodeList.prototype.__proto__ = Array.prototype;

var ANCHOR_HREF_REGEX = /.*#(.*?)$/gi;

var stickyNavClass = 'sticky-nav';
var linkActiveClass = 'nav__link--active';

var nav = document.querySelector('.nav');
var body = document.querySelector('body');
var content = document.querySelector('.content');
var firstSection = document.querySelector('section');
var links = document.querySelectorAll('.nav__link');

var linksSections = links.map(function(link) {
  var id = '';

  link.href.replace(ANCHOR_HREF_REGEX, function(all, anchorName) {
    id = anchorName;
  });

  return {
    link: link,
    element: document.getElementById(id)
  };
});

if (firstSection) {
  var firstSectionMarginTop = Number(
    window
      .getComputedStyle(firstSection)
      .getPropertyValue('margin-top')
      .replace('px', '')
  );
}

if (nav) {
  var navHeight = nav.offsetHeight;
}

if (body && nav && firstSection) {
  function setBodyMarginTopToNavHeight() {
    body.style.marginTop = navHeight + firstSectionMarginTop + 'px';
  }
}

if (nav) {
  /**
   * Update nav height.
   */
  function updateNavHeight() {
    navHeight = nav.offsetHeight;

    if (body.classList.contains(stickyNavClass)) {
      setBodyMarginTopToNavHeight();
    }
  }

  window.addEventListener('resize', updateNavHeight);
}

function sectionOffset(e) {
  var rect = e.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

if (body && nav) {
  /**
   * Update sticky nav state of the body.
   */
  function updateStickyState() {
    var bodyHasStickyClass = body.classList.contains(stickyNavClass);

    if (window.scrollY > navHeight) {
      if (!bodyHasStickyClass) {
        body.classList.add(stickyNavClass);
        setBodyMarginTopToNavHeight();
      }

      var visiblesSections = linksSections.filter(function(linkSection) {
        return !(sectionOffset(linkSection.element).top >= window.scrollY);
      });

      if (visiblesSections.length) {
        setActiveNavLink(visiblesSections[visiblesSections.length - 1].link);
      } else {
        setActiveNavLink(links[0]);
      }
    } else if (bodyHasStickyClass) {
      body.classList.remove(stickyNavClass);
      body.style.marginTop = 0;
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
