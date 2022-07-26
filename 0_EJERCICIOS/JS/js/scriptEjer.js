window.addEventListener("load",init);

function init(){

    // nombre de navegador
    var nav = navigator.userAgent;
    document.getElementById("nave").innerText = nav;

    // resolución de pantalla
    var anchura = screen.width;
    var altura = screen.height;
    document.getElementById("reso").innerText = anchura + " x " + altura;
    document.getElementById("cook").innerText = navigator.cookieEnabled;
    document.getElementById("url").innerText = location.href;

    
}

