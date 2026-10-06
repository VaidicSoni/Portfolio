// nav.js — Scroll state, mobile menu, and active-section highlighting
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
  mobileBtn.classList.toggle('active', open);
  navLinks.classList.toggle('active', open);
  nav.classList.toggle('menu-open', open);
  mobileBtn.setAttribute('aria-expanded', String(open));
}

if (mobileBtn && navLinks) {
  mobileBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
}

// Highlight the link for the section currently in view
const linkFor = {};
navLinks.querySelectorAll('a').forEach(a => { linkFor[a.getAttribute('href').slice(1)] = a; });

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    Object.values(linkFor).forEach(a => a.classList.remove('active'));
    linkFor[e.target.id]?.classList.add('active');
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('section[id]').forEach(s => sectionObs.observe(s));
