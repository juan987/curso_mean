function MiCalculadora(){

//La memoria forma parte del objeto calculadora

    this.memoria;

/*    
    this.restar = function(num1,num2){
        return num1-num2;
    }

    this.multiplicar = function(num1,num2){
        return num1*num2;
    }

    this.dividir = function(num1,num2){
        return num1/num2;
    }

*/    
}

//ESta codificacion es mas eficiente, ya que al hacer new, el codigo del prototype
//no se repite por cada instancia de MiCalculadora
MiCalculadora.prototype.sumar = function(num1,num2){
        return num1+num2;
}

MiCalculadora.prototype.restar = function(num1,num2){
        return num1-num2;
}

MiCalculadora.prototype.multiplicar = function(num1,num2){
        return num1*num2;
}

MiCalculadora.prototype.dividir = function(num1,num2){
        return num1/num2;
}

MiCalculadora.prototype.inverso = function(num){
        return 1/num;
}

MiCalculadora.prototype.raizCuadrada = function(num){
        return Math.sqrt(num);
}

//Haqy que teclear: numero(porcentaje a calcular) +tecla% +numero
MiCalculadora.prototype.porcentaje = function(num, porc){
        return num*porc/100;
}