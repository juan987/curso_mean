
let moduloDeFiltrado = require("./ejemplo-05-listar-ficheros-module.js");

let extension = process.argv[3]

//Se da como entrada el directorio que se quiere listar
let directorio = process.argv[2];

function queHacerCuandoDevuelvaLosFicheros(error, ficheros){
    if(error){
        console.error("Error al listar", error);
    }else{
        ficheros.forEach((fichero)=>{
            console.log(fichero);
        })
    }
}

moduloDeFiltrado(directorio, extension, queHacerCuandoDevuelvaLosFicheros);