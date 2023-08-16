const d = document,
  n = navigator;

export function deteccion(video, activarCamara) {
  const $activarCamara = d.getElementById(activarCamara);
  const $video = d.querySelector(video);
  //the settings for the use of the camera are established
  if (n.mediaDevices.getUserMedia) { 
      n.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          console.log(stream);
          $video.srcObject = stream;
          $video.play();
        })
        //notice informed that the permission to use the camera was not enabled
        .catch((error) => {
          $video.insertAdjacentHTML(
            "beforebegin",
            `<p>Ocurrio el siguiente error:<mark>${error}</mark></p> 
            <p>- Para acceder a la cámara debes conceder el permiso, luego debes actualizar el navegador -</p>`
          );
        });
      }
    }
  

