import { Alumno } from "./modulos/alumno.js";
import { Direccion } from "./modulos/direccion.js";

window.addEventListener("load", init);

function init() {
    crearAlumnos();
    //crearDireccion();
}

function crearAlumnos() {

    var direccionAlumno1 = new Direccion("Diego de Siloe","12","Almería");
    var alumno1 = new Alumno("Maria","Perez",8.20);

    var direccionAlumno2 = new Direccion("Miguel Unamuno","8","Murcia");
    var alumno2 = new Alumno("Luis", "Pérez", 10, direccionAlumno2);

    var direccionAlumno4 = new Direccion("Diagonal","8","Barcelona");
    var alumno4 = new Alumno("Elena", "Rodriguez", 6.8, direccionAlumno4);

    // muestro la info de los alumnos
    let div = document.getElementById("mostrarAlumnos");
    div.innerHTML = alumno1;
    div.innerHTML += "<br><br>"+alumno2;
    
    // pinto antes y después de cambiar calle
    div.innerHTML += "<br><br>"+alumno4;
    direccionAlumno4.calle = "Inversa";
    div.innerHTML += "<br><br>"+alumno4;

    // div.innerHTML += "<br>"+direccionAlumno1;

    // console.log(alumno1);
    // console.log(alumno2);
    // console.log(direccionAlumno1);
    // console.log(direccionAlumno2);

}

function crearDireccion() {
    var direccion1 = new Direccion();
    direccion1.calle = "Diego de Siloe";
    direccion1.numero = "12";
    direccion1.poblacion = "Almería";
    
    var direccion2 = new Direccion();
    direccion2.calle = "Miguel Unamunu";
    direccion2.numero = "2";
    direccion2.poblacion = "Murcia";
     
    // let div = document.getElementById("mostrarDirecciones");
    
    // // muestro la info de los alumnos (añadido chapucero)
    // div.innerHTML = direccion1.toString();
    // div.innerHTML += "<br>"+direccion2.toString();
    
}
    
// function anadirFila(nombre, apellidos, nota) {
//     var nodo = nuevaFila(nombre, apellidos, nota);
//     mitabla.lastElementChild.appendChild(nodo);     // añado nodo en el último elemento hijo
// }
// function anadirAlumnos(nombre, apellidos, nota) {
//     var html = `<tr>
//                     <td/>${nombre}</td>
//                     <td>${apellidos}</td>
//                     <td>${nota}</td>
//                 </tr>`;
                
//     return htmlToElement(html);
// }
// // Función para convertir un texto en nodos
// function htmlToElement(html) {
//     var template = document.createElement("template");
//     html = html.trim(); // Never return a text node of whitespace as the result 
//     template.innerHTML = html;
//     return template.content.firstChild;
// }
