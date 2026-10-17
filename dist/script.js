const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('is-active', item === button));
    projects.forEach((project) => {
      const categories = project.dataset.category.split(' ');
      project.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });
});
