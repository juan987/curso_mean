var http = require('http');
var url = require("url");

var server = http.createServer(
    (request, response)=>{
        var miUrl = url.parse(request.url, true);
        console.log('Url recibida:    ' ,miUrl.path);
        if("/clientes" == miUrl.path){
            response.writeHead(200,{'content-type':'application/json'});
            response.end(JSON.stringify({nombre:"Ruben"}));
        }else{
            response.writeHead(501);
            response.end();
        }
    }//Fin de la funcion lambda
);

server.listen(8888);
console.log("Servidor iniciado en el puerto 8888")