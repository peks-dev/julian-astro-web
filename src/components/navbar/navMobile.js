document.addEventListener("astro:page-load", () => {
  const menuInput = document.getElementById("hamburger");
  const backBtn = document.getElementById("back");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      menuInput.checked = true;
    });
  }
});
