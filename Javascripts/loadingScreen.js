const html = document.querySelector('html');
const loadingScreen = document.querySelector('#loading-screen');

loadingScreen.addEventListener('animationstart', function () {
  html.style.overflowY = 'hidden';
});

loadingScreen.addEventListener('animationend', function () {
  setTimeout(function () {
    html.style.overflowY = 'visible';
  }, 1000);
});
