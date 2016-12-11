//Log de versiones: En clase el 29nov16
//Pongo lo de ejemplo02schema, de ejemplo10m_mongoose


//Servidor express de peliculas
console.log("Hola, soy tu servidor JSON de peliculas, "
+"y ya tengo Mongoose!!!!!!");
//Inicializacion de mongoose
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");

//Definicion del esquema
var Schema = mongoose.Schema;

//esquema de libros
var PeliSchema = new Schema(
    {
        id: String,
        titulo: String,
        director: String,
        sinopsis: String,
        //fecha: Date,
        fecha: String,
        valoracion: String,
    }
);

//Esto es generar la clase Pelicula, 
//y "Pelicula" se convierte en la colleccion peliculas.
var Pelicula = mongoose.model("Pelicula",PeliSchema);


/*
Esto es un doc json de pelicula
      "id": 1,
      "titulo": "ewfew ",
      "director": "ffwerfw mod",
      "sinopsis": "wfwfwwf",
      "fecha": "2016-11-13",
      "valoracion": "Muy Buena",
      "booelanIsActive": false
*/


/*
var lotr = new Libro(
    {
        titulo:'Lord of the rings 2', 
        campos_biblioteca:{
            ultima_reserva : new Date()
        }
    }
);

//Guardo

lotr.save(
    (error)=>{
    if(error){
        console.error('Error al guardar: ', error);
    }else{
        console.log('libro guardado: ' +lotr._id);
        Libro.find((error,data)=>{
            console.log('Estoy dentro del else de save, find de libros: ' +data);
        });
    }
}
);

*/

//Fin de inicializacion de mongoose
var express = require('express');
var bodyParser = require('body-parser');//Lo uso en lineas 7 y 8
var my_app_peliculas = express();

//Variables globales para el chat con socketio, 11dic16
var http = require('http').Server(my_app_peliculas);
var io = require('socket.io')(http);
var sockets = [];
var nuevomensaje = {user: "nadie", content: "ninguno"};
//Para que funcione cors con el chat
io.origins('http://localhost:4200');
//Fin de variable para el chat, 11 dic 16

//************************************************************
//Este use es necesario para activar CORS y evitar
//errores del tipo: No 'Access-Control-Allow-Origin' , en la app cliente con angular.
my_app_peliculas.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//************************************************************

//Sin esto no lee ni Json ni urlencoded
//Ver request.body en web de express
my_app_peliculas.use(bodyParser.json()); // for parsing application/json
my_app_peliculas.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Funcion para agregar peliculas
function agregarNuevaPeli(peliNuevaJson, response){
    var nuevaPeli = new Pelicula({
      "titulo": peliNuevaJson.titulo,
      "director": peliNuevaJson.director,
      "sinopsis": peliNuevaJson.sinopsis,
      "fecha": peliNuevaJson.fecha,
      "valoracion": peliNuevaJson.valoracion,
    });
    nuevaPeli.save((error, nuevaPeliAgregada)=>{
        if(error){
            response.status(500).send('Insert , Error al insertar nueva peli')
            //console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation)
            console.log('error al insertar nueva peli: ', error)
        }else{
            response.json(nuevaPeliAgregada)
            console.log('Insertar peli nueva OK: ' ,nuevaPeliAgregada);
            /*
            Pelicula.findOne({"titulo":peliNuevaJson.titulo},(error,data)=>{
                //Devuelve el nuevo doc insertado, incluyendo el _id
                response.json(data)
                console.log('Insertar peli nueva OK: ' ,data);
            });
            */
        }
    });
}





//Funcion para insertar una peli modificada
function modificarPeli(peliModificada, response){
    Pelicula.findById(peliModificada._id, function (error, peli) {
        if(error){
            response.status(500).send('Update , Error al actualizar la peli')
            //console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation)
            console.log('Update , Error al actualizar la peli', error)
        }else{
         
                peli.titulo = peliModificada.titulo,
                peli.director = peliModificada.director,
                peli.sinopsis = peliModificada.sinopsis,
                peli.fecha = peliModificada.fecha,
                peli.valoracion = peliModificada.valoracion,
    
                peli.save((error, peliActualizada)=>{
                        if(error){
                            response.status(500).send('Update , Error al actualizar la peli')
                            //console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation)
                            console.log('Update , Error al actualizar la peli', error)
                        }else{
                                //Devuelve el  doc actualizado, incluyendo el _id
                                response.json(peliActualizada)
                                console.log('Peli actualizada OK: ' ,peliActualizada);
                        }
                });//Fin de peli.save
        }//Fin del else
    });//Fin de Pelicula.findById
}//Fin de function modificarPeli

