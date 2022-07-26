window.addEventListener("load", init);

function init() {
    var divInicio= document.getElementById("inicio");
    var divArrastrable= document.getElementById("arrastrable");
    var divContenedor= document.getElementById("contenedor");

    divArrastrable.setAttribute('draggable', true);
    
    divInicio.addEventListener("dragover", over);
    divInicio.addEventListener("dragleave", leave);
    divInicio.addEventListener("drop", drop);
    
    // otras formas
    // inicio.addEventListener("drop", drop);
    // inicio.ondragover = over;
    // inicio.ondragover = function(){
    //     event.preventDefault();
    // };

    divArrastrable.addEventListener("dragstart", start);
    divArrastrable.addEventListener("dragend", end);

    divContenedor.addEventListener("dragover", over);
    divContenedor.addEventListener("dragleave", leave);
    divContenedor.addEventListener("drop", drop);
    // divContenedor.addEventListener("click", volver);

}

// Función para elemento arrastrable
function start(e) {
    e.target.style.opacity = 0.4;
}
function end(e) {
    e.target.style.opacity = 1;
}

// Función para el elemento contenedor
function over(e) {
    e.target.style.border ="3px solid blue";
    e.preventDefault();
} 
function leave(e) {
    e.target.style.border =" 2px solid black";
}
function drop(e) {
    e.target.appendChild(document.getElementById("arrastrable"));
    e.target.style.border ="2px solid black";
    // e.target.style.border ="200px";
}
function volver(e) {
    
}