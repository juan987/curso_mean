//Clase del 30nov16

var mongoose = require('mongoose');

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

module.export = mongoose.model("Libro", LibroSchema);