/* var nombre = "Luisa";

var elementos = ["Compu", "watch", "mouse"]; */

//funciones
// 1) declarativa
/* function miFunction() {
    console.log("Hola!");
}
miFunction(); */

//2)Expresión
/* var miFunction = function() {
    console.log("Ya");
};
miFunction(); */

//parámetro (parámetro) = No tiene un valor definido = Lo mandas llamar en la función
/* a) */
/* function miDesayuno (fruta) {
    console.log(`Mi desayuno es una ${fruta}`);
}
miDesayuno("Manzana"); */

/* b) */
/* function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}
sumar(15, 5); */

/* SCOOPE (VAR/LET/CONST) */
//Variable local sí puede acceder a global pero, no de global a local

/* var miNombre = "Chris";

function miApellido() {
    let apellido = "Velázquez";
    console.log(miNombre + " " + apellido);
} 
miApellido(); */

/* HOISTING */
// Cuando las variables y funciones se procesan antes que el código
 