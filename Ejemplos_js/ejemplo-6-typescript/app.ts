var variable_1 = 2016;
//Esta asignacion da error!!!!!!!!
//variable_1 = "gggg";

var otra_variable:number = 7;
otra_variable = 14;

//Esta asignacion da error!!!!!!
//otra_variable = '16';

var iiii: string = "rrr";

//demo de que muestra que let no es reconocido por es5
let variable_let: string = 'juan';

//ejemplos de interfaces, que son estructuras de datos
interface Tiempo{
    dia:number;
    mes:number;
    anio:number;
}
var miCumpleanios: Tiempo = {dia:3, mes:11, anio:1978};
var miCumpleanios_2: Tiempo = {dia:8, mes:11, anio:2000};
console.log("mi cumpleños es: " +miCumpleanios.anio +' , ' +miCumpleanios.dia +' , ' +miCumpleanios.mes);
console.log("Antes de cumplir años: " +miCumpleanios.anio);

cumplirAnios(miCumpleanios);
cumplirAnios(miCumpleanios_2);
console.log("Despues de cumplir años: " +miCumpleanios.anio);
console.log("miCumpleanios_2: " +miCumpleanios_2.anio);

//Funcion cumplir anios
function cumplirAnios(fechaDeCumpleanios:Tiempo):void{
    fechaDeCumpleanios.anio++;
}

var otra_var: number=8;



//*****************************************************************************
//Definiciones de clases
class Persona{
    //Definicion de atributos
    nombre: string;
    apellido1 : string;
    apellido2 : string;

    //Constructor de la clases
    constructor(nombre:string, apellido1:string, apellido2:string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;

    }

    //Metodos de la clases
    stringify():string{
        return this.nombre +" " +this.apellido1 +" " +this.apellido2 
    }
}


//Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre="Ruben";
ruben.apellido1="Gomez";
ruben.apellido2="Garcia";
*/
//CON metodo constructor
let ruben=new Persona("Ruben", "Gomez", "Garcia");
let juan=new Persona("juan", "Navarro", "Lopez");
console.log(ruben.stringify() +'\n' +juan.stringify());

