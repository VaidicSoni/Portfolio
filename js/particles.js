// particles.js — Injects and animates background particles
(function() {
  const c = document.getElementById('particles');
  if (!c) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random() * 2.5 + 1;
    p.style.cssText = `
      width: ${s}px; 
      height: ${s}px; 
      left: ${Math.random() * 100}%; 
      bottom: ${Math.random() * -20}%; 
      animation-duration: ${Math.random() * 18 + 10}s; 
      animation-delay: ${Math.random() * 12}s; 
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    c.appendChild(p);
  }
})();