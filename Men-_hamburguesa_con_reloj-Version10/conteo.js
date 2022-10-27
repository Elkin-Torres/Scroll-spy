const d = document;
let dias = d.getElementById("dias");
let horas = d.getElementById("horas");
let minutos = d.getElementById("minutos");
let segundos = d.getElementById("segundos");
let añoNuevo = d.getElementById("añoNuevo");

export function conteo(fechaFutura) {
  let progreso;
  progreso = setInterval(() => {
    let fechaActual = new Date();
    let fechaConteo = (new Date(fechaFutura) - fechaActual) / 1000;

    let segundosRestantes = ("0" + Math.floor(fechaConteo % 60)).slice(-2);
    let minutosRestantes = ("0" + Math.floor((fechaConteo / 60) % 60)).slice(
      -2
    );
    let horasRestantes = ("0" + Math.floor((fechaConteo / 3600) % 24)).slice(
      -2
    );
    let diasRestantes = Math.floor(fechaConteo / (3600 * 24));

    dias.innerHTML = diasRestantes;
    horas.innerHTML = horasRestantes;
    minutos.innerHTML = minutosRestantes;
    segundos.innerHTML = segundosRestantes;

    if (fechaConteo <= 1) {
      añoNuevo.insertAdjacentText("afterbegin", "¡Feliz año!");
    }
    if (fechaConteo <= 1) clearInterval(progreso);
  }, 1000);
}
