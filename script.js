const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const profileCard = document.querySelector('.personal-card');
let cardTargetOffset = 0;
let cardCurrentOffset = 0;
let cardRaf = null;

const updateProfileCard = () => {
  if (!profileCard) return;
  cardCurrentOffset += (cardTargetOffset - cardCurrentOffset) * 0.12;
  profileCard.style.setProperty('--card-offset', `${cardCurrentOffset}px`);

  if (Math.abs(cardTargetOffset - cardCurrentOffset) > 0.1) {
    cardRaf = requestAnimationFrame(updateProfileCard);
  } else {
    cardRaf = null;
  }
};

const syncProfileCard = () => {
  const canFloat = window.matchMedia('(min-width:1101px) and (min-height:581px) and (prefers-reduced-motion:no-preference)').matches;
  const availableOffset = Math.max(0, (window.innerHeight - (profileCard?.offsetHeight || 0)) / 2 - 24);
  cardTargetOffset = canFloat ? Math.min(window.scrollY * 0.08, availableOffset, 60) : 0;
  if (cardRaf === null) {
    cardRaf = requestAnimationFrame(updateProfileCard);
  }
};

window.addEventListener('scroll', syncProfileCard, { passive: true });
window.addEventListener('resize', syncProfileCard);
syncProfileCard();

const applyTheme = (nextTheme) => {
  root.dataset.theme = nextTheme;
  const label = nextTheme === 'dim' ? 'Switch to light mode' : 'Switch to dark mode';
  themeToggle?.setAttribute('aria-label', label);
  themeToggle?.setAttribute('title', label);
};

let themeTransitionActive = false;
themeToggle?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (themeTransitionActive) return;
  const nextTheme = root.dataset.theme === 'dim' ? '' : 'dim';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (!document.startViewTransition || reducedMotion) {
    applyTheme(nextTheme);
    return;
  }
  themeTransitionActive = true;
  try {
    const transition = document.startViewTransition(() => applyTheme(nextTheme));
    await transition.finished;
  } catch {
    applyTheme(nextTheme);
  } finally {
    themeTransitionActive = false;
  }
});

const torchPointer = window.matchMedia('(hover:hover) and (pointer:fine)');
document.querySelectorAll('.project-card, .feature-card').forEach((card) => {
  const moveTorch = (event) => {
    if (!torchPointer.matches || event.pointerType === 'touch') return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--torch-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--torch-y', `${event.clientY - bounds.top}px`);
    card.classList.add('is-lit');
  };
  const clearTorch = () => {
    card.classList.remove('is-lit');
    card.style.removeProperty('--torch-x');
    card.style.removeProperty('--torch-y');
  };
  card.addEventListener('pointerenter', moveTorch);
  card.addEventListener('pointermove', moveTorch);
  card.addEventListener('pointerleave', clearTorch);
  card.addEventListener('pointercancel', clearTorch);
});
