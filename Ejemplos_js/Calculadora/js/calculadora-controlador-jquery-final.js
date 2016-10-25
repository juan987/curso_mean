//Declaro variables globales
	var pantalla;
    var numeroEnDisplay;
    //var mi_calculadora.memoria;
    var mi_calculadora;
    var bool_operacion_clicked;
    var bool_estado_inicial;
    var operacionClickada;


$(document).ready(initializeEvents);

function initializeEvents(){
    cargar();
    $(".teclaNumnero").click(dibujarDisplay);
    $(".teclaOperacion").click(teclaOperDosNumeros);
    $("#teclaBorrarMemoria").click(borrarMemoria);
    $("#teclaMostrarMemoria").click(mostrarMemoria);
    $("#teclaIgual").click(resultado);
    $("#teclaClear").click(mi_clear);





$( ".teclaNumnero" )
  .mouseup(function() {
    $( this ).removeClass( "numeroClickado" );
    $( this ).addClass( "teclaNumnero" );

  })
  .mousedown(function() {
    $( this ).removeClass( "teclaNumnero" );
    $( this ).addClass( "numeroClickado" );
  });

}//Fin de initializeEvents



function addElementClass(){
    $("#descripcion").addClass("recuadro");
}

function removeElementClass(){
    $("#descripcion").removeClass("recuadro");
}

    //Ejecutar la funcion cargar para inicializar variables y el objeto calculadora
    function cargar(){
		pantalla=document.getElementById("pantalla");
        numeroEnDisplay = "";
        mi_calculadora = new MiCalculadora;
        bool_operacion_clicked = false;
        bool_estado_inicial = true;
	}

//Esta funcion se llama cuando se clicka un numero
    function dibujarDisplay(){
        if(this.value == "+/-"){
            numeroEnDisplay += "-";           
        }else
        {
            numeroEnDisplay += this.value;
        }
        actualizaDisplay(numeroEnDisplay);
    }

//Esta funcion presenta los datos en la pantalla de la calculadora
    function actualizaDisplay(dato){
                pantalla.value = dato;
    }



//Llamada al clickar el boton clear
    function mi_clear(){
        //alert("metodo clear");       
        numeroEnDisplay = "";
        actualizaDisplay(numeroEnDisplay);
        mi_calculadora.memoria = undefined;

    }


// Esta funcion es llamada cuando clickamos la tecla = (igual)
    function resultado(){
        console.log("funcion resultado")
        switch (operacionClickada) {
            case "+":
                console.log("funcion resultado, sumar")
                mi_calculadora.memoria = mi_calculadora.sumar(parseFloat(mi_calculadora.memoria),
                                                    parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
            case "-":
                mi_calculadora.memoria = mi_calculadora.restar(parseFloat(mi_calculadora.memoria),
                                                    parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
            case "*":
                mi_calculadora.memoria = mi_calculadora.multiplicar(parseFloat(mi_calculadora.memoria),
                                                    parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
            case "/":
                mi_calculadora.memoria = mi_calculadora.dividir(parseFloat(mi_calculadora.memoria),
                                                    parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
            case "raiz2":
                mi_calculadora.memoria = mi_calculadora.raizCuadrada(parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
            case "%":
                mi_calculadora.memoria = mi_calculadora.porcentaje(parseFloat(mi_calculadora.memoria),
                                                    parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
            case "1/x":
                mi_calculadora.memoria = mi_calculadora.inverso(parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
        }
    }

    function borrarMemoria(){
        mi_calculadora.memoria = undefined;
    }

    function mostrarMemoria(){
        numeroEnDisplay = mi_calculadora.memoria;
        actualizaDisplay(numeroEnDisplay);
    }

    //Esta funcion se llama cuando se pulsa las teclas: +,-,*,/
    //function teclaOperDosNumeros(operador){
    function teclaOperDosNumeros(){
        let operador = this.value;
        console.log("teclaOperDosNumeros")
        switch (operador) {
            case "+":
                funcionOperador(operador);
            break;
            case "-":
                funcionOperador(operador);
            break;
            case "*":
                funcionOperador(operador);
            break;
            case "/":
                funcionOperador(operador);
            break;
            case "raiz2":
                operacionClickada = operador; 
                mi_calculadora.memoria = mi_calculadora.raizCuadrada(parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
            case "%":
                funcionOperador(operador);       
            break;
            case "1/x":
                operacionClickada = operador; 
                mi_calculadora.memoria = mi_calculadora.inverso(parseFloat(numeroEnDisplay));
                actualizaDisplay(mi_calculadora.memoria);
                mi_calculadora.memoria = undefined;            
            break;
        }
    }

    function funcionOperador(operador){
                operacionClickada = operador;
        //Guardo lo que hay en pantalla en la var mi_calculadora.memoria y limpio la pantalla
        if(mi_calculadora.memoria === undefined){
            mi_calculadora.memoria = pantalla.value;
            numeroEnDisplay = "";
            actualizaDisplay(numeroEnDisplay);
        }else{
            //No lo uso por ahora

        }
    }