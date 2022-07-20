// En todas las funciones comprueba si se introducen números
function comprobar(operando1,operando2){
    var comprobante = null;
    if (isNaN(operando1) || isNaN(operando2)) {
        comprobante = false;
    } else {
        comprobante = true;
    }
    return comprobante;
}
function sumar(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    if (comprobar(operando1,operando2)) {
        var resultado = operando1+operando2;
        document.getElementById("resultado").innerHTML= resultado;
    } else {
        document.getElementById("resultado").innerHTML= "No es un número";
    }
}
function restar(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    if (comprobar(operando1,operando2)) {
        var resultado = operando1-operando2;
        document.getElementById("resultado").innerHTML= resultado;
    } else {
        document.getElementById("resultado").innerHTML= "No es un número";
    }
}
function multiplicar(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    if (comprobar(operando1,operando2)) {
        var resultado = operando1*operando2;
        document.getElementById("resultado").innerHTML= resultado;
    } else {
        document.getElementById("resultado").innerHTML= "No es un número";
    }
}
// En la funcion de dividir y mod, debemos comprobar que no sea 0
function dividir(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    if (comprobar(operando1,operando2)) {
        if (operando1===0 || operando2===0) {
            document.getElementById("resultado").innerHTML= "No se puede dividir por 0";
        } else{
            var resultado = operando1/operando2;
            document.getElementById("resultado").innerHTML= (Math.round(resultado*100)/100) ;
        }
    }   else {
        document.getElementById("resultado").innerHTML= "No es un número";
    }
}





































// function mod(){
//     var operando1 = parseFloat(document.getElementById("operando1").value);
//     var operando2 = parseFloat(document.getElementById("operando2").value);
//     if (comprobar(operando1,operando2)) {
//         if (operando1===0 || operando2===0) {
//             document.getElementById("resultado").innerHTML= "No se puede dividir por 0";
//         } else{
//         var resultado = operando1%operando2;
//         document.getElementById("resultado").innerHTML= resultado;
//         }
//     } else {
//         document.getElementById("resultado").innerHTML= "No es un número";
//     }
// }
// function potencia(){
//     var operando1 = parseFloat(document.getElementById("operando1").value);
//     var operando2 = parseFloat(document.getElementById("operando2").value);
//     if (comprobar(operando1,operando2)) {
//         var resultado = 1;
//         for(let i=0; i<operando2; i++){
//             resultado=resultado*operando1;
//         }
//         // Comprobamos si el resultado es un infinito
//         if (resultado==Infinity) {
//             document.getElementById("resultado").innerHTML= "Infinito";
//         } else {
//             document.getElementById("resultado").innerHTML= resultado;
//         }
//     } else {
//         document.getElementById("resultado").innerHTML= "No es un número";
//     }
// }