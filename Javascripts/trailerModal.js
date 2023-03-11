var lunarnautsModal = document.getElementById('lunarnauts-trailer-Modal');
var lunarnautsWatchTrailer = document.getElementById('lunarnauts-cta');
var closeButton = document.getElementsByClassName('trailer-modal-close')[0];
var iframe = document.querySelectorAll('iframe');

lunarnautsWatchTrailer.onclick = function () {
  lunarnautsModal.style.display = 'block';
};

closeButton.onclick = function () {
  lunarnautsModal.style.display = 'none';
  $('iframe').each(function () {
    this.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
  });
};

window.onclick = function (event) {
  if (event.target == lunarnautsModal) {
    lunarnautsModal.style.display = 'none';
    $('iframe').each(function () {
      this.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        '*'
      );
    });
  }
};
