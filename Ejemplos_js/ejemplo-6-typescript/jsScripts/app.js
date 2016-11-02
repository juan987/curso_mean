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
    //Metodos de la clases, :string es que devuelve un string. 
    //Si fuera :void es que no devuelve nada.
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
//Ejemplo de herencia en typescript
//Una clase que extiende de otra
class Ciudadano extends Persona {
    constructor(nombre, apellido1, apellido2, identidad) {
        //Ejecuta el constructor del padre
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    //Sobreescritura del metodo stringify del padre (la clase persona).
    stringify() {
        return super.stringify() + "  " + this.identidad;
    }
}
var ciudadanoKane = new Ciudadano("Kane", null, null, "1");
console.log("Clase ciudadano: " + ciudadanoKane.stringify());
//Polimorfismo
var personaPolimorfismo = ciudadanoKane;
//Pero en este caso al acceder al metodo stringify si accedea la variable identidad
console.log("Polimorfismo de ciudadano a persona:  " + personaPolimorfismo.stringify());
//Clase del 2 nov 2016
class SerVivo {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
SerVivo.totalDeSeresVivos = 0;
let pez = new SerVivo("marino");
let pez2 = new SerVivo("marino");
let pez3 = new SerVivo("marino");
let tigre = new SerVivo("terrestre");
let leon = new SerVivo("terrestre");
console.log("Ejemplo de static: Total de seres vivos =  " + SerVivo.totalDeSeresVivos);
class Padre {
}
let padre = new Padre();
padre.almacenPublico = 77;
class HijoDePadre extends Padre {
    constructor() {
        super();
        //Dentro de este heredero puedo acceder al almacen public y al protegido del padre
        //pero no al private
        this.almacenPublico = 33;
        this.almacenProtegido = 88;
    }
}
let hijoDelPadre = new HijoDePadre();
//Una clase abstracta NO es instanciable. Solo se instancia a traves de los hijos
class Ser {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
Ser.totalDeSeres = 0;
//Como Politico extiende Ser, hay que implementar los metodos abstractos de ser
class Politico extends Ser {
    constructor() {
        super("Cucaracha");
    }
    desplazamiento() {
        return "En coche oficial";
    }
    alimentarse() {
        return "Dame dinero en sobres!";
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
let funcionClasica = function (uno, dos) {
    return uno + dos;
};
let funcionLambda = (uno, dos) => { return uno + dos; };
console.log("Resultado de sumar 1 y 3 con lambda:  " + funcionLambda(1, 3));
//# sourceMappingURL=app.js.map