const d = document;
export function slider (){
  const $prev = d.querySelector(".prevBtn"),
    $next = d.querySelector(".nextBtn"),
    $slider = d.querySelectorAll(".slider");

let i= 0;

d.addEventListener("click",(e)=>{
  //clicking on $prev displays the image before the current one
if(e.target === $prev){
  e.preventDefault();
  $slider[i].classList.remove("active");
  i--;
  if(i<0){
    i = $slider.length - 1;
  }
  $slider[i].classList.add("active");
}
//clicking $next displays the image next to the one you are currently on
if(e.target === $next){
e.preventDefault();
  $slider[i].classList.remove("active");
i++;
if (i >= $slider.length) {
  i = 0;
}
  $slider[i].classList.add("active");

}

})


}