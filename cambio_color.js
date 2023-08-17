const d = document;

export function cambioColor(btnCambio) {
  let sun = "☀️",
    moon = "🌙";
  const $btnCambio = d.querySelector(btnCambio);

  const colorFondo = localStorage.getItem("otroColor");
  //change page background color
  if (colorFondo === "true") {
    d.body.classList.toggle("dark");
  } 
  //set the color change of the page together with the text of the $btncambio
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnCambio)) {
      const color = d.body.classList.toggle("dark");
      localStorage.setItem("otroColor", color);
      if ($btnCambio.textContent === sun) {
        $btnCambio.textContent = moon;
      } else {
        $btnCambio.textContent = sun;
      }
    }
  });
}
