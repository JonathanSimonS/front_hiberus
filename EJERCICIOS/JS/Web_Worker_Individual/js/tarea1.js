let i=0;

function contador() {

    // recoger msj desde hilo principal
    onmessage = (e) => {
        i = parseInt(e.data);
    }
    // Temporizador
    // setTimeout((recibo)=>{que hago}, 500);
    setTimeout(()=>{
        i++;
        // postMessage("Hola "+i+" desde Tarea 1"); // envio valor de i
        postMessage(i); // envio valor de i
        contador();
    }, 500);

}
contador();
