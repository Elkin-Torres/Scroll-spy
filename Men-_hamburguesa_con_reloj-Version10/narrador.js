const d = document;

export function narradorDeTexto() {
  const $selector = d.querySelector("#selector-narrador"),
    $texto = d.querySelector("#texto-narrador"),
    $narradorbtn = d.querySelector(".narrador-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    //the voices are obtained and their respective values ​​are recorded in the options
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
  //any voice that has been chosen is identified and assigned
  d.addEventListener("change", (e) => {
    if (e.target === $selector) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  //the written text is passed to the voice so that it can be spoken
  d.addEventListener("click", (e) => {
    if (e.target === $narradorbtn) {
      speechMessage.text = $texto.value;
      speechSynthesis.speak(speechMessage);
    }
  });
}
