class Fecha{
    // propiedades públicas
    dia;
    mes;
    ano;

    // constructor
    constructor(dia, mes, ano){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    get getDia(){
        
    }

    mostrarFecha(){
        // 21/07/2022
        let fecha = this.dia +"/"+this.mes +"/"+this.ano;
        return fecha;
    }
}