var variable_1 = 2016;
//Esta asignacion da error!!!!!!!!
//variable_1 = "gggg";
var otra_variable = 7;
otra_variable = 14;
//Esta asignacion da error!!!!!!
//otra_variable = '16';
var iiii = "rrr";
//demo de que muestra que let no es reconocido por es5
let variable_let = 'juan';
var miCumpleanios = { dia: 3, mes: 11, anio: 1978 };
var miCumpleanios_2 = { dia: 8, mes: 11, anio: 2000 };
console.log("mi cumpleños es: " + miCumpleanios.anio + ' , ' + miCumpleanios.dia + ' , ' + miCumpleanios.mes);
console.log("Antes de cumplir años: " + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
cumplirAnios(miCumpleanios_2);
console.log("Despues de cumplir años: " + miCumpleanios.anio);
console.log("miCumpleanios_2: " + miCumpleanios_2.anio);
//Funcion cumplir anios
function cumplirAnios(fechaDeCumpleanios) {
    fechaDeCumpleanios.anio++;
}
var otra_var = 8;
//*****************************************************************************
//Definiciones de clases
class Persona {
    //Constructor de la clases
    constructor(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    //Metodos de la clases
    stringify() {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}
//Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre="Ruben";
ruben.apellido1="Gomez";
ruben.apellido2="Garcia";
*/
//CON metodo constructor
let ruben = new Persona("Ruben", "Gomez", "Garcia");
let juan = new Persona("juan", "Navarro", "Lopez");
console.log(ruben.stringify() + '\n' + juan.stringify());
//# sourceMappingURL=app.js.map