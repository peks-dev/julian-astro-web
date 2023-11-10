import { projectsData } from "../../../context/projectsData";

let currentPostIndex = projectsData.findIndex(
  (post) => post.url === window.location.pathname
); // Obtener la posición actual

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function setButtonText() {
  if (currentPostIndex > 0) {
    prevBtn.textContent = `${projectsData[currentPostIndex - 1].name}`;
  }

  if (currentPostIndex < projectsData.length - 1) {
    nextBtn.textContent = `${projectsData[currentPostIndex + 1].name}`;
  }
}

function goToPreviousPost() {
  if (currentPostIndex > 0) {
    currentPostIndex--;
    window.location.href = projectsData[currentPostIndex].url;
  }
}

function goToNextPost() {
  if (currentPostIndex < projectsData.length - 1) {
    currentPostIndex++;
    window.location.href = projectsData[currentPostIndex].url;
  }
}

prevBtn.addEventListener("click", goToPreviousPost);
nextBtn.addEventListener("click", goToNextPost);

setButtonText();
