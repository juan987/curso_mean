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

console.log("\n Inicio ejemplos JS con Arrays");
testConArrays();
function testConArrays(){
    let mi_array = new Array();
    mi_array[0]=7;
    mi_array[1]="valor";
    mi_array.forEach(function(element) {
        console.log("Elemento: " +element);
    }, this);

    let me_otro_array = [];
    let otro = ["uno", 2, new Date()];


    let array_asociativo = new Array();
    array_asociativo["uno"] = 1;
    console.log("array asociativo: " +array_asociativo["uno"]);

    let persona = new Array();
    persona.nombre = "Ruben";
    persona.apellido1 = "Gomez";
    //Asigno la funcion sumaMinimoDos en el array de manera asociativa
    persona.sumaMinimoDos = sumaMinimoDos;
    //Para ejecutar:
    persona.sumaMinimoDos();//Muestra el error
    console.log("\n Nombre co0mpleto = " +persona.nombre +", " +persona.apellido1);
}



//Clase del 17 oct
console.log("Clase 17 oct");
function MiClase(campo1, campo2){
    this.clave1 = campo1;
    this.clave2 = campo2;
}

//Defino un prototipo dentro de MiClase
MiClase.prototype.miMetodo = function(){
    return this.clave1 + " - " +this.clave2;
}
var miObjeto = new MiClase("uno", "dos");
console.log("El valor de la clave 1 es: " +miObjeto.clave1);
console.log("Mi objeto tiene: " +miObjeto.miMetodo());

//Ejercicio, hacer un prototype para array que me devuelva un objeto concreto
Array.prototype.miMetodoContiene = function(objeto){
    for (let i = 0; i < this.length; i++){
        let elementoActual = this[i];
        if(elementoActual == objeto){
            return true;
        }
    }
    return false;

}
console.log("Caso de uso de miMetodoContiene");
let mi_array_de_prueba = [1,2,3,4,5];
console.log(mi_array_de_prueba.miMetodoContiene(2));

console.log("Caso de uso de expresiones regulares");
/texto a validar/.test("Si hay texto a validar entonces true");

console.log("Caso de uso de array asociativo");
let mi_info = {uno:1, dos:2, tres:3};//inicializador automatico de un array asociativo

console.log("Caso de uso de array asociativo con array");
let mi_info_con_array = [{uno:1, dos:2, tres:3}];//inicializador automatico de un array asociativo
mi_info_con_array[0].dos;//...en la posicion 0 estoy pidiento lo que hay en la etiqueta dos

console.log("Caso de uso de array asociativo con array 2");
let mi_info_con_array_2 = [{uno:1, dos:2, tres:{uno:1, dos:2, tres:3}}, {uno:1, dos:2, tres:3}];//inicializador automatico de un array asociativo
mi_info_con_array[0].tres.tres;//...en la posicion 0 estoy pidiento lo que hay en la etiqueta dos
