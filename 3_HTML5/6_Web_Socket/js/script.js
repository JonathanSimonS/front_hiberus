window.addEventListener("load", init);

let ws;

function init() {
    btnAbrir = document.getElementById("btnAbrirSocket");
    btnCerrar = document.getElementById("btnCerrarSocket");

    btnAbrir.addEventListener("click", abrir);
    btnCerrar.addEventListener("click", cerrar)
}

function abrir() {

    // creamos socket
    ws = new WebSocket("wss://javascript.info/article/websocket/demo/hello"); 

    // se ejecuta al abrir el socket
    ws.onopen = function() {
        ws.send("terrícola");
        alert("Enviado");
    }

    // que hacemos cuando recibimos un mensaje
    ws.onmessage = function(event) {
        let msj = event.data;
        alert(msj)
    }

    // se ejecuta al cerrar el socket
    ws.onclose = function() {
        alert("Socket cerrado");
    }

}
function cerrar() {
    ws.closed();
}