class Fecha{

    // propiedades privadas
    #dia;
    #mes;
    #ano;

    // constructor
    constructor(dia, mes, ano){
        this.setDia(dia);
        this.setMes(mes);
        this.setAno(ano);
    }

    getDia(){
        return this.#dia;
    }
    setDia(dia){
        if(dia<1 || dia>=31){
            this.#dia = 1;
        } else{
            this.#dia = dia;
        }
    }

    getMes(){
        return this.#mes;
    }
    setMes(mes){
        if(mes<1 || mes>12){
            this.#mes = 1;
        }else{
            this.#mes = mes;
        }
    }

    getAno(){
        return this.#ano;
    }
    setAno(ano){
        if(ano<1993 || ano>2022){
            this.#ano = 2022;
        } else{
            this.#ano = ano;
        }
    }

    toString(){
        // 21/07/2022
        let fecha = this.#dia +"/"+this.#mes +"/"+this.#ano;
        return fecha;
    }
}