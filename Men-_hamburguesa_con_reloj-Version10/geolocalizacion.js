const d = document;

export function funcionInit(btnUbicacion, btnBorrarUbicacion) {
  const $latitud = document.querySelector("#latitud"),
    $longitud = document.querySelector("#longitud"),
    $enlace = document.querySelector("#enlace");

  d.addEventListener("click", (e) => {
    //if "btnLocation" is selected
    if (e.target.matches(btnUbicacion)) {
      //si el navegador no soport la ubicación
      if (!"geolocation" in navigator) {
        return alert(
          "Tu navegador no soporta el acceso a la ubicación. Intenta con otro"
        );
      }
      //you get the location and set the url in maps
      const onUbicacionConcedida = (ubicacion) => {
        const coordenadas = ubicacion.coords;
        $latitud.innerText = coordenadas.latitude;
        $longitud.innerText = coordenadas.longitude;
        $enlace.classList.remove("hidden");
        $enlace.href = `https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z`;
      };
      //Error message
      const onErrorDeUbicacion = (err) => {
        $latitud.innerText = "Error obteniendo ubicación: " + err.message;
        $longitud.innerText = "Error obteniendo ubicación: " + err.message;
        console.log("Error obteniendo ubicación: ", err);
      };

      const opcionesDeSolicitud = {
        enableHighAccuracy: true, //high precision
        maximumAge: 0, //we don't want cache
        timeout: 5000, //Wait only 5 seconds
      };

      $latitud.innerText = "Cargando...";
      $longitud.innerText = "Cargando...";
      //values ​​are assigned
      navigator.geolocation.getCurrentPosition(
        onUbicacionConcedida,
        onErrorDeUbicacion,
        opcionesDeSolicitud
      );
    }
  });
  //location is deleted
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnBorrarUbicacion)) {
      $latitud.innerText = "No hay latitud";
      $longitud.innerText = "No hay longitud";
      $enlace.classList.add("hidden");
    }
  });
}
