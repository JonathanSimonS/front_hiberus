//Creamos un fragment para no tener que hacer inserciones todo el rato
let fragment = document.createDocumentFragment();

let getAparcamientos = async (url) => {
    try {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();

        let aparcamientos = datos.result;

        aparcamientos.forEach(aparcamiento => {
            
            // creamos elementos contenedores
            let $tarjeta = document.createElement('section');
            let $titulo = document.createElement('div');
            let $plazas = document.createElement('div');
            let $anclajes = document.createElement('div');
            
            // // añadimos id y class
            // let $mapa = document.createElement('div');
            // $mapa.setAttribute("id", "seccion_mapa");
            // $mapa.classList.add('seccion_mapa');

            // añadimos elementos de texto
            $titulo.innerHTML = `<h2>${aparcamiento.title}</h2>`
            $plazas.innerHTML = `<h3>Plazas: ${aparcamiento.plazas}</h3>`
            $anclajes.innerHTML = `<h3>Anclajes: ${aparcamiento.anclajes}</h3></br>`


            // metemos divs dentro de section
            $tarjeta.appendChild($titulo);
            $tarjeta.appendChild($plazas);
            $tarjeta.appendChild($anclajes);
            
            // añadimos class = tarjeta 
            $tarjeta.classList.add('tarjeta');
            fragment.appendChild($tarjeta);
            
            
        });
        
        // añadimos el fragmento creado al div container
        container.appendChild(fragment);

    } catch (error) {
        console.log(error);
    }
}

getAparcamientos("https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/equipamiento/aparcamiento-bicicleta.json");