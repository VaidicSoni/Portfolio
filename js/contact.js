// contact.js — Turns the contact form into a pre-filled email (no backend needed)
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const message = form.elements.message.value.trim();
    const subject = encodeURIComponent(`Hello from ${name || 'your portfolio'}`);
    const body = encodeURIComponent(name ? `${message}\n\n— ${name}` : message);
    window.location.href = `mailto:${form.dataset.to}?subject=${subject}&body=${body}`;
  });
}
