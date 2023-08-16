let d = document;

export function shortcuts(e) {

  //Shortcut to get an alert   
    if (e.altKey && (e.key === "a" || e.key === "A")) {
      alert("Has lanzado una alerta");
    }

  //Shortcut to get a notice
    if (e.altKey && (e.key === "p" || e.key === "P")) {
      prompt("Has lanzado una aviso");
    }  

  //Shortcut to get a confirmation  
    if (e.altKey && (e.key === "c" || e.key === "C")) {
      confirm("Has lanzado una confirmación");
    }
  
}