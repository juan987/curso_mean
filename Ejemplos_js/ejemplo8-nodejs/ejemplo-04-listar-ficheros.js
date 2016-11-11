let fs = require("fs");
let path = require("path");
let extension = process.argv[3]

//Se da como entrada el directorio que se quiere listar
let directorio = process.argv[2];

//Leemos el directorio de forma asincrona, y pasamos una funcion para recoger los resultados
fs.readdir(directorio, operarConResultados);

function operarConResultados(error, ficheros){
    if(error){
        console.error("Error, Que habra pasado....   ", error);
    }else{
        ficheros.forEach(operacionPorFichero)
    }
}

    function operacionPorFichero(fichero){
        if(path.extname(fichero)==extension){
            //Imprime el nombre del fichero
            console.log("normal    " +fichero)
        }
    }

    //Con expresiones lambda
    fs.readdir(directorio,(error,ficheros)=>{
        if(error){
            console.error("Error, Que habra pasado....   ", error);
        }else{
            ficheros.forEach((fichero)=>{
            if(path.extname(fichero)==extension){
                //Imprime el nombre del fichero
                console.log("lambda    " +fichero)
                }
            })            
        }
    });
    
    
    

