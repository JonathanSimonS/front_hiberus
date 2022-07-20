// evento load (cuando se cargue el documento) inicia la función init
window.addEventListener("load", init);

function init() {

    // Contenedores
    var divContenedorAlmeria = document.getElementById("contenedorAlmeria");
    var divContenedorMurcia = document.getElementById("contenedorMurcia");
    var divContenedorAlbacete = document.getElementById("contenedorAlbacete");
    var inicio = document.getElementById("inicio");

    // Lista de pueblos
    var almeria = document.getElementById("fines");
    var murcia = document.getElementById("bullas");
    var albacete = document.getElementById("villarrobledo");

    // Agrego atributo a elementos de la lista
    almeria.setAttribute('draggable', true);
    murcia.setAttribute('draggable', true);
    albacete.setAttribute('draggable', true);
    inicio.setAttribute('draggable', true);

    inicio.addEventListener("drop", iniciar);
    inicio.addEventListener("dragover", function() {
        event.preventDefault();
    });

    // Añado eventos 
    almeria.addEventListener("dragstart", start);
    almeria.addEventListener("dragend", end);
    divContenedorAlmeria.addEventListener("dragover", over);
    divContenedorAlmeria.addEventListener("dragleave", leave);
    divContenedorAlmeria.addEventListener("drop", drop);
    
    murcia.addEventListener("dragstart", start);
    murcia.addEventListener("dragend", end);
    divContenedorMurcia.addEventListener("dragover", over);
    divContenedorMurcia.addEventListener("dragleave", leave);
    divContenedorMurcia.addEventListener("drop", drop);
    
    albacete.addEventListener("dragstart", start);
    albacete.addEventListener("dragend", end);
    divContenedorAlbacete.addEventListener("dragover", over);
    divContenedorAlbacete.addEventListener("dragleave", leave);
    divContenedorAlbacete.addEventListener("drop", drop);
}

// Funciones para elementos arrastrables
function start(e) { // empiezo a arrastrar el elemento
    // obtengo el id de elemento que arrastro e inicia el evento
    // y lo guardo con setData en el índice "ciudad"
    e.dataTransfer.setData("ciudad", e.target.id); 
    e.target.style.opacity = 0.4;
}
function end(e) { // suelto el elemento
    e.target.style.opacity = 1;
}

// Funciones para el elementos contenedores
function over(e) {
    // recupero la ciudad con getData
    var ciudad = e.dataTransfer.getData("ciudad");

    // con this.id obtengo el nombre del contenedor al que se arrastra
    let contenedor = this.id;
    
    if (ciudad=="fines" && contenedor=="contenedorAlmeria" || 
        ciudad=="bullas" && contenedor=="contenedorMurcia" ||
        ciudad=="villarrobledo" && contenedor=="contenedorAlbacete"){
            
            e.target.style.border ="5px solid green";
            e.target.style.background = 'green';
            e.target.style.color = 'white';
    }
    else {
            e.target.style.border ="5px solid red";
            e.target.style.background = 'red';
            e.target.style.color = 'white';
    }

    e.preventDefault();
} 
function leave(e) {
    e.target.style.border ="1px solid black";
    e.target.style.background = 'white';
    e.target.style.color = 'black';
}
function drop(e) {

    var ciudad = e.dataTransfer.getData("ciudad");
    let contenedor = this.id;
    
    if (ciudad=="fines" && contenedor=="contenedorAlmeria" || 
        ciudad=="bullas" && contenedor=="contenedorMurcia" ||
        ciudad=="villarrobledo" && contenedor=="contenedorAlbacete"){
            e.target.style.border ="5px solid green";
            e.target.style.background = 'green';
            e.target.style.color = 'white';
            e.target.appendChild(document.getElementById(ciudad));
    }
    else {
            e.target.style.border ="5px solid red";
            e.target.style.background = 'red';
            e.target.style.color = 'white';
    }
    
}

function iniciar(e) {
    e.target.appendChild(document.getElementById("inicio"));
}