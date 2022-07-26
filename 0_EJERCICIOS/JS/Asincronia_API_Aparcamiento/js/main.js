window.addEventListener("load", init);

async function init() {

    btnPulsame.addEventListener("click", mostrarPorPantalla);

}

async function mostrarPorPantalla() {
    
    let div = document.getElementById("resultado");

    // lanzar la petición de forma asíncrona, 
    // funcion debe ser asincrona y la llamada a la funcion con await
    let personaje = await llamada();
    // el nodo será la lista
    let nodo = insertarElemento(personaje);
    // console.log(nodo);
    div.appendChild(nodo);

}

async function llamada(){
    var url = "https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/equipamiento/aparcamiento-bicicleta.json"; 

    let resp = await fetch(url)
        .then(resp => resp.json())
        .catch( err => console.error(err));
        
    return resp;
}

// Creo la estructura con los parámetros que le pasaremos
function insertarElemento(personaje) {
    var html = `<ul style="list-style: none;">
                    <li><h2>${personaje[0].character}</h2></li>
                    <li><img width="100px"  src="${personaje[0].image}"></li>
                    <li>"<em>${personaje[0].quote}</em>"</li>
                </ul>
                `;
    return htmlToElement(html);
}
// Función para convertir un texto en nodos
function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result 
    template.innerHTML = html;
    return template.content.firstChild;
}