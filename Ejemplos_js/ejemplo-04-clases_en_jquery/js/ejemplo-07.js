$(document).ready(initializeEvents);

function initializeEvents(){
    $(document).mousemove(moveDetected);


}

function moveDetected(event){
    $("#coordx").text("Coordenada x es igual a: " +event.clientX);
    $("#coordy").text("Coordenada y es igual a: " +event.clientY);
}
