const d = document;

export function pantallaResponsiva(id, mq, desktop, mobile) {
  const modo = matchMedia(mq);

  const cambioModo = (e) => {
    e.matches
      ? (d.getElementById(id).innerHTML = desktop)
      : (d.getElementById(id).innerHTML = mobile);
  };

  modo.addEventListener("change", cambioModo);
  cambioModo(modo);
}
