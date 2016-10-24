function MiCalculadora(){
 

    this.restar = function(num1,num2){
        return num1-num2;
    }

    this.multiplicar = function(num1,num2){
        return num1*num2;
    }

    this.dividir = function(num1,num2){
        return num1/num2;
    }
}

//ESta codificacion es mas eficiente, ya que al hacer new, el codigo del prototype
//no se repite por cada instancia de MiCalculadora
MiCalculadora.prototype.sumar = function(num1,num2){
    //this.memoria = 0;
        return num1+num2;
    }