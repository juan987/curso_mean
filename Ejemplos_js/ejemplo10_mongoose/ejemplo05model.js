//Clase del 1dic16
//Validaciones en mongoose

var mongoose = require('mongoose');

//Definicion del esquema
var Schema = mongoose.Schema;

//esquema de libros
var LibroSchema = new Schema(
    {
        titulo: {
            type: String,
            required: [true, 'requerido macho!'],
            validate:{
                validator: (valor)=>{
                    return /^[A-Z]/.test(valor);
                },
                message: "No empieza por mayusculas! tu valor {VALUE} no vale"
            }
        },
        autor: String,
        sinopsis: String,
        fecha: Date,
        categoria: {
            type : String,
            enum: ["aventuras", "terror", "novela"],
            required : [true, "Tienes que especificar la categoria del libro"]
        },
        campos_biblioteca:{
            ejemplares: Number,
            reservas: {
                type: Number,
                min : [1, 'Al menos una resrva, no?']
            },
            ultima_reserva: Date
        }
    }
);

module.exports = mongoose.model("Libro", LibroSchema);