$(document).ready(initializeEvents);

function initializeEvents(){
    //$("a").mouseover(inMouseEvent);
    //$("a").mouseout(outMouseEvent);


//Con el hover es lo mismo que las dos lineas anteriores
    $("a").hover(inMouseEvent, outMouseEvent);
}

function inMouseEvent(){
    $(this).css("background-color", "#ff0")
}

function outMouseEvent(){
    $(this).css("background-color", "#fff")
}