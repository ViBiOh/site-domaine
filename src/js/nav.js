NodeList.prototype.__proto__ = Array.prototype;

var linkActiveClass = 'nav__link--active';
var links = document.querySelectorAll('.nav__link');

var currentHash = document.location.hash;

function addActiveModifier(el) {
  var active = document.querySelector('.' + linkActiveClass);
  if (active) {
    active.classList.remove(linkActiveClass);
  }

  el.classList.add(linkActiveClass);
}

links.forEach(function(link) {
  link.addEventListener('click', function(e) {
    addActiveModifier(link);
  });
});

if (currentHash) {
  addActiveModifier(document.querySelector('.nav__link[href*="' + currentHash + '"]'));
} else {
  addActiveModifier(links[0]);
}
