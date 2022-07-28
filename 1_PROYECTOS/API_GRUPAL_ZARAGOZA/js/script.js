import { mostrar_mapa } from './mapa.js';

window.addEventListener("load",init);

// función iniciadora
async function init() {
    let url = "https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/equipamiento/aparcamiento-bicicleta.json";
    await anadirAparcamientos(url);

    let inputUsuario = document.getElementById("ubicacion");
    inputUsuario.addEventListener("keyup", mostrarSegunSeleccion);
}

// función para recibir insertar los aparcamientos en los div
async function anadirAparcamientos(url) {

    // obtengo los resultados (aparcamientos)
    let aparcamientos = await solicitarAparcamientos(url);
    // obtengo el div contenedor
    let divPadre = document.querySelector(".container_aparcamientos");
    
    // contador necesario para crear un id único en cada div mapa
    let contador = 0;

    //aparcamientos.length
    for(let i=0;i<10;i++){

        contador++;
        let id = "mapa"+contador;

        let lat =  aparcamientos[i].geometry.coordinates[1];
        let lng =  aparcamientos[i].geometry.coordinates[0];

        let nodo = nuevoElemento(aparcamientos[i],id);
        
        mostrar_mapa(lat, lng, id, aparcamientos[i].title);

        divPadre.appendChild(nodo);

    }
}

// función para recibir los aparcamientos
async function solicitarAparcamientos(url) {
    try {
        let respuesta = await fetch(url);       
        let datos = await respuesta.json();
        console.log(datos.result);

        return datos.result;
    } catch (err) {
        console.error(err);
    }
}

// según lo introducido en el input
async  function mostrarSegunSeleccion() {
    let url = "https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/equipamiento/aparcamiento-bicicleta.json";
    let aparcamientos = await solicitarAparcamientos(url);
    
    let divPadre = document.querySelector(".container_aparcamientos");
    
    // borro los que haya mostrados
    while (divPadre.firstChild) {
            divPadre.removeChild(divPadre.firstChild);
        }

    let contador = 0;
    
    //aparcamientos.length
    for(let i=0;i<10;i++){
        contador++;
        let id = "mapa"+contador;

        let lat =  aparcamientos[i].geometry.coordinates[1];
        let lng =  aparcamientos[i].geometry.coordinates[0];

        // obtengo el valor de lo escrito en el input
        let valor = this.value.toLowerCase();

        // lo muestro si coincide
        if (aparcamientos[i].title.toLowerCase().includes(valor)) {
            let nodo = nuevoElemento(aparcamientos[i],id);
            mostrar_mapa(lat, lng, id, aparcamientos[i].title);
            divPadre.appendChild(nodo);
        }
    }
}

// usamos templates string
function nuevoElemento(aparcamientos,id) {
    let html = `<div class="shadow-lg rounded-5 card container-fluid py-3 text-center mt-3" style="width: 18rem;">
                    <div id=${id} class="text-dark rounded-4" style="width: 200; height: 250px;">
                    </div>
                    <div class="card-body  text-center p-4">
                        <h5 class="card-title">
                            <i class="bi bi-geo-fill" style="font-size: 1.5rem;"></i>
                            ${aparcamientos.title}
                        </h5>
                        <p class="card-text">
                            <i class="bi bi-bicycle" style="font-size: 1.5rem;"></i>
                            Plazas: ${aparcamientos.plazas}
                         </p>
                        <p class="card-text">
                            <i class="bi bi-check-circle" style="font-size: 1.5rem;"></i>
                            Disponibles: ${aparcamientos.anclajes}
                         </p>
                    </div>
                </div>`;
    return htmlToElement(html);
}

// convierte una cadena HTML en elementos DOM configurando el HTML interno de un elemento 
// <template> y luego accediendo a la propiedad .content de la plantilla.
function htmlToElement(html) {
    let template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result 
    template.innerHTML = html;
    return template.content.firstChild;
}