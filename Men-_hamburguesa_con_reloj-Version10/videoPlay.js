const d = document;

export function videoAutomatico() {
  const $videos = d.querySelectorAll("video");

  const cb = (pr) => {
    pr.forEach((el) => {
      if (el.isIntersecting) {
        el.target.play();
      } else {
        el.target.pause();
        el.target.loop();
      }
    });
  };

  const observer = new IntersectionObserver(cb, {});

  $videos.forEach((video) => observer.observe(video));
}
