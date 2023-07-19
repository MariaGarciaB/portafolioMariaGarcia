let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const downloadButton = document.getElementById("bttnDownload");

// Agrego un evento de clic al botón
downloadButton.addEventListener("click", () => {
  // URL del archivo PDF
  const pdfUrl = "src/cv_MariaGarcia.pdf";

  // Descargo el archivo
  window.open(pdfUrl, "_blank");
});