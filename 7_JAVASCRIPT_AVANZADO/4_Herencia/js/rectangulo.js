import {Figura}    from "./figura.js";

class Rectangulo extends Figura{

    base;
    altura;

    constructor(x,y){
        super(x,y);
        this.base=x;
        this.altura=y;   
    }

    // sobreescribimos los métodos heredados
    area(){
        return this.base*this.altura;
    }

    toString(){
        return "Base: "+ this.base +", Altura: "+ this.altura;
    }
}

export {Rectangulo};
