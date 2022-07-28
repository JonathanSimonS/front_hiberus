import { mostrar_mapa } from './codigo.js';
//Creamos un primer fragment para no tener que hacer inserciones todo el rato
var $fragment = document.createDocumentFragment();

let getAparcamientos = async (url) => {
    try {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();

        let aparcamientos = datos.result;

        console.log(aparcamientos[0]);

        let contador = 0;

        //FOR EACH
        aparcamientos.forEach(aparcamiento => {
            contador++;

            let $tarjeta = document.createElement('section');
            let $titulo = document.createElement('div');
            let $plazas = document.createElement('div');
            let $anclajes = document.createElement('div');
            let $mapa = document.createElement('div');

            $mapa.setAttribute("id", "mapa" + contador);
            $mapa.setAttribute("class", "mapa");


            let lat = aparcamiento.geometry.coordinates[1];
            let lon = aparcamiento.geometry.coordinates[0];
            let id = "mapa" + contador;

            // como iniciar el iniciar
            // let ini = iniciar(lat, lon, id);

            //  console.log(lat);
            //  console.log(lon);
            //  console.log(id);
            
            
            
            $titulo.innerHTML = `<h2>${aparcamiento.title}</h2>`
            $plazas.innerHTML = `<h3>Plazas: ${aparcamiento.plazas}</h3>`
            $anclajes.innerHTML = `<h3>Anclajes: ${aparcamiento.anclajes}</h3></br>`
            $mapa.innerHTML = `<h3>Mapa:  </h3>`

            $tarjeta.appendChild($titulo);
            $tarjeta.appendChild($plazas);
            $tarjeta.appendChild($anclajes);
            $tarjeta.appendChild($mapa);
            
            let lugar = aparcamiento.title;
            mostrar_mapa(lat, lon, id, lugar);
           
            
            
            // Le aÃ±adimos class = tarjeta 
            $tarjeta.classList.add('tarjeta');
            $fragment.appendChild($tarjeta);



        });

        container.appendChild($fragment);



    } catch (error) {
        console.log(error);
    }
}

getAparcamientos("https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/equipamiento/aparcamiento-bicicleta.json");
