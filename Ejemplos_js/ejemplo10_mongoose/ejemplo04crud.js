var mongoose = require('mongoose');


//Esto es como generar la clase Libro, 
//y "Libro" se convierte en la colleccion libros, la misma del ejemplo01base
//var Libro = mongoose.model("Libro",LibroSchema);
var Libro = require('./ejemplo04model');//No hace falta poner el .js

mongoose.connect("mongodb://localhost:27017/test");
function getLibros(limit,skip){
    //return Libro.find()
}

function getLibro(_id){
    Libro.findById(_id, (error,libro)=>{
        //TODO
    })
}

function saveLibro(libro){
    libro.save((error)=>{

    })
}

function updateLibro(libro){
    getLibrosById(libro._id);
    libro.categoria = "terror";
    saveLibro(libro);
}

function deleteLibro(_id){

}
