let fecha = new Fecha(21,3,2022);

let fecha2 = new Fecha();
fecha2.dia = 30;
fecha2.mes = 3;
fecha2.ano = 2022;

let div = document.getElementById("mostrarFecha");
div.innerHTML = fecha.mostrarFecha()+"<br>";
div.innerHTML += fecha2.mostrarFecha()+"<br><br>";

let fecha3 = new FechaEncapsulada(2100,111,2);
let fecha4 = new FechaEncapsulada(2,11,2020);
div.innerHTML += fecha3.mostrarFecha()+"<br>";

// intento modificar dia
div.innerHTML += fecha4.mostrarFecha()+"<br>";
fecha4.dia=13;
// si el set no es privado se puede cambiar
// fecha4.setDia(13);
div.innerHTML += fecha4.mostrarFecha();
