var express = require('express');


//Definimos seguridad:
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy

var app = express();

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