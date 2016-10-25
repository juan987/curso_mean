$(document).ready(initializeEvents);

function initializeEvents(){
    $("#boton1").click(deleteAll);
    $("#boton2").click(restoreAll);
    $("#boton3").click(addLastElement);
    $("#boton4").click(addFirstElement);
    $("#boton5").click(deleteLastElement);
    $("#boton6").click(deleteFirstElement);
    $("#boton7").click(deleteFirstAndSecond);
    $("#boton8").click(deletePreAndLast);

}

function deleteAll(){
    $("ul").empty();
}

function restoreAll(){
    $("ul").html("<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>");
}

function addLastElement(){
    $("ul").append("<li>Agrego un item al final de la lista</li>")
}

function addFirstElement(){
    $("ul").prepend("<li>Agrego un item al principio</li>")
}

function deleteLastElement(){
    let posicion = $("li").length-1;
    //obtengo el elemento li de la ultima posicion y lo elimino con remove
    $("li").eq(posicion).remove();
}

function deleteFirstElement(){
    $("li").eq(0).remove();
}




//Estas dos funciones no tienen boton. es para ver el less than y el greater than
function deleteFirstAndSecond(){
    //lt es less than
    $("li:lt(2)").remove();
}

//eliminar los dos ultimos
function deletePreAndLast(){
    let posicion = $("li").length-3;
    //obtengo el elemento li de la ultima posicion y lo elimino con remove
    //gt es greater than
    $("li:gt("+posicion+")").remove();
}

