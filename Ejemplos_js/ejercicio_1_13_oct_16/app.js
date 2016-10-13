console.log("Hola mundo!");

variablesGlobales = "variableGlobal";
var variablesGlobalesConVar = "Sigue siendo una variable global";

function mi_funcion_con_var(){
    var otraVariable = "Esto es una variable local";
    for(var i = 0; i < 10; i++){
        console.log("valor de i al final:  " +i);
    }
    console.log("valor de i al final fuera:  " +i);

}

function mi_funcion_con_let(){
    let otraVariable = "Esto es una variable local";
    for(let i = 0; i < 10; i++){
        console.log("valor de i al final 1:  " +i);
    }
    //Buscar una condicion para evaluar si la variable existe
    //console.log("valor de i al final 2:  " +i);

}


mi_funcion_con_var();
mi_funcion_con_let();
console.log("Adios mundo cruel!");