document.addEventListener("astro:page-load", () => {
  const menuInput = document.getElementById("hamburger");
  const backBtn = document.getElementById("back");

  backBtn.addEventListener("click", () => {
    menuInput.checked = true;
  });
});
