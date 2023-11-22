document.addEventListener("astro:page-load", () => {
  //btns
  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");

  const imageContainer = document.querySelector(".slider__image-container");
  const headerContainer = document.querySelector(".slider__header-wrap");

  const slides = document.querySelectorAll(".slider__image-wrap");
  const headers = document.querySelectorAll(".slider__header");

  let imageWidth = slides[0].offsetWidth;
  let headerWidth = headers[0].offsetWidth;

  // Estado inicial
  let currentSlideIndex = 0;
  slides[currentSlideIndex].classList.add("slider__image-wrap--active");
  headers[currentSlideIndex].classList.add("slider__header--active");

  btnNext.addEventListener("click", () => {
    if (currentSlideIndex < slides.length - 1) {
      // actualizar proyecto visualizandose
      currentSlideIndex++;

      imageContainer.scrollLeft += imageWidth;
      headerContainer.scrollLeft += headerWidth;
      // regresar al estado inicial - animacion
      slides.forEach((slide) => {
        slide.classList.remove("slider__image-wrap--active");
      });
      // mostrar elemento con animacion
      slides[currentSlideIndex].classList.add("slider__image-wrap--active");

      // regresar al estado inicial - animacion
      headers.forEach((header) => {
        header.classList.remove("slider__header--active");
      });
      //  mostrar elemento con animacion
      headers[currentSlideIndex].classList.add("slider__header--active");
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      // actualizar proyecto visualizandose
      currentSlideIndex--;

      imageContainer.scrollLeft -= imageWidth;
      headerContainer.scrollLeft -= headerWidth;

      // regresar al estado inicial - animacion
      slides.forEach((slide) => {
        slide.classList.remove("slider__image-wrap--active");
      });
      //  mostrar elemento con animacion
      slides[currentSlideIndex].classList.add("slider__image-wrap--active");

      // regresar al estado inicial - animacion
      headers.forEach((header) => {
        header.classList.remove("slider__header--active");
      });
      //  mostrar elemento con animacion
      headers[currentSlideIndex].classList.add("slider__header--active");
    }
  });
});
