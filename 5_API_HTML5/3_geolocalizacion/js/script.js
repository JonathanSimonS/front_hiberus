window.addEventListener("load", init);

function init() {
    // var select = document.getElementById("")
    mostrarMapa();
}

function mostrarMapa() {

    // comprobamos si soporta
    if (!navigator.geolocation) alert("No soporta la geolocalización");

    // obtengo posición
    navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
}

function mostrarLocalizacion(posicion) {
    // obtener coordenadas y generar el objeto googleMaps
    // alert(posicion.coords.longitude + "\n" + posicion.coords.latitude)
    let pos = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude)
    
    // configuraciones del mapa
    let opciones = {
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
    };

    // creo el mapa
    let mapa = new google.maps.Map(document.getElementById("seccion_mapa"), opciones);

    // mostrar ubicacion del mapa
    new google.maps.InfoWindow({
        map: mapa,
        position:pos,
        content:"Estás aqui"
    });

    mapa.setCenter(pos);

    btnAcercar.addEventListener("click", () => mapa.setZoom(++mapa.zoom));
    btnAlejar.addEventListener("click", () => mapa.setZoom(--mapa.zoom));
    console.log(tipo);
    // mapa.setMapTypeId(google.maps.MapTypeId[tipo.value]); 
    tipo.addEventListener("change", () => mapa.setMapTypeId(google.maps.MapTypeId[tipo.value]));

}
function manejarError(error) {
    console.log(error);

    switch (error.code) {
        case 1:
            alert("No tienes permiso del usuario");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("No se detecta ubicación");
            break;
        case error.TIMEOUT:
            alert("Tiempo agotado");
            break;
        case error.TIMEOUT:
            alert("No tienes permiso del usuario");
            break;
        default:
            break;
    }
}
// alternativa al body onload="mostrarMapa"
//google.maps.event.addDomListener(window, "load", mostrarMapa);