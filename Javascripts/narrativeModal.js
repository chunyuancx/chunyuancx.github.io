//Kindred
var KindredModal = document.getElementById('kindred-modal');
var KindredButton = document.getElementById('kindred-explore');
var KindredCloseButton = document.getElementsByClassName(
  'explore-modal-close'
)[0];

KindredButton.onclick = function () {
  KindredModal.style.display = 'block';
};

KindredCloseButton.onclick = function () {
  KindredModal.style.display = 'none';
};

//Jotun
var JotunModal = document.getElementById('jotun-modal');
var JotunButton = document.getElementById('jotun-explore');
var JotunCloseButton = document.getElementsByClassName(
  'explore-modal-close'
)[1];

JotunButton.onclick = function () {
  JotunModal.style.display = 'block';
};

JotunCloseButton.onclick = function () {
  JotunModal.style.display = 'none';
};

// global
window.onclick = function (event) {
  if (event.target == KindredModal || event.target == JotunModal) {
    KindredModal.style.display = 'none';
    JotunModal.style.display = 'none';
  }
};
