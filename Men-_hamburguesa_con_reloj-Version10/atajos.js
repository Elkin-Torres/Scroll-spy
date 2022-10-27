let d = document;

export function shortcuts(e) {

  //Atajo para que salga una alerta    
    if (e.altKey && (e.key === "a" || e.key === "A")) {
      alert("Has lanzado una alerta");
    }

  //Atajo para que salga un aviso 
    if (e.altKey && (e.key === "p" || e.key === "P")) {
      prompt("Has lanzado una aviso");
    }  

  //Atajo para que salga una confirmación  
    if (e.altKey && (e.key === "c" || e.key === "C")) {
      confirm("Has lanzado una confirmación");
    }
  
}