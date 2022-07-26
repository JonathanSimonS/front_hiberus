class Producto{
    #id;
    #descripcion;
    #precio;
    #cantidad;

    // #contador=0;
    static #contador=0;

    // constructor
    constructor(id, descripcion, precio, cantidad){
        // this.#contador++;
        // this.#id = this.#contador;
        // this.setId(id);

        Producto.#contador++;
        this.#id = Producto.#contador;

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

    static getContador(){
        return Producto.#contador;
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
export {Producto};