let i=20;

function contador() {

    // recoger msj desde hilo principal
    onmessage = (e) => {
        i = parseInt(e.data);
    }
    // Temporizador
    // setTimeout((recibo)=>{que hago}, 500);
    setTimeout(()=>{
        i+=2;
        // postMessage("Hola "+i+" desde Tarea 2"); // envio valor de i
        postMessage(i); // envio valor de i

        contador();
    }, 500);

}
contador();
