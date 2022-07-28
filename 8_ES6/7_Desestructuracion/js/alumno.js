class Alumno {
    nombre;
    apellidos;
    nota;

    // constructor
    constructor(nombre="Jonatan", apellidos="Simón Sánchez", nota=10){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.nota=nota;
    }

    // métodos
    toString() { 
        let msj = "Nombre: "+this.nombre+
                  ", apellidos: "+this.apellidos+
                  ", nota: "+this.nota;
        return msj;
    }
}
