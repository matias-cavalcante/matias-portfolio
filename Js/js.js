
/*
function checkFluency()
{
  var checkbox = document.getElementById("nav-check");
  var menu = document.getElementById("menu-list");
  if ( window.matchMedia("(max-width: 700px)") && checkbox.checked == true)
  {
    menu.style.display = "block";
  }
  else if ( window.matchMedia("(max-width: 700px)") && checkbox.checked == false){
    menu.style.display = "none";
  }
}*/

const hamburguer = document.getElementsById("hamburguer");
const navUL = document.getElementsById("menu-list");

hamburguer.addEventListener('click', () =>){
  navUL.classList.toggle("show");
}



