window.addEventListener("load", init);

async function init() {

    let div = document.getElementById("resultado");
    
    // lanzar la petición de forma asíncrona, 
    // funcion debe ser asincrona y la llamada a la funcion con await
    let imagen = await llamada();

    console.log(imagen);
    
    let td = mostrar(imagen);
    console.log(td);
    div.appendChild(td);

    // OTRO MÉTODO
    // fetch("https://www.extradigital.es/wp-content/uploads/2019/06/Hiberus.jpg")
    // .then((resul) => {
    //     var img = document.createElement('img');
    //     img.src = resul.url;
    //     document.body.appendChild(img);
    // })

}
async function llamada(){
    var url = "https://www.extradigital.es/wp-content/uploads/2019/06/Hiberus.jpg"; 
    // let url2 = "https://www.hiberus.com/sites/default/files/2019-10/22._hiberus_tecnologia.jpg";
    
    let resp = await fetch(url);
    let img = resp.url;
    
    console.log(img);

    return img;
}

// Creo la estructura con los parámetros que le pasaremos
function mostrar(img) {
    var html = `<li>
                    <img src="${img}">
                </li>
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