const slider = document.querySelector('.content-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Mouse basılı değilse kaydırmayı yapma
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Kaydırma hızı
  slider.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});