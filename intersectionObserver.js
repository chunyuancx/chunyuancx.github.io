const options = {
  root: null,
  threshold: 0.15,
  rootMargin: '-200px',
};

//lunarnauts
const lunarnauts = document.querySelector('#lunarnauts-card');
const observer1 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle('games-grid-item-load-animation1');
    observer1.unobserve(entry.target);
  });
}, options);
observer1.observe(lunarnauts);

//afterlife
const afterlife = document.querySelector('#afterlife-card');
const observer2 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle('games-grid-item-load-animation2');
    observer2.unobserve(entry.target);
  });
}, options);
observer2.observe(afterlife);

//afterlife
const timelesstale = document.querySelector('#timelesstale-card');
const observer3 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle('games-grid-item-load-animation3');
    observer3.unobserve(entry.target);
  });
}, options);
observer3.observe(timelesstale);

//afterlife
const growinc = document.querySelector('#growinc-card');
const observer4 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle('games-grid-item-load-animation4');
    observer4.unobserve(entry.target);
  });
}, options);
observer4.observe(growinc);
