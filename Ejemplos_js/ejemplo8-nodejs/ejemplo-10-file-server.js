var http = require('http');

var fs = require('fs');

var server = http.createServer(enviarImagen);

function enviarImagen(request,response){
    response.writeHead(200,{'content-type':'image/png'});
    //C omo es un proceso lento, lo encadeno con el pipe
    fs.createReadStream('imagen.png').pipe(response);
}

/*
let variable1 = {};//es igual a let variable1 = new Object()
variable1.nombre = "juan";
variable1 = {};// es igual a variable1 = new Object(), nombre se ha perdido
console.log("Nombre sera undefined:   " +variable1.nombre);
*/

server.listen(8888);
console.log("Servidor iniciado en el puerto 8888")