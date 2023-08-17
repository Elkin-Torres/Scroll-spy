const d = document;

export function sorteo (btn,lenguaje){
 //languages ​​are selected and one is chosen at random
 const sorteando = (lenguaje) => {
   const $lenguajes = d.querySelectorAll(lenguaje),
   aleatorio = Math.floor(Math.random()*$lenguajes.length),
  obtenerLenguaje = $lenguajes[aleatorio];
  
  return `El lenguaje ganador es ${obtenerLenguaje.textContent}`;
 };
//clicking on btn displays an alert with the language chosen at random
 d.addEventListener("click", (e)=>{
  if(e.target.matches(btn)){
    let result = sorteando(lenguaje);
    alert(result);
  }
 })
}

