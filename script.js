const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach((el) => observer.observe(el));
}

const popup = document.getElementById('booking-popup');
const openPopupButtons = document.querySelectorAll('[data-open-booking]');
const closePopupButtons = document.querySelectorAll('[data-close-popup]');

openPopupButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (popup) popup.classList.add('open');
  });
});

closePopupButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.popup')?.classList.remove('open');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    event.target.classList.remove('open');
  }
  if (event.target.classList.contains('lightbox')) {
    event.target.classList.remove('open');
  }
});

const reservationForms = document.querySelectorAll('[data-reservation-form]');
reservationForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const confirmation = document.getElementById('confirmation-popup');
    if (confirmation) confirmation.classList.add('open');
    form.reset();
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const galleryImages = document.querySelectorAll('[data-lightbox-image]');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    if (lightbox && lightboxImage) {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add('open');
    }
  });
});

const animatedTagline = document.getElementById('animated-tagline');
if (animatedTagline) {
  const fullText = animatedTagline.textContent;
  animatedTagline.textContent = '';
  [...fullText].forEach((char, index) => {
    setTimeout(() => {
      animatedTagline.textContent += char;
    }, index * 22);
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


const mapElement = document.getElementById('interactive-map');
if (mapElement && typeof L !== 'undefined') {
  const comoCoords = [45.991, 9.257];
  const map = L.map('interactive-map', { scrollWheelZoom: true }).setView(comoCoords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker(comoCoords)
    .addTo(map)
    .bindPopup('<div class="map-popup"><h4>Villa Cristallo</h4><p>Ristorante Gourmet sul Lago di Como</p></div>')
    .openPopup();
}
