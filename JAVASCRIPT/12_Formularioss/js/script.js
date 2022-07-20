function mostrar(){
    // id_formulario.name.value
    console.log("Nombre: " + formulario.nombre.value);
    console.log("Password: " + formulario.pw.value);
    console.log("Apellido: " + formulario.apellido.value);
    console.log("Edad: " + formulario.edad.value);
    console.log("Email: " + formulario.email.value);
    console.log("Sitio Web: " + formulario.url.value);
    console.log("Telefono: " + formulario.telefono.value);
    console.log("Fecha nacimiento: " + formulario.nacimiento.value);
    console.log("Fichero adjunto: " + formulario.fichero.value);
    console.log("Sexo: " + formulario.sexo.value);
    console.log("Fecha reserva: " + formulario.reserva.value);
    console.log("Hora entrada: " + formulario.hora.value);
    console.log("Color: " + formulario.color.value);

    for(var i in document.getElementsByName("aficion")){
        if (document.getElementsByName("aficion")[i].checked){
            console.log("Hobbie: " + 
                document.getElementsByName("aficion")[i].value );
        }
    }

    console.log("Nivel de estudios: " + formulario.estudios.value);

    for (var i in document.getElementById("cursos").options){
        if (document.getElementById("cursos").options[i].selected){
            console.log("Cursos: " + 
                document.getElementById("cursos").options[i].text);
        }
    }

    console.log("Valoracion: " + formulario.valoracion.value);
}