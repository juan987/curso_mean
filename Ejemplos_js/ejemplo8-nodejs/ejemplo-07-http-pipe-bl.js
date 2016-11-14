//Cargamos el modulo http.
var http = require('http');
//Usamos el modulo buffer bl.
var bl = require('bl');

http.get('http://www.google.es',(response)=>{
    response.pipe(
        bl((error, data)=>{
            if(error){
                return console.error('Error al procesar la peticion.....    ' +error);
            }else{
                data = data.toString();
                console.log('numero de caracteres :    ' +data.length);
                console.log('data: \n' +data);
                
            }
        })
    )
})//fin http.get