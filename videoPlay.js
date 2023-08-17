const d = document;

export function videoAutomatico() {
  const $videos = d.querySelectorAll("video");
  //if the element is intercepted by the observer, play the video, otherwise, pause it
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
  //The observer is created and the parameters to be observed are passed to it
  const observer = new IntersectionObserver(cb, {});
  //the elements to be observed are determined
  $videos.forEach((video) => observer.observe(video));
}
