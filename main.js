// Variables (Declarar / Asignar / Ejecutar).
/* const text = document.querySelector(`p`);
text.addEventListener(`click`,updateName );

function updateName() {
    let name = prompt(`Enter the new Name`);
    text.textContent = `player 1:` + " " + name;
} */

/* STRING AND VARIABLES */
/* var name = "Chris";
var apellido = "Velázquez"; */
//String = Lo que podemos hacer con el.
/* let nombreMayor = name.toUpperCase();
let apellidoMenor = apellido.toLowerCase(); */
//Acceder a un caracter
/* let primeraLetra = name.charAt(0); */
//Cantidad de letras o elementos que lo componen. Es un atributo porque no lo imbocamos con un ().
/* let cantidadLetras = apellido.length */
// Concatenar = + " " + / Interpolación de variables y texto = `${código js}`.
/* let nombreCompleto = `${name} ${apellido.toUpperCase()}` */
//subString
/* let str = name.substr(1, 3); */

/* NÚMEROS / OPERADORES */
// "+=" (más igual)/ "-", "+", "*", "/" / "++", "+=", "-=".

/* let edad = 28;
edad += 1; */
/* let peso = 80;
let torta = 2;
peso = peso -= torta; */

/* MATH  = es un objeto con propiedades y métodos */
//1)Propiedades
//Math.PI = 3.14159.
//B) Métodos
//.round = redondear al número entero más cercano.
//.ceil = devuelve el entero, mayor o igual de un número.
//.floor = Devuelve el mayor entero o menor que o igual.
//.random(aleatorio) = Devuelve un número pseudo-aleatorio entre 0 y 1.
//trunc = Devuelve la parte entera del número (eliminación de los números fraccionarios).

/* let precioBat = 50.5;
let total = Math.round(precioBat);
let totales = Math.ceil(precioBat);
let pago = Math.floor(precioBat);
let pagos = Math.random(precioBat);
let cheque = Math.trunc(precioBat); */

/* FUNCTIONS */
//() = Agregar Parámetros dentro de la function.

/* let persona = "Natasha";
function miPersona(n, a) {
    console.log(`Yo soy ${n} ${a}`)
}
miPersona("Pammela", "Velázquez");
miPersona = new miPersona("Miranda", "Morales"); */

/* OBJECTS */
// {} Tienen propiedades / clave (nombre:) y valor("Alma").
/* const personal = {
    nombre: "Alma",
    apellido: "Rosas",
    edad: 24,
    País: "México",
}
function miPersonal({nombre}) {
console.log(nombre);
}
miPersonal(personal); */

//Desestructurar Objects

/* COMPARACIONES EN JS OPERADORES*/
// "==" / "===" / "<=" / ">=" / "!=" / "&&" / "||" .

