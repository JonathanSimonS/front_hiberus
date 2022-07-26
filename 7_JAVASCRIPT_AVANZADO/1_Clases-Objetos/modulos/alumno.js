class Alumno {
    nombre;
    apellidos;
    nota;
    direccion;

    // constructor
    constructor(nombre, apellidos, nota, direccion=" \"Sin dirección\""){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.nota=nota;
        this.direccion=direccion;
    }

    // métodos
    toString() { 
        let msj = "Nombre: "+this.nombre+
                  ", apellidos: "+this.apellidos+
                  ", nota: "+this.nota+
                  this.direccion;
        return msj;
    }
}

// exporto la clase
export {Alumno};