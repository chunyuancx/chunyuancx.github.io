const html = document.querySelector('html');
const loadingScreen = document.querySelector('#loading-screen');

loadingScreen.addEventListener('animationend', function () {
  setTimeout(function () {
    html.style.overflowY = 'visible';
  }, 1000);
});
