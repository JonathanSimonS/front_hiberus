// let div = document.getElementById("mostrar");
window.addEventListener("load", init)

function init() {
    let dir = new Direccion("Lis Menor", 32, "Almería")
    let cliente = new Cliente("Jonatan", "45607148G", dir);

    let fecha = new Fecha(21,07,2022);
    let producto = new Producto(1, "Game Boy Color", 15, 3);

    let factura = new Factura(cliente, producto, producto.getCantidad()*producto.getPrecio() , fecha);

    let divCliente = crearDivCliente(cliente, dir);
    document.getElementById("mostrarCliente").appendChild(divCliente);

    let divFactura = crearDivFactura(factura);
    document.getElementById("mostrarFactura").appendChild(divFactura);

    let divProducto = crearDivProducto(producto);
    document.getElementById("mostrarProducto").appendChild(divProducto);

}

// Creo la estructura con los parámetros que le pasaremos
function crearDivDireccion(f) {
    var html = `<ul class="list-unstyled">
                    <li>Calle: ${f.getCalle()}</li>
                    <li>Número: ${f.getNumero()}</li>
                    <li>Población ${f.getPoblacion()}</li>
                </ul>`;
    return htmlToElement(html);
}
function crearDivCliente(c, d) {
    var html = `<ul class=" list-unstyled">
                    <li><strong>Enviar a:</strong></li>
                    <li>Nombre: ${c.getNombre()}</li>
                    <li>DNI: ${c.getDni()}</li>
                    <li>Calle: ${d.getCalle()}</li>
                    <li>Número: ${d.getNumero()}</li>
                    <li>Población: ${d.getPoblacion()}</li>
                </ul>`;
    return htmlToElement(html);
}
function crearDivProducto(p) {
    var html = `<tr class="text-center ">
                    <th>${p.getId()}</th>
                    <th>${p.getDescripcion()}</th>
                    <th>${p.getPrecio()}</th>
                    <th>${p.getCantidad()}</th>
                    <th>${p.getPrecio()*p.getCantidad()}</th>
                </tr>`;
    return htmlToElement(html);
}
function crearDivFactura(f) {
    var html = `<ul class=" list-unstyled">
                    <li>A fecha de: </li>
                    <li>${f.getFecha()}</li>
                </ul>`;
    return htmlToElement(html);
}

// Función para convertir un texto en nodos
function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result 
    template.innerHTML = html;
    return template.content.firstChild;
}