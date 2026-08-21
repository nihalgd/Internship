// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Curriculum active state
document.querySelectorAll('.curr-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.curr-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// Play buttons (visual only, no real video attached)
document.getElementById('playBtn')?.addEventListener('click', () => {
  alert('Preview video coming soon!');
});
document.getElementById('watchPreview')?.addEventListener('click', () => {
  document.getElementById('videoPanel').scrollIntoView({behavior:'smooth', block:'center'});
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, {threshold:0.12});
revealEls.forEach(el => io.observe(el));

// Header shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(59,31,122,0.08)' : 'none';
});
