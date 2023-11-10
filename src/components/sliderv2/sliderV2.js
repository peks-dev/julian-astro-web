import { projectsData } from "../../context/projectsData";

const sliderTitle = document.querySelector(".slider-v2__title");
const sliderSubtitle = document.querySelector(".slider-v2__subtitle");
const sliderImage = document.querySelector(".slider-v2__img-container img");
const sliderUrl = document.querySelector(".slider-v2__link");

let currentProjectIndex = 0;
let intervalId;

function showProject(index) {
  const project = projectsData[index];
  console.log(project);
  sliderTitle.textContent = project.name;
  sliderSubtitle.textContent = project.category;
  sliderImage.src = project.coverPath;
  sliderUrl.href = project.url;
}

function showNextProject() {
  clearInterval(intervalId);
  currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
  showProject(currentProjectIndex);
  startSliderInterval();
}

function showPreviousProject() {
  clearInterval(intervalId);
  currentProjectIndex =
    (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
  showProject(currentProjectIndex);
  startSliderInterval();
}

function startSliderInterval() {
  intervalId = setInterval(showNextProject, 5000);
}

// Mostrar el primer proyecto al cargar la página
showProject(currentProjectIndex);
startSliderInterval();

// Avanzar al siguiente proyecto cada 3 segundos
startSliderInterval();

// Control de navegación
const nextButton = document.getElementById("btn-slider-next");
const prevButton = document.getElementById("btn-slider-prev");

nextButton.addEventListener("click", () => {
  showNextProject();
});

prevButton.addEventListener("click", () => {
  showPreviousProject();
});

document.addEventListener("astro:after-swap", showProject);
