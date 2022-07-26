window.addEventListener("load", init);

function init() {
    
    let btnP = document.getElementById("btnPulsame");
    btnP.addEventListener("click", esperar);


    // Promesas
    // una promesa es el resultado de una operación asíncrona
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu";
    let promesa = fetch(url);
    
    // si va bien
    promesa.then(resultado => console.log(resultado.json()));
    // si va mal
    promesa.catch(error => console.log("Ha habido un error "+error));

    // lanzar la petición de forma asíncrona
    llamada(url);
   
}
async function llamada(url){
    let respPokemon = fetch(url)
        .then(response => console.log(response.json()))
        .catch( err => console.error(err));

    return respPokemon;
}

function esperar() {

    // Otra funcion es un callback. 
    // Es una función que se invoca como parámetra de otra función
    // https://pokeapi.co/api/v2/pokemon/pikachu 

    // setTimeout(otra_funcion, tiempo)
    setTimeout(() => {
        alert("Hemos esperado 2 segundos")
    }, 2000);
}