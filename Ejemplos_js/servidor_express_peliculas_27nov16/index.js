//Servidor express de peliculas
console.log("Hola, soy tu servidor JSON de peliculas");
var express = require('express');
var my_app_peliculas = express();

//Crear variable para rutas
var routerRestPelis = express.Router();
//Crear rutas para get todas las peliculas y crear pelis nuevas
routerRestPelis.route("/peliculas")
        .get((request, response)=>{
            //Para ver que llega en el request
            console.log("Con coma en el console, Acceso a la ruta:  ", request);
            //Estas dos console dan error
            //console.log("Con stringify      " +JSON.stringify(request));
            //console.log("Con stringify      " +JSON.parse(request));
            response.json(array_pelis)
        })
        .post((request, response)=>{
            //Recoge info del body para crear un nuevo coche 
            // request.body.marca
            // request.body.modelo
            //Para ver que llega en el request
            console.log("Con coma en el console, Acceso a la ruta:  ", request);
            response.json({message:"nueva peli creada creada"});
        });

my_app_peliculas.use("/", routerRestPelis); 

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

//Inicializar el server
my_app_peliculas.listen(8888);
console.log('Servidor de peliculas inicializado');

//Json inicial de peliculas
let array_pelis = [
    {
      "id": 4,
      "titulo": "ewfew ",
      "director": "ffwerfw mod",
      "sinopsis": "wfwfwwf",
      "fecha": "2016-11-13",
      "valoracion": "Muy Buena",
      "booelanIsActive": false
    },
    {
      "id": 6,
      "titulo": "fv",
      "director": "fvf",
      "sinopsis": "fv",
      "fecha": "2016-11-01",
      "valoracion": "vf",
      "booelanIsActive": false
    },
    {
      "id": 7,
      "titulo": "eee",
      "director": "eeee",
      "sinopsis": "eeee",
      "fecha": "2016-11-11",
      "valoracion": "Muy Buena",
      "booelanIsActive": false
    },
    {
      "id": 8,
      "titulo": "rtwtrwtrw",
      "director": "twtwtwr",
      "sinopsis": "twwtwrtwtw",
      "fecha": "2016-11-25",
      "valoracion": "Muy Buena",
      "booelanIsActive": false
    },
    {
      "id": 9,
      "titulo": "trrrr mod",
      "director": "yttyu",
      "sinopsis": "uiuiii",
      "fecha": "2016-11-17",
      "valoracion": "fgwdhshhs",
      "booelanIsActive": false
    },
    {
      "id": 10,
      "titulo": "iiiii",
      "director": "iiiii",
      "sinopsis": "iiiii",
      "fecha": "2016-11-24",
      "valoracion": "Buena",
      "booelanIsActive": false
    }
  ]//Fin de array_pelis inicial