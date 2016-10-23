	var pantalla;
    var numeroEnDisplay = 0;
    var memoria = 0;
	function cargar(){
		pantalla=document.getElementById("pantalla");
	}

    function deliverNumber(numero){
        numeroEnDisplay += numero;
        actualizaDisplay(numeroEnDisplay);
    }


    function sumar(){
        //alert("sumar");
        actualizaDisplay(numeroEnDisplay+memoria);
        actualizaMemoria(numeroEnDisplay+memoria);
    }



    function igual(){
         alert("igual");       
    }

    function actualizaDisplay(datoEnDisplay){
        pantalla.value = datoEnDisplay;
    }

    function actualizaMemoria(valor){
        memoria = valor;
    }

    function clear(){
        alert("metodo clear");       
        //actualizaDisplay(0);
        //actualizaMemoria(0);

    }