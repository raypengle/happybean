// script.js
let currentSlide = 0;
const slides = document.querySelectorAll("#announcementSlider img");

function showSlide(n) {
  slides.forEach(slide => slide.style.display = "none");
  slides[n].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 30000); // 30秒切换一次

showSlide(currentSlide);
