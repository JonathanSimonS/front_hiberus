window.addEventListener("load", init);

function init() {
    let btnG = document.getElementById("btnGuardar");
    let btnR = document.getElementById("btnRecuperar");

    btnG.addEventListener("click", guardarDatos);
    btnR.addEventListener("click", recuperarDatos);

}

function guardarDatos() {
    localStorage.setItem("nombreUser", nombre.value)
    alert("Nombre almacenado");
}

function recuperarDatos() {
    let recuperado = localStorage.getItem("nombreUser");
    if (recuperado != undefined ) {
        nombre.value = recuperado;
    } else {
        alert("No almacenado");
    }
}