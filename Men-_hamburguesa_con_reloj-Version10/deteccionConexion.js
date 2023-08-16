const d = document,
  w = window,
  n = navigator;

export function deteccionConexion() {
  //Notices for connection status are established
  const onLine = () => {
    const $Div = d.createElement("div");
    if (n.onLine === true) {
      $Div.textContent = "Conexión reestablecida";
      $Div.classList.add("deteccion");
      $Div.classList.remove("deteccionNo");
    }
    if (n.onLine === false) {
      $Div.textContent = "Conexión caída";
      $Div.classList.add("deteccionNo");
      $Div.classList.remove("deteccion");
    }
    d.body.insertAdjacentElement("afterbegin", $Div);
    setTimeout(() => d.body.removeChild($Div), 2000);
  };
  //connection status is identified
  w.addEventListener("online", (e) => onLine());
  w.addEventListener("offline", (e) => onLine());
}
