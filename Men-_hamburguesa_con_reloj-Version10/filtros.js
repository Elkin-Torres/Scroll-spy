const d = document;

export function filtrosDeBusqueda(input, card) {
  d.addEventListener("input", (e) => {
  // if information is entered in the input
    if (e.target.matches(input)) {
      let cambio = input.toLowerCase();
      //if the registered information matches or not, show or hide each "card"
      d.querySelectorAll(card).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
