var express = require('express');


//Definimos seguridad:
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy

var app = express();


//Hacemos esto para evitar el error:
/*
XMLHttpRequest cannot load http://127.0.0.1:8080/home. Response 
to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' 
header is present on the requested resource. 
Origin 'http://localhost:4200' is therefore not allowed access.
*/
app.use((request, response,next)=>{
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    response.header('Access-Control-Allow-Headers', 'Authorization');
    next();
});


//Estrategias que vamos a seguir para autenticacion de usuario
//estrategia basica:
passport.use(new Strategy((username, password, done)=>{//El done es como el next
    console.log('Username : ' +username +" pass:  " +password);
    //Aqui dentro evaluo si el usuario existe!!!!
    if(username == 'luis'  && password == 'luis'){
        done(null,true);
    }else{
        done(null,false);
    }
}));

//Pedimos autenticacion basic
app.get("/home",passport.authenticate('basic', {session:false}), (request, response)=>{
    console.log('Acceso permitido para Juan');
    response.send('Acceso permitido');
});

app.listen(8080);