//Carga del modulo
var mongoose = require('mongoose');
//conectar a la base de datos
mongoose.connect("mongodb://localhost:27017/test");
//Genero el modelo
//Esto es como generar la clase Libro
var Libro = mongoose.model('Libro', {//OJO: 'Libro' se convierte en la coleccion libros en la shell de mongo
    titulo: String,
    autor: String,
    paginas: Number
});

//Creo una instancia de Libro
var esdla = new Libro({
    titulo:"el señor de los anillos", 
    autor:"JJ talkien", 
    paginas: 3500});


//Salvamos
esdla.save((error)=>{
    if(error){
        console.error('Error al guardar: ', error);
    }else{
        console.log(`libro guardado: `, esdla);
    }
});