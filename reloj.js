let mostrarReloj = document.getElementById("mostrarReloj");
let mainTime = document.querySelector(".main_time");
let ocultarReloj = document.getElementById("ocultarReloj");
const d = document;

export function mostrar(reloj, btnMostrar, btnOcultar) {
  let aparicion;
  //if you click on btnShow, the clock is displayed
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMostrar)) {
      aparicion = setInterval(() => {
        let relojFuncional = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `<h3>${relojFuncional}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    //if you click on btnHide, the clock is hidden
    if (e.target.matches(btnOcultar)) {
      clearInterval(aparicion);
      d.querySelector(reloj).innerHTML = null;
      d.querySelector(btnMostrar).disabled = false;
    }
  });
}

export function sonarAlarma(sonido, btnIniciar, btnParar) {
  let temporizador;
  let $alarma = d.createElement("audio");
  $alarma.src = sonido;
  
  d.addEventListener("click", (e) => {
    //if you click on btnStart, the alarm starts to sound
    if (e.target.matches(btnIniciar)) {
      temporizador = setInterval(() => {
        $alarma.play();
      }, 0);
      e.target.disabled = true;
    }
    //if btnStop is clicked, the alarm stops
    if (e.target.matches(btnParar)) {
      clearInterval(temporizador);
      $alarma.pause();
      $alarma.currentTime = 0;
      d.querySelector(btnIniciar).disabled = false;
    }
  });
}

