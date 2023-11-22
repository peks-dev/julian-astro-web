// Ligthbox Interactions

// Obtener todos los elementos slider__item
document.addEventListener("astro:page-load", () => {
  const sliderItems = document.querySelectorAll(".slider__item");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightboxContent");

  // Recorrer cada elemento y agregar el event listener
  sliderItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const sliderItem = e.currentTarget;
      const img = sliderItem.querySelector(".image-wrap > img");
      if (img) {
        lightboxContent.src = img.src;
      }
      lightbox.style.display = "flex";
    });
  });

  // Cerrar el lightbox al hacer clic en el botón de cierre
  const closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
