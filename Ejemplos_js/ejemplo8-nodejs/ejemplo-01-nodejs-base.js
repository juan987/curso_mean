for(let i=0; i < process.argv.length; i++){
    console.log("Parametro numero:  " +i   +" -- " +process.argv[i]);
}


console.log("Hola mundo, 10nov16");

if (process.argv[2] == 1){
    console.log("El parametro 2 es:  " +process.argv[2]);
}else{
    console.log("El parametro 2 es DISTINTO DE 1, y es:  "
                    +process.argv[2]);
}