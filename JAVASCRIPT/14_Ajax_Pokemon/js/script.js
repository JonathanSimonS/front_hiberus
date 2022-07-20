window.addEventListener("load",init);
let xhr;

function init(){
    // Aquí ponemos las funciones a llamar
    getPokemon();
    document.getElementById("nombre").addEventListener("blur", buscarPokemon);
}

function getObjeto() {
    xhr = new XMLHttpRequest(); // readyState = 0;
}

// MOSTRAR LISTA DE POKEMON
function getPokemon() {
    getObjeto();

    // preparo petición
    let url = "https://pokeapi.co/api/v2/pokemon";
    xhr.open("GET", url , true);

    // formato de respuesta JSON
    xhr.setRequestHeader("accept", "application/json");

    // función que procesa la respuesta
    xhr.onreadystatechange = procesarTodos; 

    // enviar petición
    xhr.send();

}
function procesarTodos() {
    if (xhr.readyState == 4) {
        let datos = JSON.parse(xhr.responseText);
        var array = datos.results; 
        // console.log(array);

        for (const i in array) {
            // console.log(array[i].name);

            let nombre = array[i].name;
            let url = array[i].url;

            let li = crearLista(nombre, url);
            document.getElementById("listaPokemon").appendChild(li);
        }
    }
}

// MOSTRAR POKEMON BUSCADO POR INPUT
function buscarPokemon() {
    getObjeto();

    let dat = nombre.value;

    // preparo petición
    let url = "https://pokeapi.co/api/v2/pokemon/";
    xhr.open("GET", url+dat , true);

    // formato de respuesta JSON
    xhr.setRequestHeader("accept", "application/json");

    // función que procesa la respuesta
    xhr.onreadystatechange = procesarPokemon; 

    // enviar petición
    xhr.send();

}
function procesarPokemon() {
    if (xhr.readyState == 4) {
        let datos = JSON.parse(xhr.responseText);
        
        // atributos de objeto datos
        //console.log(Object.keys(datos));
        
        let nombre = datos.name;
        let img1 = datos.sprites.front_default;
        let img2 = datos.sprites.back_default;

         
        let td = crearTablaInput(nombre, img1, img2);
        document.getElementById("resultado").appendChild(td);
        
    }
}



// Creo la estructura con los parámetros que le pasaremos
function crearLista(nombre, url) {
    var html = `<li><a href="${url}" target="_blank">${nombre}</a></li>
                `;
    return htmlToElement(html);
}

// Creo la estructura con los parámetros que le pasaremos
function crearTablaInput(nombre, img1 , img2) {
    var html = `<tr class="text-center">
                    <td>${nombre}</td>
                    <td><img src="${img1}" alt="Imagen 1 ${nombre}"></td>
                    <td><img src="${img2}" alt="Imagen 2 ${nombre}"></td>
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