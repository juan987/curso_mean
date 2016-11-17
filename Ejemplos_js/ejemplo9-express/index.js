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


app.post('/', evaluaElVerboHttp);
app.put('/', evaluaElVerboHttp);
app.delete('/', evaluaElVerboHttp);

app.all('/paratodos', evaluaElVerboHttp);


//Uso de patrones son expresiones regulares de grado 1
//Me coge cualquier verbo y la url puede tener cualquier cosa entre inicio y fin.
app.all('/inicio*fin', evaluaElVerboHttp);

app.listen(8888);
console.log('Servidor inicializado');