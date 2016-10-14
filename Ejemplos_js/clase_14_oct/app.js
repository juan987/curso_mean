console.log("Hola mundo!");

variablesGlobales = "variableGlobal";
var variablesGlobalesConVar = "Sigue siendo una variable global";

function mi_funcion_con_var(){
    var otraVariable = "Esto es una variable local";
    for(var i = 0; i < 10; i++){
        console.log("valor de i al final:  " +i);
    }
    console.log("valor de i al final:  " +i);

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

//14 oct
console.log("tipo de datos");
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "siete";

//fechaDeEstreno es una ref a pos de memoria 0x23467182
var fechaDeEstreno = new Date();
var otraFecha = fechaDeEstreno;
otraFecha.setFullYear(1989);
//console.log("\n Fecha de estreno: " +fechaDeEstreno.getFullYear());

cambiarYear(otraFecha);

function cambiarYear(fecha){
    //TODO: asegurarse que lo que llega es una fecha
    fecha.setFullYear(2011);
    console.log("\n Fecha de la funcion cambiarYear: " +fecha.getFullYear() +"\n");
}
console.log("\n fechaDeEstreno: " +fechaDeEstreno.getFullYear());
console.log("\n otraFecha: " +otraFecha.getFullYear() +"\n");



console.log("Resultado type of numerico: " +typeof tipoDeDatoNumerico);
console.log("Resultado type of cadena: " +typeof tipoDeDatoCadena);
console.log("Resultado de un new Date(): " +typeof fechaDeEstreno);


pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.43543);
    console.log("\n Valor almacenado: " +numero.valueOf());
    console.log("\n Valor almacenado fixed: " +numero.toFixed());
    console.log("\n Valor almacenado fixed : " +numero.toFixed(4));
    console.log("\n Valor almacenado 2: " +numero.valueOf());

}





//Referencias
console.log("\n"  +"Trabajar con Referencias \n");

function pruebaDeArgumentos(argumento){
    console.log("\n Numero de parametros enviados: " +arguments.length);
    console.log("\n Numero de parametros esperados: " +arguments.callee.length);
    for(let i=0; i<arguments.length; i++){
        console.log("Posicion: " +i +" valor: " +arguments[i]);
    }
}

pruebaDeArgumentos();
pruebaDeArgumentos(1);
pruebaDeArgumentos("hola", 3, 78, new Date());
console.log("Adios mundo cruel!");

//Ejercicio de suma con callee
function sumaMinimoDos(num1, num2){
    if(arguments.length < arguments.callee.length){
        //imprimeNUmArgMenorDos();
        console.log("Introduzca dos numeros como minimo")
        return "error";
    }
    let sumaResult = 0;
    let listaNoNumericos = "";
    let numeroDeSumandos = 0;
    for(let i=0; i<arguments.length; i++){
        //console.log("Posicion: " +i +" valor: " +arguments[i]);


        if (typeof arguments[i] != 'number') {
            listaNoNumericos += "\n" + arguments[i];
        }else
        {
            sumaResult+= arguments[i];
            numeroDeSumandos++;

        }
        
    }

    if(numeroDeSumandos < 2){

        console.log("Introduzca dos numeros como minimo")
        return "error";

    }else
    {

    

    console.log("\n Lista de valores no numericos: " +listaNoNumericos);
    console.log("\n Resultado de la suma: " +sumaResult);
    return  "ok";
    }

}//Fin de sumaMinimoDos

//Caso 1
console.log("\n Caso1");
sumaMinimoDos();
console.log("\n Caso2");
sumaMinimoDos(2);
console.log("\n Caso3");
sumaMinimoDos(2,3);
console.log("\n Caso4");
sumaMinimoDos(2,new Date(), "casa",3);
console.log("\n Caso5");
sumaMinimoDos(2,new Date(), "casa");