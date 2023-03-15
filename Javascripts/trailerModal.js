var closeButton = document.getElementsByClassName('trailer-modal-close');
console.log(closeButton);
var iframe = document.querySelectorAll('iframe');

// lunarnauts
var lunarnautsModal = document.getElementById('lunarnauts-trailer-modal');
var lunarnautsWatchTrailer = document.getElementById('lunarnauts-cta');

lunarnautsWatchTrailer.onclick = function () {
  lunarnautsModal.style.display = 'block';
};

// afterlife
var afterlifeModal = document.getElementById('afterlife-trailer-modal');
var afterlifeWatchTrailer = document.getElementById('afterlife-cta');

afterlifeWatchTrailer.onclick = function () {
  afterlifeModal.style.display = 'block';
};

// // global
// afterlifeModal.style.display = 'none';
// lunarnautsModal.style.display = 'none';
// $('iframe').each(function () {
//   this.contentWindow.postMessage(
//     '{"event":"command","func":"stopVideo","args":""}',
//     '*'
//   );
// });

window.onclick = function (event) {
  if (event.target == afterlifeModal || event.target == lunarnautsModal) {
    afterlifeModal.style.display = 'none';
    lunarnautsModal.style.display = 'none';

    $('iframe').each(function () {
      this.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        '*'
      );
    });
  }
};
