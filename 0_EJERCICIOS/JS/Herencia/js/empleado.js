import {Persona}    from "./persona.js";
class Empleado extends Persona{

    #sueldo;

    constructor(nombre,edad,sexo,sueldo=1200){
        super(nombre,edad,sexo);
        this.#sueldo = sueldo;
    }

    toString(){
        return super.toString() + ", sueldo: "+this.#sueldo+ " €";
    }
}

export {Empleado};