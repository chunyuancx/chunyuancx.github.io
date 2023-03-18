window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('nav').style.background = '#0c0c0c';
  } else {
    document.querySelector('nav').style.background = 'none';
  }
}
