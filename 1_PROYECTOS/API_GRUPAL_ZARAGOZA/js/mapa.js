export function mostrar_mapa(lat, lon, id, lugar) {

    // Comprobamos que el navegador soporta geolocalizacion
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            mostrarLocalizacion(lat, lon, id, lugar)
        }, manejarError);
    } else {
        alert("Tu navegador no soporta geolocalizacion");
    }
}

function mostrarLocalizacion(lat, lon, id, lugar) {
    // Obtener las coordenadas y generar el objeto googlemaps

    let pos = new google.maps.LatLng(lat, lon);
    // Configuracion del mapa
    let opciones = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
      
    // aquí es donde se inserta el mapa
    let mapa =  new google.maps.Map(document.getElementById(id), opciones);

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