const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;
let playSlider;

// Function to add "active" class to the current slide and icon
const showSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIcons.forEach((slideIcon) => slideIcon.classList.remove("active"));

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
};

// Next button event listener
nextBtn.addEventListener("click", () => {
  slideNumber = (slideNumber + 1) % numberOfSlides;
  showSlide();
});

// Previous button event listener
prevBtn.addEventListener("click", () => {
  slideNumber = (slideNumber - 1 + numberOfSlides) % numberOfSlides;
  showSlide();
});

// Autoplay function
const repeater = () => {
  playSlider = setInterval(() => {
    slideNumber = (slideNumber + 1) % numberOfSlides;
    showSlide();
  }, 4000);
};

// Initial autoplay
repeater();

// Stop autoplay on mouseover
let debounceTimer;
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
  clearTimeout(debounceTimer);
});

// Restart autoplay after mouseout
slider.addEventListener("mouseout", () => {
  debounceTimer = setTimeout(repeater, 500); // Debounce for smoother transitions
});