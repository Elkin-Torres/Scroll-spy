const d = document;

export function sorteo (btn,lenguaje){
  
 const sorteando = (lenguaje) => {
   const $lenguajes = d.querySelectorAll(lenguaje),
   aleatorio = Math.floor(Math.random()*$lenguajes.length),
  obtenerLenguaje = $lenguajes[aleatorio];
  
  return `El lenguaje ganador es ${obtenerLenguaje.textContent}`;
 };

 d.addEventListener("click", (e)=>{
  if(e.target.matches(btn)){
    let result = sorteando(lenguaje);
    alert(result);
  }
 })
}

 /* d.addEventListener("click", (e) => {
    let numero = Math.floor(Math.random() * 10);
    let informacion = [
      "Javascript",
      "Java",
      "Python",
      "GO",
      "C++",
      "C",
      "Ruby",
      "PHP",
      "Rust",
      "Perl",
    ];
    if (e.target.matches(btn)) {
      console.log(`El ganador es ${informacion[numero]}`);
      alert(`El ganador es ${informacion[numero]}`);
    }
  });
  */
