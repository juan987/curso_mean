var http =  require ('http');
var bl = require ('bl');
var results = [];
var urls = ["http://www.google.es", "http://www.amazon.com"];
var count = 0;

for(let i=0; i<urls.length; i++){
    httpGet(i);
}

function mostrarResultados(){
    for(let i=0; i<urls.length; i++){
        console.log("URL:   "  +urls[i] +
                "\n Numero caracteres:    "  +results[i].length);
    }
}



function httpGet(indice){
    console.log("Comprobando   "   +urls[indice]);
    http.get(urls[indice], (respuesta)=>{
        respuesta.pipe(bl((error, datos) => {
            if(error){
                console.error(error);
            }else{

                results[indice] = datos.toString();
                count++;
                if(count === urls.length){
                    mostrarResultados();
                }
            }

        })); //Fin respuesta.pipe

    }); //Fin http.get
}