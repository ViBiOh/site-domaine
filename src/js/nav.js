NodeList.prototype.__proto__ = Array.prototype;

var linkActiveClass = 'nav__link--active';

var nav = document.querySelector('.nav');
if (nav) {
  var navHeight = nav.offsetHeight;

  window.addEventListener('resize', function() {
    navHeight = nav.offsetHeight;
  });
}

function addActiveModifier(el) {
  var active = document.querySelector('.' + linkActiveClass);
  if (active) {
    active.classList.remove(linkActiveClass);
  }

  el.classList.add(linkActiveClass);
}

var links = document.querySelectorAll('.nav__link');
if (links) {
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      addActiveModifier(link);
    });
  });
}

var currentHash = document.location.hash;
if (currentHash) {
  addActiveModifier(document.querySelector('.nav__link[href*="' + currentHash + '"]'));
} else {
  addActiveModifier(links[0]);
}
