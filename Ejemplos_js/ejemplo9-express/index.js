var express = require('express');
var app = express();

function evaluaElVerboHttp(request, response){
    response.send('Ruta :  '   + request.originalUrl + '  Verbo :   ' +request.method);
}


//Asi gestionamos el http get solo con / por defecto en la raiz
app.get("/", 
        (request, response)=>{
            //console.log("Acceso a la ruta       " +JSON.stringify(request));
            console.log("Con coma en el console, Acceso a la ruta:  ", request);
            response.send("Respuesta recibida!");
        }
);

//En todos estos ejemplos, devuelvo texto en plano
app.post('/', evaluaElVerboHttp);
app.put('/', evaluaElVerboHttp);
app.delete('/', evaluaElVerboHttp);

app.all('/paratodos', evaluaElVerboHttp);


//Uso de patrones son expresiones regulares de grado 1
//Me coge cualquier verbo y la url puede tener cualquier cosa entre inicio y fin.
app.all('/inicio*fin', evaluaElVerboHttp);

//Path param, devuelvo texto en plano
app.get('/clientes/:idCliente/facturas/:idFactura', 
            (request, response)=>{
                //console.log('Resultados : ', request.params);
                response.send('Resultados :  \n\tCliente: ' 
                        +request.params.idCliente +"   \n\tFactura: "
                         +request.params.idFactura
                         +'\n' +JSON.stringify(request.params));
            }
            
    );


//Para descargar una imagen
//res.download('/report-12345.pdf')

app.get('/save/:fichero.:extension', (request, response)=>{
    response.send('Ahora genero un fichero de tipo : ' +
                    request.params.extension);
})

//funcion intermedia, para concatenar manejadores
//funcion intermedia es un handler
function funcionIntermedia(request, response, next){
    console.log('Ejecutado a las :  ' +new Date());
    //netx ejecuta lo siguiente que hay en app.get('/concatenado.....')
    next(); //esta siempre es la ultima linea
}

function funcionIntermediaFinal(request, response, next){
    console.log('como no hay next, se para el flujo');
    next(); //esta siempre es la ultima linea
}

app.get('/concatenado',
        funcionIntermedia,
        funcionIntermediaFinal,
        (request, response)=>{
            response.send('Enviado usando concatenado');
        });


//Para trabajar con rutas
app.route('/rutaconjunta')
    .get(evaluaElVerboHttp)
    .post(evaluaElVerboHttp)
    .put(evaluaElVerboHttp)
    .delete(evaluaElVerboHttp);



//para generar y organizar rutas
//Al hacer app.use, ya no tengo que hacer:
// app.get... 
// o app.post
    var router = express.Router();

    //Con route.use ejecuto funcion intermedia antes de los get y post.
    router.use(funcionIntermedia);
    router.get('/conrouter', evaluaElVerboHttp);
    router.post('/conrouterpost', evaluaElVerboHttp);
    app.use("/cosacuca", router);


app.listen(8888);
console.log('Servidor inicializado');