window.addEventListener("load",init);

var cuadrado = document.getElementById("cuadrado");

var botonBorde = document.getElementById("btnBorde");
var botonColor = document.getElementById("btnColor");
var botonSombra = document.getElementById("btnSombra");
var botonRestaurar = document.getElementById("btnRestaurar");

function init() {
    botonBorde.addEventListener('click', borde);
    botonColor.addEventListener('click', color);
    botonSombra.addEventListener('click', sombra);
    botonRestaurar.addEventListener('click', restaurar);
}
function borde() {
    cuadrado.classList.toggle("borde");
    if (botonBorde.innerHTML == 'Aplicar borde') 
        botonBorde.innerHTML = 'Quitar borde';
    else botonBorde.innerHTML = 'Aplicar borde';
}
function color() {
    // Color aleatorio
    var randomColor = Math.floor(Math.random()*16777215).toString(16); 
    document.getElementById("cuadrado").style.backgroundColor = "#" + randomColor; 
}
function sombra() {
    cuadrado.classList.toggle("sombra");
    if (botonSombra.innerHTML == 'Poner sombra') 
        botonSombra.innerHTML = 'Quitar sombra';
    else botonSombra.innerHTML = 'Poner sombra'; 
}
function restaurar() {
    // faltan los texto, se cambian
    cuadrado.removeAttribute("class");
    cuadrado.removeAttribute("style");

}