$(document).ready(initializeEvents);

function initializeEvents(){
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);

}


//Combina los efectos del 13 y el 14
function hideBox(){
    $("#descripcion").fadeTo("slow","0.5").hide("slow");
}

function showBox(){
    $("#descripcion").show().fadeTo("slow","1");
}