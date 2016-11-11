let fs = require("fs");
let path = require("path");

    //Con expresiones lambda y modulo a exportar
    module.exports = function (directorio, extension, callback){
        fs.readdir(directorio,(error,ficheros)=>{
            if(error){
                //console.error("Error, Que habra pasado....   ", error);
                callback(error);
            }else{
                console.log("Expresiones lambda");
                ficheros = ficheros.filter((fichero)=>{
                    return path.extname(fichero) == "." +extension;
                });

                callback(null,ficheros);
                /*
                //El codigo original del ejemplo 4
                ficheros.forEach((fichero)=>{
                    if(path.extname(fichero)==extension){
                        //Imprime el nombre del fichero
                        console.log("lambda    " +fichero)
                        }
                }) 
                */           
            }//fin del else
        });//Fin de expresiones lambda
    }//fin del modulo export
    
    
    

