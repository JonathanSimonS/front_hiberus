class Cliente{

    // propiedades privadas
    #nombre;
    #dni;
    #direccion;

    // constructor
    constructor(nombre, dni, direccion){
        this.setNombre(nombre);
        this.setDni(dni);
        this.setDireccion(direccion);
    }

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getDni(){
        return this.#dni;
    }
    setDni(dni){
        this.#dni = dni;
    }

    getDireccion(){
        return this.#direccion;
    }
    setDireccion(direccion){
        this.#direccion = direccion;
    }

    toString(){
        let msj = "Nombre: "+this.#nombre+
                  ", dni: "+this.#dni+
                  ". Direccion: "+this.#direccion;
        return msj;
    }
}