var iframe = document.querySelectorAll('iframe');

// lunarnauts
var lunarnautsModal = document.getElementById('lunarnauts-trailer-modal');
var lunarnautsWatchTrailer = document.getElementById('lunarnauts-cta');
var lunarnautsCloseButton = document.getElementsByClassName(
  'trailer-modal-close'
)[0];

lunarnautsWatchTrailer.onclick = function () {
  lunarnautsModal.style.display = 'block';
};

lunarnautsCloseButton.onclick = function () {
  lunarnautsModal.style.display = 'none';
  $('iframe').each(function () {
    this.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
  });
};

// afterlife
var afterlifeModal = document.getElementById('afterlife-trailer-modal');
var afterlifeWatchTrailer = document.getElementById('afterlife-cta');
var afterlifeCloseButton = document.getElementsByClassName(
  'trailer-modal-close'
)[1];

afterlifeWatchTrailer.onclick = function () {
  afterlifeModal.style.display = 'block';
};

afterlifeCloseButton.onclick = function () {
  afterlifeModal.style.display = 'none';
  $('iframe').each(function () {
    this.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
  });
};

// global
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
