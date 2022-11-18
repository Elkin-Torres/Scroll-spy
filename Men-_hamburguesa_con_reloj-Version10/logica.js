import  hamburguerMenu from "./menu_hamburguesa.js";
import { mostrar, sonarAlarma } from "./reloj.js";
import { shortcuts } from "./atajos.js";
import { movement } from "./movimiento_pelota.js";
import { conteo } from "./conteo.js";
import { retornar } from "./btnFlecha.js";
import { cambioColor } from "./cambio_color.js";
import { pantallaResponsiva } from "./pantallaResponsive.js";
import { diseñoResponsive } from "./diseñoResponsive.js";
import {deteccionConexion} from "./deteccionConexion.js";
import {funcionInit} from "./geolocalizacion.js";
import { deteccion } from "./deteccionCamara.js";
import {filtrosDeBusqueda } from "./filtros.js";
import {sorteo} from "./sorteo.js";
import {slider} from "./sliderResponsive.js";
import {scroll_Spy} from "./spyScroll.js";
import {videoAutomatico} from "./videoPlay.js";
import {validacion} from "./validaciónFormulario.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  mostrar("#time", "#mostrarReloj", "#ocultarReloj");
  sonarAlarma("assets/alarma.mp3", "#iniciarAlarma", "#detenerAlarma");
  conteo("Dec 31 2022 23:59:59 GMT-0500");
  retornar(".btnArrow");
  cambioColor(".btnCambioColor");
  pantallaResponsiva(
    "video",
    "(min-width:800px)",
    `<iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/CFKHuTfP8ms"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`,
    `<a href="https://www.youtube.com/embed/CFKHuTfP8ms" target="_blank" reel="noopener">Link Video</a>`
  );
  pantallaResponsiva(
    "ubicacion",
    "(min-width:800px)",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9771243403875!2d-74.07823218523808!3d4.598120596659543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7eccfe58f%3A0x99cb72b35351476!2sPlaza%20de%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1661565474621!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<a href="https://www.google.com/maps/place/Plaza+de+Bol%C3%ADvar/@4.5981206,-74.0782322,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f99a7eccfe58f:0x99cb72b35351476!8m2!3d4.5981206!4d-74.0760435" target="_blank" reel="noopener">Link Mapa</a>`
  );

  diseñoResponsive("#formulario");
  
  funcionInit(".obtenerUbicacion", ".borrarUbicacion");

  deteccion(".video", "#activarCamara");

  filtrosDeBusqueda(".card-filter", ".card");

  sorteo(".sorteo", ".lenguaje");

  slider();

  scroll_Spy();

  videoAutomatico();

  validacion();

});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  movement(e, "pelota", "campo");  
});

deteccionConexion();




