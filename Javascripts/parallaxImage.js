var rect = $('#introduction')[0].getBoundingClientRect();
var mouse = { x: 0, y: 0, moved: false };

$('body').mousemove(function (e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function () {
  if (mouse.moved) {
    parallaxIt('#pfp-cropped-image', -20); //strenght of movement
    parallaxIt('#pfp-cropped-shadow', -25); //strenght of movement
    parallaxIt('#introduction-banner', -5); //strenght of movement
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: ((mouse.x - rect.width / 2) / rect.width) * movement,
    y: ((mouse.y - rect.height / 2) / rect.height) * movement,
  });
}

$(window).on('resize scroll', function () {
  rect = $('#introduction')[0].getBoundingClientRect();
});
