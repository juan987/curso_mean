function presionTitulo1(){
    let mi_titulo = $("#titulo1");
    mi_titulo.css("color","#ff0000");
    mi_titulo.css("background-color", "#ffff00");
    mi_titulo.css("font-family", "Courier");
    
}

function presionTitulo2(){
    let mi_titulo = $("#titulo2");
    mi_titulo.css("color","#00ff00");
    mi_titulo.css("background-color", "#ffff00");
    mi_titulo.css("font-family", "Courier");
    
}

function inicializarEventosConJquery(){
    $("#titulo1").click(presionTitulo1);
    $("#titulo2").click(presionTitulo2);
}

$(document).ready(inicializarEventosConJquery);
