import {Empleado}    from "./empleado.js";
class Jefe extends Empleado{

    #bonus;
    #matricula;
    #gestion;

    constructor(nombre,edad,sexo,bonus=200,matricula="JHE209"){
        super(nombre,edad,sexo);
        this.#bonus = bonus;
        this.#matricula = matricula;
    }

    toString(){
        return super.toString() + ", bonus: "+this.#bonus+ ", matricula: "+this.#matricula;
    }
}
export {Jefe};