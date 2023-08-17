let d = document;

let x = 0,
  y = 0;

export function movement(e, pelota, campo) {
  const $block = d.getElementById(pelota),
    $space = d.getElementById(campo),
    limitsBlock = $block.getBoundingClientRect(),
    limitsSpace = $space.getBoundingClientRect();

  //Depending on which arrow is pressed, the respective displacement is applied to $block
  $block.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      if (limitsBlock.top > limitsSpace.top + 10) y--;
      break;
    case "ArrowDown":
      e.preventDefault();
      if (limitsBlock.bottom < limitsSpace.bottom - 20) y++;
      break;
    case "ArrowLeft":
      e.preventDefault();
      if (limitsBlock.left > limitsSpace.left + 10) x--;
      break;
    case "ArrowRight":
      e.preventDefault();
      if (limitsBlock.right < limitsSpace.right - 10) x++;
      break;
  }
}



