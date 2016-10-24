$(document).ready(initializeEvents);

function initializeEvents(){
    $("td").mousedown(downEvent);//Click de raton
    $("td").mouseup(upEvent);//Levanta el boton del click
}

function downEvent(){
    $(this).css("background-color", "#ff0");
}

function upEvent(){
    $(this).css("background-color", "#fff");
}

