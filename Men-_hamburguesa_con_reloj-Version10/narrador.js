const d = document;

export function narradorDeTexto() {
  const $selector = d.querySelector("#selector-narrador"),
    $texto = d.querySelector("#texto-narrador"),
    $narradorbtn = d.querySelector(".narrador-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(window.speechSynthesis);
    //console.log(window.speechSynthesis.getVoices());
    speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = speechSynthesis.getVoices();

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        ($option.value = voice.name),
          ($option.textContent = `${voice.name}-${voice.lang}`);

        $selector.appendChild($option);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $selector) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $narradorbtn) {
      speechMessage.text = $texto.value;
      speechSynthesis.speak(speechMessage);
    }
  });
}
