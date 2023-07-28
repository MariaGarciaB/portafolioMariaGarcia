// Obtengo una referencia al botón de descarga
const downloadButton = document.getElementById("downloadButton");

// Agrego un evento de clic al botón
downloadButton.addEventListener("click", () => {
  // URL del archivo PDF
  const pdfUrl = "cv_MariaGarcia.pdf";

  // Descargo el archivo
  window.open(pdfUrl, "_blank");
});

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
