const d = document;

export function scroll_Spy() {
  const $entries = d.querySelectorAll("section[data-scrollSpy]");

  const cb = (pr) => {
    //console.log(pr);

    pr.forEach((el) => {
      const id = el.target.getAttribute("id");
      if (el.isIntersecting) {
        d.querySelector(`a[href="#${id}"][data-scrollSpy]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.5,
  });

  $entries.forEach((el) => observer.observe(el));
}
