class Producto{
    #id;
    #descripcion;
    #precio;
    #cantidad;

    // constructor
    constructor(id, descripcion, precio, cantidad){
        this.setId(id);
        this.setDescripcion(descripcion);
        this.setPrecio(precio);
        this.setCantidad(cantidad);
    }

    getId(){
        return this.#id;
    }
    setId(id){
        this.#id = id;
    }

    getDescripcion(){
        return this.#descripcion;
    }
    setDescripcion(descripcion){
        this.#descripcion = descripcion;
    }

    getPrecio(){
        return this.#precio;
    }
    setPrecio(precio){
        this.#precio = precio;
    }

    getCantidad(){
        return this.#cantidad;
    }
    setCantidad(cantidad){
        this.#cantidad = cantidad;
    }

    // métodos
    toString() { 
        let msj = this.#id+
                  this.#descripcion+
                  this.#precio+
                  this.#cantidad;
        return msj;
    }
}