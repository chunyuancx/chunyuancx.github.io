var iframes = document.querySelectorAll('iframe');

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
  iframes.forEach((iframe) => {
    iframe.contentWindow.postMessage(
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
  iframes.forEach((iframe) => {
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
  });
};

//timelesstale
var timelesstaleModal = document.getElementById('timelesstale-trailer-modal');
var timelesstaleWatchTrailer = document.getElementById('timelesstale-cta');
var timelesstaleCloseButton = document.getElementsByClassName(
  'trailer-modal-close'
)[2];

timelesstaleWatchTrailer.onclick = function () {
  timelesstaleModal.style.display = 'block';
};

timelesstaleCloseButton.onclick = function () {
  timelesstaleModal.style.display = 'none';
  iframes.forEach((iframe) => {
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
  });
};

//Grow Inc
var growIncModal = document.getElementById('growinc-trailer-modal');
var growIncWatchTrailer = document.getElementById('growinc-cta');
var growIncCloseButton = document.getElementsByClassName(
  'trailer-modal-close'
)[3];

growIncWatchTrailer.onclick = function () {
  growIncModal.style.display = 'block';
};

growIncCloseButton.onclick = function () {
  growIncModal.style.display = 'none';
  iframes.forEach((iframe) => {
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
  });
};

// global
window.onclick = function (event) {
  if (
    event.target == afterlifeModal ||
    event.target == lunarnautsModal ||
    event.target == timelesstaleModal ||
    event.target == growIncModal
  ) {
    afterlifeModal.style.display = 'none';
    lunarnautsModal.style.display = 'none';
    timelesstaleModal.style.display = 'none';
    growIncModal.style.display = 'none';

    iframes.forEach((iframe) => {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        '*'
      );
    });
  }
};
