const d = document;

export function filtrosDeBusqueda(input, card) {
  d.addEventListener("input", (e) => {
    if (e.target.matches(input)) {
      let cambio = input.toLowerCase();
      console.log(cambio);
      d.querySelectorAll(card).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
