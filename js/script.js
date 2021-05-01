$(function(){
      $('#img1').imgHover();    

});
    

let barra = document.querySelector(".barra");
let contenedor = document.querySelector(".contenedor-nav");

barra.addEventListener('click', activarNavegacion);

function activarNavegacion(){
    contenedor.classList.toggle("abrir");
}