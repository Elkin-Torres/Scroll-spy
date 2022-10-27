let d = document;

export function retornar(btn) {
  let $btn = d.querySelector(btn);

  window.addEventListener("scroll", (e) => {
    let scroll = document.documentElement.scrollTop || window.scrollY;  

    if (scroll > 545) {
      $btn.classList.remove("hidden");
    } else {
      $btn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
