
export function mostrar_mapa(lat, lon, id, lugar) {
    // Comprobamos que el navegador soporta geolocalizacion
    if (navigator.geolocation) {
        // Obtener la posicion

        // var lon = -0.8553835757580339;
        //  var lat = 41.65723005705326;
        //  var id = "mapa2";

        // console.log("mostrar mapa lat: " + lat );
        // console.log("mostrar mapa lon: " + lon );
        // console.log("mostrar mapa id: " + id );
        // console.log("HOLA : " + id );
        

        navigator.geolocation.getCurrentPosition(function (position) {
            mostrarLocalizacion(lat, lon, id, lugar)
        }, manejarError);
    } else {
        alert("Tu navegador no soporta geolocalizacion");
    }
}

 function mostrarLocalizacion(lat, lon, id, lugar) {
    // Obtener las coordenadas y generar el objeto googlemaps

    var pos = new google.maps.LatLng(lat, lon);
    // Configuracion del mapa
    var opciones = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    // Crear el mapa
    //al ser by id solo obtenemos un sitio
    // console.log("POS: " + pos);
    
    
    // console.log("ID: " + id);
    // console.log("Tipo: " + typeof(id));
    
        
        var mapa =  new google.maps.Map(document.getElementById(id), opciones);
        // var mapa = new google.maps.Map(document.getElementById(encabezado), opciones);
  

    // Mostrar la ubicacion en el mapa
    new google.maps.InfoWindow({ map: mapa, position: pos, content: lugar });

    // Pedir que nos centre el mapa
    mapa.setCenter(pos);

}

function manejarError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("No tienes permiso del usuario");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("No se puede detectar ubicacion");
            break;
        case error.TIMEOUT:
            alert("Tiempo de espera agotado");
            break;
        case error.UNKNOWN_ERROR:
            alert("Error desconocido");
            break;
    }
}

// // Alternativa al <body onload="mostrar_mapa()">
// export async function iniciar(lat, lon, id) {



//     try {
//         // google.maps.event.addDomListener(window, 'load', mostrar_mapa(lat, lon, id));

//         // window.addEventListener('load', mostrar_mapa(lat, lon, id));
//         //         console.log("mostrar mapa lat: " + lat );
//         // console.log("mostrar mapa lon: " + lon );
//         // console.log("mostrar mapa id: " + id );
        
//         window.addEventListener('load', mostrar_mapa(lat, lon, id));
//     } catch (error){
//         // console.log("peta");
//         // console.log(error);
//     }
//     // iniciar(lat, lon, id);
// }
