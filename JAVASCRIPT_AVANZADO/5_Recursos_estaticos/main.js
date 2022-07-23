import {Producto} from './js/producto.js';

// let div = document.getElementById("mostrar");
window.addEventListener("load", init)

function init() {
    let p1 = new Producto(1, "Sandía",1.15,2);
    let p2 = new Producto(2, "Nuez",5,1);
    let p3 = new Producto(3, "Uva",2.05,10);

    console.log(p1);
    console.log(p2);
    console.log(p3);

}