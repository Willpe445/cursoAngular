(function(){

    function getEdad() {
        return 100 + 100 + 100;
    }
const nombre = "Wilians";
const apellido = "Perez";
const edad = 33;

// const salida = nombre + " " + apellido + " (" + edad + ") " 
const salida = `${nombre} \n${apellido} \n( ${getEdad() + edad} )`;

console.log(salida);


})()
