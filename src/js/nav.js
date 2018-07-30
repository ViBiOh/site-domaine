var linkActiveClass = 'nav__link--active';
var links = document.querySelectorAll('.nav__link');

var currentHash = document.location.hash;
var activeHash = false;

function addActiveModifier(el) {
  el.classList.add(linkActiveClass);
}

function addActiveOnClick(link) {
  link.addEventListener('click', function() {
    document.querySelector('.' + linkActiveClass).classList.remove(linkActiveClass);
    addActiveModifier(link);
  });
}

links.forEach(function(link) {
  if (currentHash && !activeHash && link.href.endsWith(currentHash)) {
    addActiveModifier(link);
    activeHash = true;
  }

  addActiveOnClick(link);
});

if (!activeHash) {
  addActiveModifier(links[0]);
}
