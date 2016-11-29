
//Primera version sin mongoose


//Servidor express de peliculas
console.log("Hola, soy tu servidor JSON de peliculas");
var express = require('express');
var bodyParser = require('body-parser');//Lo uso en lineas 7 y 8
var my_app_peliculas = express();

//Sin esto no lee ni Json ni urlencoded
//Ver request.body en web de express
my_app_peliculas.use(bodyParser.json()); // for parsing application/json
my_app_peliculas.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Funcion para agregar peliculas
function agregarNuevaPeli(peliNuevaJson){
   let numPelisInArray = array_pelis.length;
   console.log('hay ' +numPelisInArray +'  peliculas');
   if(numPelisInArray == 0){
       peliNuevaJson.id = 1;
       //array_pelis.push(peliNuevaJson);
   }else{
       //peliNuevaJson.id = numPelisInArray + 1;
       peliNuevaJson.id = devuelveHigherPeliId() + 1;
   }

   array_pelis.push(peliNuevaJson);
}


function devuelveHigherPeliId(){
    //var points = [40, 100, 1, 5, 25, 10];
    //points.sort(function(a, b){return b - a});
    // now points[0] contains the highest value

    //Metodo para encontrar el valor mas alto de peli.id
    //en el array de pelis

    //Copio array_pelis en un nuevo array que uso para buscar
    //el valor mas alto de peli.id
    nuevo_array = array_pelis.slice(0)
    nuevo_array.sort((a,b)=>{
        return b.id - a.id
    });
    console.log('peli con el id mas alto: ' +nuevo_array[0].titulo
                        +'\t'  +nuevo_array[0].id);
    return nuevo_array[0].id;
}


//Funcion para insertar una peli modificada
function modificarPeli(peliModificada){
    for (let i = 0; i<array_pelis.length; i++){
        console.log('id"s del array de pelis: ' +array_pelis[i].id);
        if(array_pelis[i].id == peliModificada.id){
            array_pelis[i] = peliModificada;
            console.log('indice del array de pelis: ' +i +'\n'
                        +peliModificada.id);
            return i;
            //break;
        }
    }
}

//Funcion para borrar una peli
function borrarPeli(peli){
    for (let i = 0; i<array_pelis.length; i++){
        //console.log('id"s del array de pelis: ' +array_pelis[i].id);
        if(array_pelis[i].id == peli.id){
            //No usar delete por que deja agujeros "null" en el array
            //delete array_pelis[i];
            array_pelis.splice(i,1);
            console.log('borrar, indice del array de pelis: ' +i +'\t'
                        +peli.id);
            return i;
            //break;
        }
    }
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
            response.json(array_pelis)
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
            agregarNuevaPeli(request.body);
            //response.json({message:"nueva peli creada creada"});
            //Devuelvo la peli insertada, con su id
            response.json(array_pelis[array_pelis.length-1]);
        });

routerRestPelis.route("/peliculas/:id")
            .delete((request, response)=>{
                let resultado = borrarPeli(request.body);
                if (resultado != undefined){
                    response.json({message:"peli borrada"});
                }else{
                    response.status(500).send('Borrar, Esa peli no existe')
                }
            })  
            .put ((request, response)=>{
                //Modifica datos de una peli que ya existe
                let resultado = modificarPeli(request.body);
                if (resultado != undefined){
                    response.json(array_pelis[resultado]);
                }else{
                    response.status(500).send('Esa peli no existe')
                }
                 
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