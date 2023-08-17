let d = document;

export function retornar(btn) {
  let $btn = d.querySelector(btn);
  //hide or show the $btn
  window.addEventListener("scroll", (e) => {
    let scroll = document.documentElement.scrollTop || window.scrollY;  

    if (scroll > 545) {
      $btn.classList.remove("hidden");
    } else {
      $btn.classList.add("hidden");
    }
  });
  //return to the top of the page by clicking on btn
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
