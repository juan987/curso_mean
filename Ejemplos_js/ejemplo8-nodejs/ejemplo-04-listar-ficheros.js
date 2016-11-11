let fs = require("fs");
let path = require("path");

//Se da como entrada el directorio que se quiere listar
let directorio = process.argv[2];

//Leemos el directorio de forma asincrona, y pasamos una funcion para recoger los resultados
fs.readDir(directorio, operarConResultados);

function operarConResultados(error, ficheros){
    if(error){
        console.error("Error, Que habra pasado....   ", error);
    }else{
        
    }
}