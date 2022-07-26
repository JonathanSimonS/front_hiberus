import {Empleado} from './js/empleado.js';
import {Jefe} from './js/jefe.js';
import {Persona} from './js/persona.js';

// Persona
let persona = new Persona();
console.log(persona);

// Empleado
let empleado1 = new Empleado("Álvaro",30);
console.log(empleado1);

// Jefe
let jefe1 = new Jefe("Ana",35,"M");
console.log(jefe1);

// creo div y muestro datos en pantalla
let divP= document.getElementById("mostrarPersona");
let divE= document.getElementById("mostrarEmpleado");
let divJ= document.getElementById("mostrarJefe");

let pers = crearDiv(persona);
divP.appendChild(pers);

let empl = crearDiv(empleado1);
divE.appendChild(empl);

let jef = crearDiv(jefe1);
divJ.appendChild(jef);

// Creo la estructura con los parámetros que le pasaremos
function crearDiv(x) {
    var html = `<ul class="text-left list-unstyled">
                    <li >${x}</li>
                </ul>`;
    return htmlToElement(html);
}

// Función para convertir un texto en nodos
function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result 
    template.innerHTML = html;
    return template.content.firstChild;
}