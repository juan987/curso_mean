//Leer un fichero del disco duro
console.log("Ejemplo de lectura de un fichero")
//Con require carga desde el node module de la carpeta lib/  de node
// el modulo fs (file system)
let fs = require("fs");
let fichero = process.argv[2];
fs.readFile(fichero, miFuncionAsincrona);

//Se ejecutan de forma estandar, primero se chequea si hay error, y luego se sigue
function miFuncionAsincrona(error, contenido){
    if(error){
        console.log("Console.log, Ha habido un error:   " +error);
        //Usamos el console.error
        console.error("Console.error, Error al ejecutar la funcion asincrona", error);
    }else{
        //Convierte a string el objeto que me devuelve
        let numeroDeFilas = contenido.toString().split('\n').length;
        console.log("El fichero:  " +fichero  +"\ntiene numero de lineas:  " 
                +numeroDeFilas);
    }
}