//Funcion para borrar una peli
function borrarPeli(peli){

}


//Crear variable para rutas
var routerRestPelis = express.Router();
//Crear rutas para get todas las peliculas y crear pelis nuevas
routerRestPelis.route("/peliculas")
        .get((request, response)=>{
            //Para ver que llega en el request
            //console.log("Con coma en el console, Acceso a la ruta:  ", request);
            //Estas dos console dan error
            //console.log("Con stringify      " +JSON.stringify(request));
            //console.log("Con stringify      " +JSON.parse(request));
            Pelicula.find((error,data)=>{
                response.json(data)
                console.log('Estoy dentro del get, find de peliculas: ' ,data);

            });

        })
        .post((request, response)=>{
            //Recoge info del body para crear una nueva pelicula
            //necesita el modulo body-parser
            // request.body
            // request.body.Key
            //Para ver que llega en el request
            console.log("Post: leo todo el json " ,request.body);
            console.log("Post: solo leo un dato del json  " ,request.body.dato);
            //console.log("Con coma en el console, Acceso a la ruta:  ", request);
            agregarNuevaPeli(request.body, response);
            //response.json({message:"nueva peli creada creada"});
            //Devuelvo la peli insertada, con su id
            //response.json(array_pelis[array_pelis.length-1]);
        });

routerRestPelis.route("/peliculas/:id")
            .delete((request, response)=>{
                //console.log('En delete pelicula ' +request.params.id.slice(3));
                console.log('En delete pelicula ' +request.params.id);
                //Pelicula.remove({ _id: request.params.id.slice(3) }, function (error) {
                Pelicula.remove({ _id: request.params.id }, function (error) {
                //Pelicula.remove({ _id:  JSON.stringify(request.params.id) }, function (error) {
                    if(error) response.status(500).send('Delete , Error al borrar la peli');
                    //Tengo que responder con lo que sea, por que si no angular se queda medio colgado
                    response.json({"peli":"borrada"});
                });
            })  
            .put ((request, response)=>{
                //Modifica datos de una peli que ya existe
                modificarPeli(request.body, response);        
            });


//Ruta para el http del autocomplete
routerRestPelis.route("/peliculas/autocomplete/:text")
        .get((request, response)=>{

            console.log('En GET DE autocomplete, patron de busqueda ' +request.params.text);
            //Busqueda por reg expression solo por titulo
            //Pelicula.find({titulo: new RegExp(request.params.text, 'i')}, (error,data)=>{

            //Busqueda por titulo o por director
            Pelicula.find({$or:[{titulo: new RegExp(request.params.text, 'i')},
                            {director: new RegExp(request.params.text, 'i')}]}
                                , (error,data)=>{
                if(error) { 
                    response.status(500).send('Autocomplete , Error en get de autocomplete');
                    console.log('Estoy dentro del get del AUTOCOMPLETE, ERROR ' ,error);
                }else{
                    response.json(data)
                    console.log('Estoy dentro del get del AUTOCOMPLETE, find de peliculas: ' ,data);
                }

            });//fin del find

        });//Fin del get de autocomplete/:text

//Ruta para el http del autocomplete cuando no tiene patron de busqueda(:text)
//Devuelve un array vacio
routerRestPelis.route("/peliculas/autocomplete/")
        .get((request, response)=>{

            console.log('En GET DE autocomplete, patron de busqueda undefined' +request.params.text);

                //Devuelvo un array vacio
                let data= [];
                response.json(data)
                console.log('Estoy dentro del get del AUTOCOMPLETE undefined, find de peliculas: ' ,data);

            //});//fin del get

        });//Fin del roter de autocomplete/:text             

my_app_peliculas.use("/", routerRestPelis); 


