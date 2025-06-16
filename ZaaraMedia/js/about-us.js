document.addEventListener("DOMContentLoaded", function () {

  const slider = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentSlide = 0;

  function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  prevButton.addEventListener("click", function () {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateSliderPosition();
  });

  nextButton.addEventListener("click", function () {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateSliderPosition();
  });

  window.addEventListener("resize", updateSliderPosition);
});

// Navigation toggle
function toggleNav() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('active');
}

// Testimonial Slider
let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('#testimonial .slide');
const testimonialWrapper = document.querySelector('#testimonial .slider-wrapper');

function initTestimonialSlider() {
  testimonialSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
  });
}

function changeTestimonial(direction) {
  currentTestimonial = (currentTestimonial + direction + testimonialSlides.length) % testimonialSlides.length;
  
  testimonialSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentTestimonial) * 100}%)`;
  });
}

// Initialize the slider
initTestimonialSlider();

// Add click events to navigation buttons
document.querySelector('#testimonial .prev').addEventListener('click', () => changeTestimonial(-1));
document.querySelector('#testimonial .next').addEventListener('click', () => changeTestimonial(1));

// Auto slide every 5 seconds
let testimonialInterval = setInterval(() => changeTestimonial(1), 5000);

// Pause auto sliding when hovering over the slider
document.querySelector('#testimonial .slider').addEventListener('mouseenter', () => {
  clearInterval(testimonialInterval);
});

// Resume auto sliding when mouse leaves the slider
document.querySelector('#testimonial .slider').addEventListener('mouseleave', () => {
  testimonialInterval = setInterval(() => changeTestimonial(1), 5000);
});
