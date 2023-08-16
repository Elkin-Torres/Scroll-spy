const d = document;

export function scroll_Spy() {
  const $entries = d.querySelectorAll("section[data-scrollSpy]");
  //if the parameter is intercepted by the observer, add the respective class, otherwise, remove the respective class
  const cb = (pr) => {
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

  //the new observer is created, the parameters to be observed (cb) and the distance at which the parameter must be identified (threshold) are assigned
  const observer = new IntersectionObserver(cb, {
    threshold: 0.5,
  });
  //determine what you want to see
  $entries.forEach((el) => observer.observe(el));
}