/*
//INICIO Clase del 18 nov 16
    var routerRest = express.Router();
    routerRest.route("/coches")
            .get((request, response)=>{
                response.json([{ _id:1, marca:"opel", modelo:"corsa"}, {_id:2, marca:"audi", modelo:"A4"} ])
            })
            .post((request, response)=>{
                //Recoge info del body para crear un nuevo coche 
                // request.body.marca
                // request.body.modelo
                response.json({message:"creado"});
            });


        //Solicito un coche en particular
        //agrego otra ruta en la variable routerRest
    routerRest.route("/coches/:idCoche")
            .get((request, response)=>{
                //TODO: obtener el coche a partir de su idCoche
                response.json({ _id:1, marca:"opel", modelo:"corsa"})
            })
            .delete((request, response)=>{
                response.json({message:"borrado"});
            })  
            .put ((request, response)=>{
                //TODO: Obtener el id y del body obtener marca y modelo
                response.json({message:"actualizado"});
                
            });

     my_app_peliculas.use("/concesionario", routerRest);           
        
//FIN clase del 18 nov 16
*/


//******************************************
//      Chat con socketio, 11Dic16
//******************************************
// Por defecto tenemos ya namespace
// http://localhost:3000/socket.io
io.on('connection',(socket)=>{
    console.log("Cliente conectado!!");

    /*
    //Para mostrar cuando alguien se acaba de conectar
    socket.on('connect',(socket)=>{
        console.log("Informo de una persona que se acaba de conectar : ",mensaje);
        //nuevomensaje.content = socket.id;
        socket.broadcast.emit('conection',socket.id);// todos menos yo!  
    });//Fin para mostrar un nuevo conectado
    */
    socket.on('mando-un-mensaje',(mensaje)=>{
        console.log("Mensaje recibido : ",mensaje);
        sockets.push(socket); 
        mensaje.user = socket.id;
        if(sockets.length > 3){
            sockets[3].emit('mando-un-mensaje',{user:"tu mismo",content:"Solo para ti"});
        } 
        //socket.emit('mando-un-mensaje',mensaje); // yo 
        
        io.emit('mando-un-mensaje',mensaje);// a todos
        //socket.broadcast.emit('mando-un-mensaje',mensaje);// todos menos yo!  
    });
});
io.on('disconnect',(socket)=>{
    console.log("Cliente desconectado!!")
});
//******************************************
//      FIN de Chat con socketio, 11Dic16
//******************************************

//Inicializar el server, asi lo hacia solo con las pelis.
//my_app_peliculas.listen(3000);
//console.log('Servidor de peliculas inicializado');

//Asi lo inicializo para pelis y chat
http.listen(3000,()=>{
    console.log("Servidor de pelis y chat iniciado en *:3000");
});

//Json inicial de peliculas, no lo uso, USO mongoose con mongodb.
let array_pelis = [
    {
      "id": 1,
      "titulo": "ewfew ",
      "director": "ffwerfw mod",
      "sinopsis": "wfwfwwf",
      "fecha": "2016-11-13",
      "valoracion": "Muy Buena",
      "booelanIsActive": false
    },
    {
      "id": 2,
      "titulo": "fv",
      "director": "fvf",
      "sinopsis": "fv",
      "fecha": "2016-11-01",
      "valoracion": "vf",
      "booelanIsActive": false
    },
    {
      "id": 3,
      "titulo": "eee",
      "director": "eeee",
      "sinopsis": "eeee",
      "fecha": "2016-11-11",
      "valoracion": "Muy Buena",
      "booelanIsActive": false
    },
    {
      "id": 4,
      "titulo": "rtwtrwtrw",
      "director": "twtwtwr",
      "sinopsis": "twwtwrtwtw",
      "fecha": "2016-11-25",
      "valoracion": "Muy Buena",
      "booelanIsActive": false
    },
    {
      "id": 5,
      "titulo": "trrrr mod",
      "director": "yttyu",
      "sinopsis": "uiuiii",
      "fecha": "2016-11-17",
      "valoracion": "fgwdhshhs",
      "booelanIsActive": false
    },
    {
      "id": 6,
      "titulo": "iiiii",
      "director": "iiiii",
      "sinopsis": "iiiii",
      "fecha": "2016-11-24",
      "valoracion": "Buena",
      "booelanIsActive": false
    }
  ]//Fin de array_pelis inicial