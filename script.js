const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  // Without JavaScript the navigation stays visible.
  menuToggle.hidden = false;
  navMenu.dataset.collapsible = 'true';
  const setOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    navMenu.classList.toggle('is-open', open);
    menuToggle.querySelector('span').textContent = open ? '−' : '+';
  };
  menuToggle.addEventListener('click', () => {
    setOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      menuToggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav')) setOpen(false);
  });
  window.matchMedia('(max-width: 760px)').addEventListener('change', () => setOpen(false));
}
