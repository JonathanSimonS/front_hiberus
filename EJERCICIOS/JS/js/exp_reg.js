window.addEventListener("load",init);

function init(){
    comprobar();
}

function comprobar() {
    let expReg = /^\+56(-2-| 2 )\d{8}$/;
    let telefonos = ["+56-2-24215300", "+56 2 24215300", "+56-2 24215300", 
                     "+56 2-24215300", "+56-2-2421530", "+56-2-242153000", 
                     "+34-2-24215300", "+56-2-24215A00"];

    for (const telefono of telefonos) {
        
        // devuelve true o false dependiendo de si cumple o no la ER
        let resultado = expReg.test(telefono); 
        let td = crearTDs(telefono, resultado);

        document.getElementById("tabla").appendChild(td);
    }

    // Método profesora
    // for (const telef of telefonos) {
    //     let resultado = expReg.test(telef);

    //     var fila = document.createElement("tr");
    //     var columTelef = document.createElement("td");
    //     columTelef.innerHTML = telef;
        
    //     var columResul = document.createElement("td");
    //     columResul.innerHTML = resultado;

    //     fila.appendChild(columTelef);
    //     fila.appendChild(columResul);

    //     document.getElementById("tabla").appendChild(fila);
    // }
}

// Creo la estructura con los parámetros que le pasaremos
function crearTDs(tel, res) {
    var html = `<tr>
                    <td>${tel}"</td>
                    <td>${res}</td>
                </tr>`;
    return htmlToElement(html);
}

// Función para convertir un texto en nodos
function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result 
    template.innerHTML = html;
    return template.content.firstChild;
}