class Factura{
    #cliente;
    #producto;
    #importe;
    #fecha;

    // constructor
    constructor(cliente, producto, importe, fecha){
        this.setCliente(cliente);
        this.setProducto(producto);
        this.setImporte(importe);
        this.setFecha(fecha);
    }

    getCliente(){
        return this.#cliente;
    }
    setCliente(cliente){
        this.#cliente = cliente;
    }

    getProducto(){
        return this.#producto;
    }
    setProducto(producto){
        this.#producto = producto;
    }

    getImporte(){
        return this.#importe;
    }
    setImporte(importe){
        this.#importe = importe;
    }

    getFecha(){
        return this.#fecha;
    }
    setFecha(fecha){
        this.#fecha = fecha;
    }

    // métodos
    toString() { 
        let msj = "Cliente: "+this.#cliente+
                  ", producto: "+this.#producto+
                  ", importe: "+this.#importe+
                  ", fecha: "+this.#fecha;
        return msj;
    }
}