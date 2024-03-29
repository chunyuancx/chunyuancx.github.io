const cardOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: '-200px',
};

//timelesstale
const timelesstale = document.querySelector('#timelesstale-card');
const observer1 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('games-grid-item-load-animation1');
    setTimeout(function () {
      entry.target.classList.toggle('games-grid-items');
    }, 500);
    observer1.unobserve(entry.target);
  });
}, cardOptions);
observer1.observe(timelesstale);

//afterlife
const afterlife = document.querySelector('#afterlife-card');
const observer2 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('games-grid-item-load-animation2');
    setTimeout(function () {
      entry.target.classList.toggle('games-grid-items');
    }, 1000);
    observer2.unobserve(entry.target);
  });
}, cardOptions);
observer2.observe(afterlife);

//lunarnauts
const lunarnauts = document.querySelector('#lunarnauts-card');
const observer3 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('games-grid-item-load-animation3');
    setTimeout(function () {
      entry.target.classList.toggle('games-grid-items');
    }, 1500);
    observer3.unobserve(entry.target);
  });
}, cardOptions);
observer3.observe(lunarnauts);

//growinc
const growinc = document.querySelector('#growinc-card');
const observer4 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('games-grid-item-load-animation4');
    setTimeout(function () {
      entry.target.classList.toggle('games-grid-items');
    }, 500);
    observer4.unobserve(entry.target);
  });
}, cardOptions);
observer4.observe(growinc);

//illustrations
const illustrationsOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '-50px',
};

const illustrationsObserver = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('slide-in-top');
    illustrationsObserver.unobserve(entry.target);
  });
},
illustrationsOptions);

const illustrations = '.illustrations-grid-item';
document.querySelectorAll(illustrations).forEach((i) => {
  if (i) {
    illustrationsObserver.observe(i);
  }
});

//narrative design
const narrativeOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '-100px',
};

const KindredAdventure = document.querySelector(
  'img[alt="Kindred Adventure Book"]'
);
const observer5 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('appear1');
    observer5.unobserve(entry.target);
  });
}, narrativeOptions);
observer5.observe(KindredAdventure);

const KindredCadet = document.querySelector('img[alt="Kindred Cadet Book"]');
const observer6 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('appear2');
    observer6.unobserve(entry.target);
  });
}, narrativeOptions);
observer6.observe(KindredCadet);

const KindredRule = document.querySelector('img[alt="Kindred Rule Book"]');
const observer7 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('appear3');
    observer7.unobserve(entry.target);
  });
}, narrativeOptions);
observer7.observe(KindredRule);

const KindredUnit = document.querySelector('img[alt="Kindred Unit Catalogue"]');
const observer8 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('appear4');
    observer8.unobserve(entry.target);
  });
}, narrativeOptions);
observer8.observe(KindredUnit);

const JotunEmpire = document.querySelector('img[alt="The-Jotun-Empire"]');
const observer9 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle('appear1');
    observer9.unobserve(entry.target);
  });
}, narrativeOptions);
observer9.observe(JotunEmpire);
