//Leer un fichero del disco duro
console.log("Ejemplo de lectura de un fichero")
//Con require carga desde el node module de la carpeta lib/  de node
// el modulo fs (file system)
let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);

//Convierte a string el objeto que me devuelve
let numeroDeFilas = contenido.toString().split('\n').length;
console.log("El fichero:  " +fichero  +"\ntiene numero de lineas:  " 
                +numeroDeFilas);