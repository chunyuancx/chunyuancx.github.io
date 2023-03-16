(function () {
  // Add event listener
  document.addEventListener('mousemove', parallax);
  const pfpCroppedImage = document.querySelector('#pfp-cropped-image');
  const pfpCroppedShadow = document.querySelector('#pfp-cropped-shadow');
  const introBanner = document.querySelector('#introduction-banner');
  const witch = document.querySelector('#witch-idle');
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth;
    let _h = window.innerHeight;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    //pfp
    let _pfpImageX = `${((_mouseX - _w / 2) / _w) * -60}%`;
    let _pfpImageY = `${((_mouseY - _h / 2) / _h) * -60}%`;
    pfpCroppedImage.style.backgroundPositionX = _pfpImageX;
    pfpCroppedImage.style.backgroundPositionY = _pfpImageY;
    let _pfpShadowX = `${((_mouseX - _w / 2) / _w) * -90}%`;
    let _pfpShadowY = `${((_mouseY - _h / 2) / _h) * -90}%`;
    pfpCroppedShadow.style.backgroundPositionX = _pfpShadowX;
    pfpCroppedShadow.style.backgroundPositionY = _pfpShadowY;

    //intro-banner
    let _introBannerX = `${((_mouseX - _w / 2) / _w) * -10}%`;
    let _introBannerY = `${((_mouseY - _h / 2) / _h) * -10}%`;
    introBanner.style.backgroundPositionX = _introBannerX;
    introBanner.style.backgroundPositionY = _introBannerY;

    //Witch
    let _witchX = `${((_mouseX - _w / 2) / _w) * -35}%`;
    let _witchY = `${((_mouseY - _h / 2) / _h) * -35}%`;
    witch.style.backgroundPositionX = _witchX;
    witch.style.backgroundPositionY = _witchY;
  }
})();
