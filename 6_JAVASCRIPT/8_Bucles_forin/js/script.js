var nombres = ["Jonatan", "Anabel", "Luisa", "Luis"];
        
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);            
}
for (const i in nombres) {
    console.log(nombres[i]);
}

var div = document.getElementById("contenedor");
console.log(div);

var lista = document.createElement("ul");

div.appendChild(lista);

//  bucle for in
for (const i in nombres) {
    var elemento = document.createElement("li");
    elemento.innerText = nombres[i];
    lista.appendChild(elemento);
}

// bucle for of
for (const nombre of nombres) {
    console.log(nombre);
}