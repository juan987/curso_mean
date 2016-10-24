	var pantalla;
    var numeroEnDisplay;
    var memoria;
    var mi_calculadora;
    var bool_operacion_clicked;
    var bool_estado_inicial;
    var operacionClickada;
	function cargar(){
		pantalla=document.getElementById("pantalla");
        numeroEnDisplay = "";
        mi_calculadora = new MiCalculadora;
        bool_operacion_clicked = false;
        bool_estado_inicial = true;
	}

//Esta funcion se llama cuando se clicka un numero
    function dibujarDisplay(numero){
        numeroEnDisplay += numero;
        actualizaDisplay(numeroEnDisplay);
    }

    function actualizaDisplay(dato){
                pantalla.value = dato;
    }


    function sumar(){
        //alert("sumar");

        operacionClickada = "+";
        //Guardo lo que hay en pantalla en la var memoria y limpio la pantalla
        if(memoria === undefined){
            memoria = pantalla.value;
            numeroEnDisplay = "";
            actualizaDisplay(numeroEnDisplay);
        }else{
            //Hay algo en memoria, ejecuta segun la operacion clickada
            //resultado();

        }

    }

    function restar(){
        //alert("restar");
        operacionClickada = "-";
        //Guardo lo que hay en pantalla en la var memoria y limpio la pantalla
        if(memoria === undefined){
            memoria = pantalla.value;
            numeroEnDisplay = "";
            actualizaDisplay(numeroEnDisplay);
        }else{
            //Hay algo en memoria, ejecuta segun la operacion clickada
            //resultado();

        }

    }

    function multiplicar(){
        //alert("restar");
        operacionClickada = "*";
        //Guardo lo que hay en pantalla en la var memoria y limpio la pantalla
        if(memoria === undefined){
            memoria = pantalla.value;
            numeroEnDisplay = "";
            actualizaDisplay(numeroEnDisplay);
        }else{
            //Hay algo en memoria, ejecuta segun la operacion clickada
            //resultado();

        }

    }

    function dividir(){
        //alert("restar");
        operacionClickada = "/";
        //Guardo lo que hay en pantalla en la var memoria y limpio la pantalla
        if(memoria === undefined){
            memoria = pantalla.value;
            numeroEnDisplay = "";
            actualizaDisplay(numeroEnDisplay);
        }else{
            //Hay algo en memoria, ejecuta segun la operacion clickada
            //resultado();

        }

    }

//Llamada al clickar el boton clear
    function mi_clear(){
        //alert("metodo clear");       
        numeroEnDisplay = "";
        actualizaDisplay(numeroEnDisplay);
        memoria = undefined;

    }


// Esta funcion es llamada cuando clickamos la tecla = (igual)
    function resultado(){
        console.log("funcion resultado")
        switch (operacionClickada) {
            case "+":
                console.log("funcion resultado, sumar")
                memoria = mi_calculadora.sumar(parseInt(memoria),
                                                    parseInt(numeroEnDisplay));
                actualizaDisplay(memoria);
                memoria = undefined;            
            break;
            case "-":
                memoria = mi_calculadora.restar(parseInt(memoria),
                                                    parseInt(numeroEnDisplay));
                actualizaDisplay(memoria);
                memoria = undefined;            
            break;
            case "*":
                memoria = mi_calculadora.multiplicar(parseInt(memoria),
                                                    parseInt(numeroEnDisplay));
                actualizaDisplay(memoria);
                memoria = undefined;            
            break;
            case "/":
                memoria = mi_calculadora.dividir(parseInt(memoria),
                                                    parseInt(numeroEnDisplay));
                actualizaDisplay(memoria);
                memoria = undefined;            
            break;
        }
    }

        function borrarMemoria(){
            memoria = undefined;
        }

        function mostrarMemoria(){
            numeroEnDisplay = memoria;
            actualizaDisplay(numeroEnDisplay);
        }

    
