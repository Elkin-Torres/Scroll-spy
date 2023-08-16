const d = document;

export function validacion() {
  const $inputs = d.querySelectorAll(".formulario [required]");
  //error messages are created for each element in $inputs
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("error-formulario", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    //when writing in the inputs of the form, identify whether or not they have a pattern assigned, depending on this, add or remove the "activate" class if the pattern is met or not
    if (e.target.matches(".formulario [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern) {
        let regExp = new RegExp(pattern);
        return !regExp.exec($input.value)
          ? d.getElementById($input.name).classList.add("activar")
          : d.getElementById($input.name).classList.remove("activar");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("activar")
          : d.getElementById($input.name).classList.remove("activar");
      }
    }
  });

  const $formulario = d.querySelector(".formulario");
  //when submitting the form
  d.addEventListener("submit", (e) => {
    const $loader = d.querySelector(".form-loader"),
      $response = d.querySelector(".form-response");

    $loader.classList.remove("none");
    //show and then hide $loader and $response, also format the form
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $formulario.reset();

      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
