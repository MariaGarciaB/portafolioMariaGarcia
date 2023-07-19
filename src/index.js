// Obtengo una referencia al botón de descarga
const downloadButton = document.getElementById("downloadButton");

// Agrego un evento de clic al botón
downloadButton.addEventListener("click", () => {
  // URL del archivo PDF
  const pdfUrl = "cv_MariaGarcia.pdf";

  // Descargo el archivo
  window.open(pdfUrl, "_blank");
});

// Obtengo una referencia a los elementos del menú
const inicioLink = document.querySelector('a[href="#inicio"]');
const sobreMiLink = document.querySelector('a[href="#sobreMi"]');
const portafolioLink = document.querySelector('a[href="#portafolio"]');
const contactoLink = document.querySelector('a[href="#contacto"]');

// Agrego los eventos de clic a los elementos del menú
inicioLink.addEventListener("click", () => scrollToSection("inicio"));
sobreMiLink.addEventListener("click", () => scrollToSection("sobreMi"));
portafolioLink.addEventListener("click", () => scrollToSection("portafolio"));
contactoLink.addEventListener("click", () => scrollToSection("contacto"));

// Desplacarse de manera armónica
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

// Referencia a los elementos de los iconos
const githubIcons = document.querySelectorAll(
  '.card__proyect-links a[href^="https://github.com/MariaGarciaB/DEV004-card-validation.github.io"]'
);
const websiteIcons = document.querySelectorAll(
  '.card__proyect-links a[href^="https://mariagarciab.github.io/DEV004-card-validation.github.io/src/"]'
);
const codeIcons = document.querySelectorAll(
  '.card__proyect-links a[href^="https://github.com/MariaGarciaB/DEV004-card-validation.github.io/tree/main/src"]'
);
const linkedinIcon = document.getElementById("linkedin-icon");
// clic a los iconos de GitHub
githubIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.preventDefault();
    const githubLink = event.target.parentNode.href;
    window.open(githubLink, "_blank");
  });
});

// clic a los iconos de sitios web
websiteIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.preventDefault();
    const websiteLink = event.target.parentNode.href;
    window.open(websiteLink, "_blank");
  });
});

// clic a los iconos de código
codeIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.preventDefault();
    const codeLink = event.target.parentNode.href;
    window.open(codeLink, "_blank");
  });
});
