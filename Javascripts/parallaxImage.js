document.addEventListener('mousemove', function (e) {
  const pfpCroppedImage = document.querySelector('#pfp-cropped-image');
  const pfpCroppedShadow = document.querySelector('#pfp-cropped-shadow');
  const introBanner = document.querySelector('#introduction-banner');
  const witch = document.querySelector('#witch-idle');

  //pfp
  let pfpImageX = (window.innerWidth / 2 - e.clientX) / 30;
  let pfpImageY = (window.innerHeight / 2 - e.clientY) / 30;
  pfpCroppedImage.style.transform = `translate(${pfpImageX}px, ${pfpImageY}px)`;
  let pfpShadowX = (window.innerWidth / 2 - e.clientX) / 20;
  let pfpShadowY = (window.innerHeight / 2 - e.clientY) / 20;
  pfpCroppedShadow.style.transform = `translate(${pfpShadowX}px, ${pfpShadowY}px)`;

  //intro-banner
  let introBannerX = (window.innerWidth / 2 - e.clientX) / 100;
  let introBannerY = (window.innerHeight / 2 - e.clientY) / 100;
  introBanner.style.transform = `translate(${introBannerX}px, ${introBannerY}px)`;

  //Witch
  let witchX = (window.innerWidth / 2 - e.clientX) / -4;
  witch.style.transform = `translate(${witchX}px, 0px)`;
});
