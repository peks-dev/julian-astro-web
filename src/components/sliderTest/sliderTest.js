document.addEventListener("astro:page-load", () => {
  //btns
  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");

  const imageContainer = document.querySelector(".slider__image-container");
  const headerContainer = document.querySelector(".slider__header-wrap");

  const slides = document.querySelectorAll(".slider__image-wrap");
  const headers = document.querySelectorAll(".slider__header");

  // Estado inicial
  let currentSlideIndex = 0;
  let imageWidth = slides[0].offsetWidth;
  let headerWidth = headers[0].offsetWidth;

  function showSlide() {
    slides.forEach((slide) => {
      slide.classList.remove("slider__image-wrap--active");
    });
    slides[currentSlideIndex].classList.add("slider__image-wrap--active");

    headers.forEach((header) => {
      header.classList.remove("slider__header--active");
    });
    headers[currentSlideIndex].classList.add("slider__header--active");
  }

  const updateWidthValues = () => {
    imageWidth = slides[0].offsetWidth;
    headerWidth = headers[0].offsetWidth;
  };

  window.addEventListener("resize", () => {
    updateWidthValues();
    setTimeout(() => {
      showSlide();
    }, 100); // Ajusta el tiempo según sea necesario
    console.log(imageWidth, headerWidth);
  });

  // al cargar la pagina
  showSlide();

  btnNext.addEventListener("click", () => {
    if (currentSlideIndex < slides.length - 1) {
      // actualizar proyecto visualizandose
      currentSlideIndex++;

      imageContainer.scrollLeft += imageWidth;
      headerContainer.scrollLeft += headerWidth;

      showSlide();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      // actualizar proyecto visualizandose
      currentSlideIndex--;

      imageContainer.scrollLeft -= imageWidth;
      headerContainer.scrollLeft -= headerWidth;

      showSlide();
    }
  });
});
