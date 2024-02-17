document.addEventListener("astro:page-load", () => {
  function cambiarAparienciaSegunHora() {
    const currentHour = new Date().getHours();

    // Modificar las variables CSS según el rango horario
    if (currentHour >= 19 || currentHour < 6) {
      // Modo oscuro de 19:00 a 6:00
      document.documentElement.style.setProperty("--accent-black", "#e9ecef");
      document.documentElement.style.setProperty("--accent-white", "#27272f");

      const sliderContainer = document.querySelector(".slider"); // header del slider principal
      const sliderWrap = document.querySelector(".slider__wrap"); // slider principal en mobile
      const aboutBorder = document.querySelector(".content-container"); // marco del about
      const closeLightboxBtn = document.getElementById("closeBtn"); // boton de cerrar del lightbox

      if (sliderContainer) {
        sliderContainer.style.color = "#e9ecef";
        sliderContainer.style.borderColor = "#000000";
        sliderWrap.style.borderColor = "#000000";
      }

      if (aboutBorder) {
        aboutBorder.style.borderColor = "#000000";
      }

      if (closeLightboxBtn) {
        closeLightboxBtn.style.color = "#e9ecef";
      }
    } else {
      // Modo claro para el resto del día
      document.documentElement.style.setProperty("--accent-black", "#27272f");
      document.documentElement.style.setProperty("--accent-white", "#eeede9");
    }
  }

  // Llamar a la función para cambiar la apariencia según la hora actual
  cambiarAparienciaSegunHora();
});
