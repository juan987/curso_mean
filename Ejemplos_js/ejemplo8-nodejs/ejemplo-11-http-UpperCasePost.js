var http = require ("http");

//Me mapea la info que me llega en el request
var map = require ("through2-map");

var server = http.createServer(function (request,response){
    if(request.method !== 'POST'){
        return response.end("Mandamelo por post, anda!")
    }else{//pipe va concatenando lo que va llegando
        request.pipe(map(function(chunk){
            console.log("contenido:    "  +chunk.toString());
            return chunk.toString().toUpperCase();
        })).pipe(response);//el primer pipe Pipe devuelve la salida del pipe anterior, y
        //ahora hago el nuevo pipe
    }
});

server.listen(8888);
console.log("Servidor iniciado en el puerto 8888")