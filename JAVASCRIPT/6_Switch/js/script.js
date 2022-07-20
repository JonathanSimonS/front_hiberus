window.addEventListener("load",init);

var botonR = document.getElementById("btn1");
var botonV = document.getElementById("btn2");
var botonA = document.getElementById("btn3");

function init() {
    botonR.addEventListener('click', cambiaColor);
    botonV.addEventListener('click', cambiaColor);
    botonA.addEventListener('click', cambiaColor);
    // preguntarSexo();
}
function cambiaColor() {
    var boton = event.target.id;

    switch (boton) {
        case "btn1":
            document.getElementById("btn1").className = "rojo";
        break;
        case "btn2":
            document.getElementById("btn2").className = "verde";

        break;
        case "btn3":
            document.getElementById("btn3").className = "azul";

        break;
        default:
            break;
    }
}


function preguntarSexo() {
    let sexo = window.prompt("Dime tu sexo:");

    switch (sexo) {
        case "hombre":
            alert("Eres hombre");
            break;
        case "mujer":
            alert("Eres mujer");
        break;
        default:
            alert("Desc");
            break;
    }
}