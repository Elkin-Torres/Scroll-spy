const d = document;

export function pantallaResponsiva(id, mq, desktop, mobile) {
  //screen sizes are saved
  const modo = matchMedia(mq);
  //identifies if the size is desktop or mobile and passes the respective information
  const cambioModo = (e) => {
    e.matches
      ? (d.getElementById(id).innerHTML = desktop)
      : (d.getElementById(id).innerHTML = mobile);
  };
  //identifies the screen change and likewise executes changeMode
  modo.addEventListener("change", cambioModo);
  cambioModo(modo);
}
