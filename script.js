const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const modelSlot = document.querySelector('[data-3d-slot]');
const modelTrigger = document.querySelector('[data-model-trigger]');
const modelStatus = document.querySelector('[data-model-status]');
const themeWipe = document.querySelector('.theme-wipe');
let scrollPosition = 0;

themeToggle?.addEventListener('click', (event) => {
  event.preventDefault();
  if (themeWipe?.classList.contains('is-active')) return;
  const isDim = root.dataset.theme === 'dim';
  scrollPosition = window.scrollY;
  if (themeWipe) {
    themeWipe.dataset.nextTheme = isDim ? '' : 'dim';
    themeWipe.classList.remove('is-active');
    requestAnimationFrame(() => themeWipe.classList.add('is-active'));
  }
});

themeWipe?.addEventListener('animationend', () => {
  const nextTheme = themeWipe.dataset.nextTheme || '';
  root.dataset.theme = nextTheme;
  window.scrollTo(0, scrollPosition);
  const isDim = nextTheme === 'dim';
  themeToggle.textContent = isDim ? '☾' : '☀';
  themeToggle.setAttribute('aria-label', isDim ? 'Switch to light mode' : 'Switch to dark mode');
  themeWipe.classList.remove('is-active');
});

let modelReady = false;
const wakeModelSlot = () => {
  if (modelReady) return;
  modelReady = true;
  modelStatus.textContent = '3D slot ready · add your model URL here';
  modelSlot.classList.add('is-ready');
};

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    wakeModelSlot();
    observer.disconnect();
  }
}, { rootMargin: '160px' });

if (modelSlot) observer.observe(modelSlot);
modelTrigger?.addEventListener('click', wakeModelSlot);