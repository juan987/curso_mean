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
    constructor(nombre: string, apellido1: string, apellido2: string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;

    }

    //Metodos de la clases, :string es que devuelve un string. 
    //Si fuera :void es que no devuelve nada.
    stringify(): string{
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

//Ejemplo de herencia en typescript
//Una clase que extiende de otra
class Ciudadano extends Persona {
    identidad : string;
    constructor(nombre:string, apellido1:string, apellido2:string, identidad:string){
        //Ejecuta el constructor del padre
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }

    //Sobreescritura del metodo stringify del padre (la clase persona).
    stringify(): string {
        return super.stringify() + "  " +this.identidad;
    }
}

var ciudadanoKane = new Ciudadano("Kane",null,null,"1");
console.log("Clase ciudadano: " +ciudadanoKane.stringify());
//Polimorfismo
var personaPolimorfismo: Persona = ciudadanoKane;
//Pero en este caso al acceder al metodo stringify si accedea la variable identidad
console.log("Polimorfismo de ciudadano a persona:  " +personaPolimorfismo.stringify());


//Clase del 2 nov 2016
class SerVivo{
    static totalDeSeresVivos: number=0;
    clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    stringify(): string{
        return "Clasificacion: " +this.clasificacion;
    }
}

let pez: SerVivo = new SerVivo("marino");
let pez2: SerVivo = new SerVivo("marino");
let pez3: SerVivo = new SerVivo("marino");
let tigre: SerVivo = new SerVivo("terrestre");
let leon: SerVivo = new SerVivo("terrestre");

console.log("Ejemplo de static: Total de seres vivos =  "  +SerVivo.totalDeSeresVivos)

class Padre{
    public almacenPublico: number;
    protected almacenProtegido: number;
    private almacenPrivado: number;
}

let padre = new Padre();
padre.almacenPublico = 77;


class HijoDePadre extends Padre{
    constructor(){
        super();
        //Dentro de este heredero puedo acceder al almacen public y al protegido del padre
        //pero no al private
        this.almacenPublico = 33;
        this.almacenProtegido = 88;
        
    }
}

let hijoDelPadre = new HijoDePadre();


//Una clase abstracta NO es instanciable. Solo se instancia a traves de los hijos
abstract class Ser{
    static totalDeSeres: number=0;
    protected clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
    }
    stringify(): string{
        return "Clasificacion: " +this.clasificacion;
    }

//Los metodos abstractos deben ser implementados por las clases hijas
    abstract desplazamiento(): string;
    abstract alimentarse(): string;
}

//Como Politico extiende Ser, hay que implementar los metodos abstractos de ser
class Politico extends Ser{
    constructor(){
        super("Cucaracha");
    }

    desplazamiento(): string{
        return "En coche oficial";
    }

    alimentarse(): string{
        return "Dame dinero en sobres!"
    }
}


//No puedo definir un metodo abstract en una clase, por que una clase debe ser instanciable
//Esto esta mal:
/*
class MiClase{
    abstract miMetod();
}
*/

//Funciones Lambda

let funcionClasica = function(uno,dos){
    return uno + dos;
}


let funcionLambda = (uno: number, dos: number) => {return uno + dos;}
console.log("Resultado de sumar 1 y 3 con lambda:  " +funcionLambda(1,3))


