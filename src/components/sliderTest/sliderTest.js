//btns
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const imageContainer = document.querySelector(".slider__items-container");
const slides = document.querySelectorAll(".slider__item");
const slideWidth = slides[0].offsetWidth;

let currentSlideIndex = 0;
slides[currentSlideIndex].classList.add("slider__item--active");

btnNext.addEventListener("click", () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    imageContainer.scrollLeft += slideWidth;

    // quitar la clase a todos
    slides.forEach((slide) => {
      slide.classList.remove("slider__item--active");
    });
    // añadir la clase al elemento activo
    slides[currentSlideIndex].classList.add("slider__item--active");
  }
});

btnPrev.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    imageContainer.scrollLeft -= slideWidth;

    // quitar la clase a todos
    slides.forEach((slide) => {
      slide.classList.remove("slider__item--active");
    });
    // añadir la clase al elemento activo
    slides[currentSlideIndex].classList.add("slider__item--active");
  }
});
