// creamos set
var conjunto = new Set();

// añadimos cosas
conjunto.add("Pera");
conjunto.add("Melocotón");
conjunto.add("Sandía");
conjunto.add("Platano");
conjunto.add("Melón");
// si ya está no lo vuelve a crear
conjunto.add("Melón");

console.log(conjunto);

// cantidad
console.log("Hay "+conjunto.size +" elementos.");

// comprobar
console.log("¿Existe Pera? "+conjunto.has("Pera"));

// borrar
conjunto.delete("Sandía");
console.log(conjunto);

// recorrer set
console.log("*** forOf ****");
for (const fruta of conjunto) {
    console.log(fruta);
}

console.log("*** forEach ****");
conjunto.forEach(fruta => {
    console.log(fruta);
});

//borrar todos
conjunto.clear();
console.log(conjunto);