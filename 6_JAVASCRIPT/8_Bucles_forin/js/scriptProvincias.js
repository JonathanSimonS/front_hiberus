window.addEventListener("load",init);

function init() {
    llenarSelect();

    let provincias = document.getElementById("provincias");
    provincias.addEventListener('change', cargarPoblaciones);

}

function provincias() {
    var provincias = [
        ["Almería", ["Fines","Huercal-Overa"] ],
        ["Teruel",  ["Teruel Capital", "Calamocha"] ],
        ["Murcia", ["Cartagena", "Bullas", "Mula", "La Manga"] ],
        ["Soria", ["Medinaceli", "Soria Capital"] ],
    ];
    return provincias;
}
function llenarSelect() {
    let array = provincias();

    for (let i = 0; i <=array.length-1; i++) {
        var opcion = new Option(array[i][0], i); // segundo i es el del value
        document.getElementById("provincias").appendChild(opcion);
    }

}
function cargarPoblaciones() {
    let valor = document.getElementById("provincias").value;
    let array = provincias();

    // limpio
    document.getElementById("poblaciones").options.length = 0;

    for (let i = 0; i <= array[valor][1].length-1; i++) {
        var opcion = new Option(array[valor][1][i], i); // segundo i es el del value
        document.getElementById("poblaciones").appendChild(opcion);
    }

}