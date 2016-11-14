var net = require("net");

var server = net.createServer(miSocket);

server.listen(8888);
console.log("Servidor iniciado en el puerto 8888")

function miSocket(socket){
    socket.end("Hola Caracola!!!\n");
}

