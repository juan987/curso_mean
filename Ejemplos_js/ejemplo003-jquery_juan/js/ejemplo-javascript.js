//Esto es como cuando en el body ponemos onload
addEvent(window,'load',inicializarEventos,false);

function addEvent(elemento, nomevento, funcion,captura){
    if(elemento.attachEvent){
            //agregar un evento a un componente recibido como elemento
            elemento.attachEvent('on' +nomevento,funcion);
            return true
    }else //en el caso que elemento no tiene metodo attachEvent, uso addEventListener
    {
        if(elemento.addEventListener){
            elemento.addEventListener(nomevento,funcion,captura);
            return true;

        }
        return false;
    }
}



function inicializarEventos(){
    let botonjs1 = document.getElementById("botonjs1");
    addEvent(botonjs1, 'click', presionarBotonConJavaScript, false);

    let botonjs2 = document.getElementById("botonjs2");
    addEvent(botonjs2, 'click', presionarBotonConJavaScript, false);
}


function presionarBotonConJavaScript(){
    alert("Boton con javascript pulsado");
}