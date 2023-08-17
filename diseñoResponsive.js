const d = document;

export function diseñoResponsive(formulario) {
  const informacion = d.querySelector(formulario);
  let almacenar;
  //if the information is sent
  d.addEventListener("submit", (e) => {
    //open the link with the registered width and length
    if (e.target === informacion) {
      e.preventDefault();
      almacenar = open(
        informacion.URL.value,
        "",
        `Width=${informacion.ancho.value} , Height=${informacion.alto.value} `
      );
    }
  });
  //close the open link
  d.addEventListener("click", (e) => {
    if (e.target === informacion.finalizar) {
      almacenar.close();
    }
  });
}
