$(document).ready(initializeEvents);

function initializeEvents(){
    $("#peticion_ajax").click(dameFichero);

}


//Combina los efectos del 13 y el 14
function dameFichero(){
    $("#contenido_de_ajax").load("ejempklo-17-fichero_alojado_en_servidor.txt");
}
