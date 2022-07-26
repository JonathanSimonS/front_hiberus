import {Figura}    from "./figura.js";

class Circulo extends Figura{

    radio;

    constructor(x,y,radio){
        super(x,y);
        this.radio = radio;
    }

    // sobreescribimos los métodos heredados
    area(){
        return Math.PI * Math.pow(this.radio,2);
    }

    toString(){
        return super.toString() + " radio: "+this.radio;
    }
}

export {Circulo};