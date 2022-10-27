const d = document;

export function diseñoResponsive(formulario) {
  const informacion = d.querySelector(formulario);
  let almacenar;

  d.addEventListener("submit", (e) => {
    if (e.target === informacion) {
      e.preventDefault();
      almacenar = open(
        informacion.URL.value,
        "",
        `Width=${informacion.ancho.value} , Height=${informacion.alto.value} `
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === informacion.finalizar) {
      almacenar.close();
    }
  });
}
