var mongoose = require('mongoose');


//Esto es como generar la clase Libro, 
//y "Libro" se convierte en la colleccion libros, la misma del ejemplo01base
//var Libro = mongoose.model("Libro",LibroSchema);
var Libro = require('./ejemplo05model');//No hace falta poner el .js

mongoose.connect("mongodb://localhost:27017/test");

//miLibroDeHistoria = new Libro();

miLibroDeHistoria = new Libro({titulo:"Jejeje", campos_biblioteca:{reservas : 1}});

miLibroDeHistoria.save((error)=>{
    if(error){
        console.error('Pues no se ha guardado!!')
        lista_campos = ['titulo', 'campos_biblioteca.reservas', 'categoria'];
        lista_campos.forEach((campo)=>{
            if(error.errors[campo]){
            console.error(error.errors[campo].message);
        } 
        });

        /*
        if(error.errors['titulo']){
            console.error(error.erros['titulo'].message);
        }

        if(error.errors['campos_biblioteca.reservas']){
            console.error(error.erros['campos_biblioteca.reservas'].message);
        }
        */

    }else{
        console.log('Guardado con id: ' +miLibroDeHistoria._id);
    }
});