class Direccion{
    #calle;
    #numero;
    #poblacion;

    // constructor
    constructor(calle, numero, poblacion){
        this.setCalle(calle);
        this.setNumero(numero);
        this.setPoblacion(poblacion);
    }

    getCalle(){
        return this.#calle;
    }
    setCalle(calle){
        this.#calle = calle;
    }

    getNumero(){
        return this.#numero;
    }
    setNumero(numero){
        this.#numero = numero;
    }

    getPoblacion(){
        return this.#poblacion;
    }
    setPoblacion(poblacion){
        this.#poblacion = poblacion;
    }

    // métodos
    toString() { 
        let msj = " Calle: "+this.#calle+
                  ", número: "+this.#numero+
                  ", población: "+this.#poblacion;
        return msj;
    }
}