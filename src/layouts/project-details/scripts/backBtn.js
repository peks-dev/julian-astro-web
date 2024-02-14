document.addEventListener("astro:page-load", () => {
  const backBtn = document.getElementById("back");

  backBtn.addEventListener("click", () => {
    // Verifica si hay una página anterior en el historial
    if (window.history.length > 1) {
      // Obtiene la URL de la página anterior en el historial
      const previousPageUrl = document.referrer;

      // Compara la URL de la página anterior con el dominio de tu sitio web
      if (previousPageUrl.includes(window.location.origin)) {
        // La página anterior pertenece a tu sitio web, retrocede
        window.history.back();
      } else {
        // La página anterior no pertenece a tu sitio web, redirige a la página de inicio
        window.location.href = "/"; // Reemplaza "/" con la URL de tu página de inicio
      }
    } else {
      // No hay una página anterior en el historial, redirige a la página de inicio
      window.location.href = "/"; // Reemplaza "/" con la URL de tu página de inicio
    }
  });
});
