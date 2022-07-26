// crear
var mapa = new Map();

// agregar
mapa.set("Pera", 1.30);
mapa.set("Melón", 0.50);
mapa.set("Naranja", 1.80);
mapa.set("Sandía", 2.30);

mapa.set("Sandía", 1.30);

console.log(mapa);

// coger elemento
console.log(mapa.values());

console.log(mapa.size);

// métodos útiles
for (const fruta of mapa.keys()) {
    console.log(fruta);
}
for (const precio of mapa.values()) {
    console.log(precio);
}
for (const [fruta, precio] of mapa.entries()) {
    console.log(fruta + " a " +precio);
}
mapa.forEach(item => {
    console.log("forEach "+item);
})