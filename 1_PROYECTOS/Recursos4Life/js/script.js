// SCROLL
window.onscroll = function() { subir() };

const botonArriba = document.getElementById("boton-scroll");

    function subir() {
        if (document.documentElement.scrollTop > 10) {
            botonArriba.className = "boton-scroll-aparece";
        } else {
            botonArriba.className = "";
        }
    }