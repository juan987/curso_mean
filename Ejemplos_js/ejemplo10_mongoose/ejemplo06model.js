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
        fecha: {
            type : Date,
            required : true,
            index
        },
        categoria: {
            type : String,
            enum: ["aventuras", "terror", "novela"],
            required : true
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


//Otra forma de definir indices, en este caso un indice compuesto con:
// los campos fecha y campos_biblioteca.reservas
//Ordena ascendente las fechas y descendentes las reservas
LibroSchema.index({fecha:1, "campos_biblioteca.reservas":-1});

module.exports = mongoose.model("Libro", LibroSchema);