const d = document,
  n = navigator;

export function deteccion(video, activarCamara) {
  const $activarCamara = d.getElementById(activarCamara);
  const $video = d.querySelector(video);

  if (n.mediaDevices.getUserMedia) { 
      n.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          console.log(stream);
          $video.srcObject = stream;
          $video.play();
        })
        .catch((error) => {
          $video.insertAdjacentHTML(
            "beforebegin",
            `<p>Ocurrio el siguiente error:<mark>${error}</mark></p> 
            <p>- Para acceder a la cámara debe conceder el permiso, luego debe actualizar el navegador -</p>`
          );
          console.log(`Ocurrio el siguiente error: ${error}`);
        });
      }
    }
  

