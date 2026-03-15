const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(links.classList.contains('open')));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
