//Clase del 30nov16

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


//Creacion de metodos
LibroSchema.statics.findByTitle = (title, cb)=>{
    console.log('Buscando por titulo: ' +title);
    //return this.find({titulo:title}, cb);
    return Libro.find({titulo: new RegExp(title, 'i')}, cb);
}




//Esto es como generar la clase Libro, 
//y "Libro" se convierte en la colleccion libros, la misma del ejemplo01base
var Libro = mongoose.model("Libro",LibroSchema);

//Lo uso asi:
//Libro.findByTitle('anillos', (error,data)=>{
Libro.findByTitle('of', (error,data)=>{
    if (error){
        log.error('Error al procesar la busqueda con regular expression')
    }else{
        console.log('Libros para la consulta find({titulo:/lord}): ');
        data.forEach((libro)=>{
            console.log('Libro encontrado: ' +libro.titulo)
        })
    }
});

/*
A nivel de instancia en mongoose:
    init
    validate
    save  //es ACID
    remove  //es ACID

A nivel de clase
    count
    findOne
    findOneAndUpdate  //es ACID
    findOneAndDelete  //es ACID  

*/