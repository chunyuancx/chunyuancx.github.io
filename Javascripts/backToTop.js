const btn = document.querySelector('#back-to-top-button');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0 });
});
