var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");

//Definicion del esquema
var Schema = mongoose.Schema;

//esquema de libros
var LibroSchema = new Schema(
    {
        titulo: String,
        autor: String,
        sinopsis: String,
        fecha: Date,
        categoria: String,
        campos_biblioteca:{
            ejemplares: Number,
            reservas: Number,
            ultima_reserva: Date
        }
    }
);

//En tiempo real puedo modificar el esquema
LibroSchema.add({estado: String});

//Esto es como generar la clase Libro, 
//y "Libro" se convierte en la colleccion libros, la misma del ejemplo01base
var Libro = mongoose.model("Libro",LibroSchema);

var lotr = new Libro(
    {
        titulo:'Lord of the rings 2', 
        campos_biblioteca:{
            ultima_reserva : new Date()
        }
    }
);

//Guardo
lotr.save(
    (error)=>{
    if(error){
        console.error('Error al guardar: ', error);
    }else{
        console.log('libro guardado: ' +lotr._id);
        Libro.find((error,data)=>{
            console.log('Estoy dentro del else de save, find de libros: ' +data);
        });
    }
}
);

//Inprimo por consola
//Data es un array de json, ojo, cuando ejecutamos find, hay otros metodos.
Libro.find((error,data)=>{
    console.log('Fuera del save' +data);
});

/*
for (let i=0; i<2; i++){
    console.log('Titulo del libro ' +lista[i].titulo);
}
*/

//console.log('lista de libros: ' ,Libro.find());