var express = require('express');
var passport = require('passport');
var DropboxStrategy = require('passport-dropbox');
var app = express();
var session = require('express-session');

let users = {};


//tenemos que inicializar passport antes que nada
app.use(passport.initialize());


app.use(session(
    {
        secret: 'clave secreta',
        resave: false,
        saveUninitialized: true,
        cookie: {secure:false}//No usa https
    }
));

//Hay que serializar y deserializar para usar passport,
//Usa esto durante la autenticacion de usuario, y se guarda en la session.
passport.serializeUser((user,done)=>{
    //Aqui serializo el usuario

    done(null,user);
});

passport.deserializeUser((user,done)=>{
    //Aqui deserializo el usuario

    done(null,user);
});

//Con esto se accede a dropbox, que responde con el profile
//del usuario en dropbox, y lo guardare en una session cookie
//LO voy a usar cada vez que accedo a este servidor
passport.use(new DropboxStrategy(
    {//Estos datos son para acceder a la api de dropbox
        consumerKey:'gbvhcgckbjp4nbd',
        consumerSecret: 'h28mm0fjalb02e0',
        callbackUrl: 'http://localhost:8080/home' //Dropbox devuelve el resultado aqui
    },
    (token, tokenSecret, profile, next)=>{
        console.log("Perfil de dropbox devuelto por dropbox: ", profile);
        if(users[profile.id]){

            //Si el usuario no existe, aqui lo meto en la base de datos!!!!!

            next(null,users[profile.id]);
        }else{

        
            users[profile.id]=profile;
            next(null,profile);
        }

        
    }
));

app.get("/passport", passport.authenticate('dropbox'),(request,response)=>{
    response.send("La autenticacion contra dropbox ha sido correcta");
});