const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const profileCard = document.querySelector('.personal-card');
let cardCurrentOffset = 0;
let cardRaf = null;
let cardFollowTimer = null;
let cardLastFrame = null;
let previousScrollY = window.scrollY;
const cardMotion = window.matchMedia('(min-width:1101px) and (min-height:581px) and (prefers-reduced-motion:no-preference)');

const updateProfileCard = (timestamp) => {
  const elapsed = cardLastFrame === null ? 16 : Math.min(timestamp - cardLastFrame, 64);
  cardLastFrame = timestamp;
  cardCurrentOffset *= Math.exp(-elapsed / 240);
  if (Math.abs(cardCurrentOffset) < 0.1) cardCurrentOffset = 0;
  profileCard.style.setProperty('--card-offset', `${cardCurrentOffset}px`);
  cardRaf = cardCurrentOffset ? requestAnimationFrame(updateProfileCard) : null;
  if (cardRaf === null) cardLastFrame = null;
};

const stopCardFollow = () => {
  clearTimeout(cardFollowTimer);
  if (cardRaf !== null) cancelAnimationFrame(cardRaf);
  cardFollowTimer = null;
  cardRaf = null;
  cardLastFrame = null;
};
const resetProfileCard = () => {
  stopCardFollow();
  cardCurrentOffset = 0;
  previousScrollY = window.scrollY;
  profileCard?.style.setProperty('--card-offset', '0px');
};
const syncProfileCard = () => {
  const delta = window.scrollY - previousScrollY;
  previousScrollY = window.scrollY;
  if (!profileCard || !cardMotion.matches) {
    resetProfileCard();
    return;
  }
  stopCardFollow();
  // Cancel the viewport scroll so the card holds its document position until following.
  cardCurrentOffset -= delta;
  profileCard.style.setProperty('--card-offset', `${cardCurrentOffset}px`);
  cardFollowTimer = setTimeout(() => {
    cardFollowTimer = null;
    cardRaf = requestAnimationFrame(updateProfileCard);
  }, 300);
};
window.addEventListener('scroll', syncProfileCard, { passive: true });
window.addEventListener('resize', resetProfileCard);
cardMotion.addEventListener('change', resetProfileCard);

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
const reduceTilt = window.matchMedia('(prefers-reduced-motion:reduce)');
document.querySelectorAll('.project-card, .feature-card').forEach((card) => {
  let bounds = null;
  let frame = null;
  let lastTime = null;
  let active = false;
  let pointerX = 0;
  let pointerY = 0;
  let tiltX = 0;
  let tiltY = 0;

  const draw = (time) => {
    frame = null;
    const elapsed = lastTime === null ? 16 : Math.min(time - lastTime, 64);
    lastTime = time;
    let targetX = 0;
    let targetY = 0;
    if (active) {
      // Measure only on entry or layout changes, never on each pointer event.
      if (!bounds) bounds = card.getBoundingClientRect();
      const x = pointerX - bounds.left;
      const y = pointerY - bounds.top;
      card.style.setProperty('--torch-x', `${x}px`);
      card.style.setProperty('--torch-y', `${y}px`);
      if (!reduceTilt.matches) {
        targetX = -Math.max(-1, Math.min(1, y / bounds.height * 2 - 1)) * 5;
        targetY = Math.max(-1, Math.min(1, x / bounds.width * 2 - 1)) * 5;
      }
    }
    const ease = 1 - Math.exp(-elapsed / (active ? 55 : 100));
    tiltX += (targetX - tiltX) * ease;
    tiltY += (targetY - tiltY) * ease;
    const settled = Math.abs(targetX - tiltX) < 0.008 && Math.abs(targetY - tiltY) < 0.008;
    if (settled) { tiltX = targetX; tiltY = targetY; }
    card.style.setProperty('--tilt-x', `${tiltX.toFixed(3)}deg`);
    card.style.setProperty('--tilt-y', `${tiltY.toFixed(3)}deg`);
    if (!settled) frame = requestAnimationFrame(draw);
    else {
      lastTime = null;
      if (!active) card.classList.remove('is-tilting');
    }
  };
  const schedule = () => { if (frame === null) frame = requestAnimationFrame(draw); };
  const moveTorch = (event) => {
    if (!torchPointer.matches || event.pointerType === 'touch') return;
    if (!active) bounds = null;
    active = true;
    pointerX = event.clientX;
    pointerY = event.clientY;
    card.classList.add('is-lit', 'is-tilting');
    schedule();
  };
  const clearTorch = () => {
    active = false;
    bounds = null;
    card.classList.remove('is-lit');
    if (reduceTilt.matches) { tiltX = 0; tiltY = 0; }
    schedule();
  };
  const invalidateBounds = () => { bounds = null; if (active) schedule(); };
  card.addEventListener('pointerenter', moveTorch);
  card.addEventListener('pointermove', moveTorch);
  card.addEventListener('pointerleave', clearTorch);
  card.addEventListener('pointercancel', clearTorch);
  window.addEventListener('scroll', invalidateBounds, { passive:true });
  window.addEventListener('resize', invalidateBounds);
  reduceTilt.addEventListener('change', clearTorch);
  torchPointer.addEventListener('change', clearTorch);
});

const techSnake = document.querySelector('[data-tech-snake]');
const techPause = document.querySelector('[data-tech-pause]');
techPause?.addEventListener('click', () => {
  const paused = techSnake.classList.toggle('is-paused');
  techPause.setAttribute('aria-pressed', String(paused));
  techPause.setAttribute('aria-label', paused ? 'Resume technology animation' : 'Pause technology animation');
  techPause.textContent = paused ? 'Resume' : 'Pause';
});

const resumeDialog = document.querySelector('#resume-dialog');
const resumeOpen = document.querySelector('[data-resume-open]');
const resumeClose = document.querySelector('[data-resume-close]');
const resumePreview = document.querySelector('[data-resume-preview]');
const resumeError = document.querySelector('[data-resume-error]');
resumePreview?.addEventListener('error', () => {
  resumePreview.hidden = true;
  resumePreview.style.display = 'none';
  if (resumeError) resumeError.hidden = false;
});
resumePreview?.addEventListener('load', () => {
  resumePreview.hidden = false;
  resumePreview.style.removeProperty('display');
  if (resumeError) resumeError.hidden = true;
});
resumeOpen?.addEventListener('click', (event) => {
  if (!resumeDialog?.showModal) return;
  event.preventDefault();
  if (resumePreview && (!resumePreview.hasAttribute('src') || resumePreview.hidden)) resumePreview.src = resumePreview.dataset.src;
  resumeDialog.showModal();
});
resumeClose?.addEventListener('click', () => resumeDialog.close());
resumeDialog?.addEventListener('click', (event) => {
  if (event.target !== resumeDialog) return;
  const bounds = resumeDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) resumeDialog.close();
});
resumeDialog?.addEventListener('close', () => resumeOpen?.focus());
