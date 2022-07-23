class Direccion{
    calle;
    numero;
    poblacion;

    // constructor
    constructor(calle, numero, poblacion){
        this.calle=calle;
        this.numero=numero;
        this.poblacion=poblacion;
    }

    // métodos
    toString() { 
        let msj = ", calle: "+this.calle+
                  ", numero: "+this.numero+
                  ", población: "+this.poblacion;
        return msj;
    }
}

// exporto la clase
export {Direccion};