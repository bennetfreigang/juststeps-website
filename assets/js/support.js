// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// Active sidebar link on scroll
const sections = document.querySelectorAll('section[id]');
const sideLinks = document.querySelectorAll('.sidebar a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      sideLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.sidebar a[href="#${e.target.id}"]`);
      if (link) {
        link.classList.add('active');
      }
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));
