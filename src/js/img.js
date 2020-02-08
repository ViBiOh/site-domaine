var throbbers = document.querySelectorAll('.throbber');
throbbers.forEach(function(throbber) {
  throbber.style.display = 'inline-block';
});

throbbers.forEach(function(throbber) {
  var img = new Image();
  img.src = throbber.dataset.src;
  img.alt = throbber.dataset.alt;
  img.width = 500;

  document.getElementById('figure-' + throbber.dataset.id).replaceChild(img, throbber);
});
