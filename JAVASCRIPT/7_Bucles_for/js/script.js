window.addEventListener("load",init);

function init() {
    //botonR.addEventListener('click', cambiaColor);
    //mostrarHasta10();
    //datos();
    crearTabla();
}

function mostrarHasta10() {   
    console.log("Del 0 al 10"); 
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }

    console.log("\nDel 0 al 10 de 2 en dos"); 
    for (let i = 0; i <= 10; i+=2) {
        console.log(i);
    }
    
}

    
function datos() {
    
    for (let i = 0; i <= 5; i++) {
        var datosFila = "<tr>";
            for (let j = 0; j <=4; j++) {
                datosFila += "<td>";
                datosFila += "dato" + i + "," + j;
                datosFila += "<td>";
            }
        datosFila += "</tr>";

        document.getElementById("miTabla").innerHTML+=datosFila;
    }
}

function crearTabla() {
    var div=document.getElementById("miTabla");

    for (let i = 0; i <= 5; i++) {
        var datosFila = "<tr>";
            for (let j = 0; j <=4; j++) {
                var nodo = nuevoElemento(i, j);
                div.appendChild(nodo);
            }
        datosFila += "</tr>";

        document.getElementById("miTabla").innerHTML+=datosFila;
    }
}

function nuevoElemento(fila, columna) { // nuevoElemento(idioma)

    var html = `<td style="border: 1px solid black">${fila} - ${columna}<td> `;

    return htmlToElement(html);
}

function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result 
    template.innerHTML = html;
    return template.content.firstChild;
}