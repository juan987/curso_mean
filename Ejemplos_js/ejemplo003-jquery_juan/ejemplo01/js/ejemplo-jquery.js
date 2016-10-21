$(document).ready(inicializarEventosConJquery);

function presionarBotonConJquery(){
        alert("Boton con JQuery pulsado ");
}

function inicializarEventosConJquery(){
    $("botonjquery1").click(presionarBotonConJquery);
    $("botonjquery2").click(presionarBotonConJquery);
}