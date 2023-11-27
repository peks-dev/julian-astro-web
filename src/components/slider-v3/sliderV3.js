document.addEventListener("astro:page-load", () => {
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const slides = document.querySelectorAll(".slider__item");

  let currentSlide = 0;
  let intervalId;

  function showSlide() {
    slides.forEach((slide) => {
      slide.classList.remove("slider-active");
    });

    slides[currentSlide].classList.add("slider-active");
    startSliderInterval();
  }
  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      clearInterval(intervalId);
      currentSlide++;
      showSlide();
    } else {
      clearInterval(intervalId);
      currentSlide = 0;
      showSlide();
    }
  }
  function prevSlide() {
    if (currentSlide > 0) {
      clearInterval(intervalId);
      currentSlide--;
      showSlide();
    } else {
      clearInterval(intervalId);
      currentSlide = slides.length - 1;
      showSlide();
    }
  }

  function startSliderInterval() {
    intervalId = setInterval(nextSlide, 4000);
  }

  showSlide();

  nextBtn.addEventListener("click", () => {
    nextSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
  });
});
