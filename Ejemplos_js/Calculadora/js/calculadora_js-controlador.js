	var pantalla;
    var numeroEnDisplay;
    var memoria;
    var mi_calculadora;
    var bool_operacion_clicked;
    var bool_estado_inicial;
	function cargar(){
		pantalla=document.getElementById("pantalla");
        numeroEnDisplay = "";
        memoria = 0;
        mi_calculadora = new MiCalculadora;
        bool_operacion_clicked = false;
        bool_estado_inicial = true;
	}

    function dibujarDisplay(numero){
        if(bool_operacion_clicked){
            numeroEnDisplay = "";
            bool_operacion_clicked = false;
        }
        numeroEnDisplay += numero;
        actualizaDisplay(numeroEnDisplay);
    }

    function actualizaDisplay(dato){
                pantalla.value = dato;
    }


    function sumar(){
        //alert("sumar");
        if(bool_estado_inicial){
            bool_estado_inicial = false;
        }
        if(!bool_operacion_clicked){
            bool_operacion_clicked = true;
            memoria = mi_calculadora.sumar(parseInt(numeroEnDisplay),memoria);
            actualizaDisplay(memoria);
        }

    }

        function restar(){
        //alert("restar");
        if(bool_estado_inicial){
            bool_estado_inicial = false;
        }
            if(!bool_operacion_clicked){
                bool_operacion_clicked = true;
                //memoria = mi_calculadora.restar(parseInt(numeroEnDisplay),memoria);
                memoria = mi_calculadora.restar(memoria, parseInt(numeroEnDisplay));
                actualizaDisplay(memoria);
            }

    }

        function multiplicar(){
        //alert("multiplicar");
        if(bool_estado_inicial){
            memoria = 1;
            bool_estado_inicial = false;
        }
        if(!bool_operacion_clicked){
            bool_operacion_clicked = true;
            //memoria = mi_calculadora.restar(parseInt(numeroEnDisplay),memoria);
            memoria = mi_calculadora.multiplicar(memoria, parseInt(numeroEnDisplay));
            actualizaDisplay(memoria);
        }

    }



    function igual(){
        window.alert("igual");    
    }

    function mi_clear(){
        alert("metodo clear");       
        //actualizaDisplay(0);
        //actualizaMemoria(0);

    }