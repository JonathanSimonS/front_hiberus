// FORMA NUEVA DE CREAR CLASES
class Persona{

    #nombre;
    #edad;
    #sexo;

    constructor(nombre="Antonio",edad=28,sexo="H"){
        // llamaría al método set
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    // NOMBRE
    get nombre() {
        return this.#nombre;
    }
    set nombre(value) {
        this.#nombre = value;
    }

    // EDAD
    get edad() {
        return this.#edad;
    }
    set edad(value) {
        this.#edad = value;
    }

    // SEXO
    get sexo() {
        return this.#sexo;
    }
    set sexo(value) {
        this.#sexo = value;
    }

    toString(){
        return "Nombre: "+this.#nombre + ", edad: "+this.#edad + ", sexo: "+this.#sexo;
    }
}
export {Persona};