//app de tipo express:
var app = require('express')();
//para crear el server http
var http = require ('http').Server(app);

//Esta variable es mi socket.io, que es la implementacion de web socket de node
var io = require ('socket.io')(http);

//para definir cuales son los origenes permitidos: 
//en este caso, da igual de donde venga, dejo entrar a todo el mundo
//y siempre asi cuandop tengo un contenedor de dockets
//io.origins('*.*')


//Con este origin, solo me deja entrar desde una applicacion con este este dominio y puerto,
//que es donde esta. por ejemplo, mi servidor de angular.
io.origins.origins('http://localhost:4200');
//si fuera una app en produccion, el origen seria el dominio y puerto del origen en produccion,
//que correspondera a datos del hosting, etc.

//Por defecto tenemos ya namespace: http://localhost:3000/socket.io , no es necesario poner el 
//socket.io, ya esta por defecto.

//Conneccion, me devuelve un socket, lo verifico con el console:
io.on('connection', (socket)=>{
    console.log('Cliente conectado!!!');
    //Estoy oyendo al cliente, el cual me mandara mensajes que yo recojo:
    io.on('mando-un-mensaje', (mensaje)=>{
        console.log('Mensaje recibido desde un cliente: ' +mensaje);

        //Si el servidor quiere emitir al usuario:
        //En este caso esto es un echo desde el server de sockets
        socket.emit('mando-un-mensaje', 'Echo desde el server:  ' +mensaje);
        
        //como hacer broadcast con io para que le llegue a todos los clientes conectados
        io.emit('mando-un-mensaje', mensaje);
    });//Fin del io.on 'mando-un-mensaje'
});//Fin del io.on connection


io.on('disconnect', (socket)=> {
    console.log('Cliente desconectado!!');
});


