//ES6 
/* function newFunction(name = "Kader", age = "24", country = "CDMX"){
 if(name === "Kader") {
    console.log("Ella es la mujer más hermosa")
 }else {
  console.log("No!")
 }
 console.log(name,age, country);
}
newFunction(); */
/* newFunction(`Luisa`, 29, `LO`); */

// Concatenar template `` = comillas francesas.
/* let epic1 = "Hello";
let epic2 = "girl";
let epicPhrase = `${epic1} yo soy ${epic2}`;
console.log(epicPhrase); */

//Multilínea, Spread, Destructurar, LET Y CONST
//MULTILÍNEA =Ya no es necesario poner /n
/* let phrase2 = `Esta frase es una de las pruebas
para probas las nuevas funciones de ECMAScript6`;
console.log(phrase2); */
//DESTRUCTURAR:
/* let person = {
    name: "Kader",
    age: 25,
    country: "Turquía",
}
let {name, age, country} = person; */
/* console.log(`Hola soy ${name}, y soy ${country}.`); */
// console.log(name, age, country); 
// antes console.log(person.name);

//Operador de Propagación = ...:
/* let team1 = [`Luisa`, `Kader`, `Alma`];
let team2 = [`Chris`, `Mauricio`, `Rodrigo`];
let teamFinal = [`David`, ...team1, ...team2];
console.log(teamFinal); */

//LET
//variable local = scope = bloque de código.
/* function amigos(person = "Mauricio") {
    let amigo = {
        name: "Leo",
        sexo: "Masculino",
    }
    console.log(amigo);
    console.log(person);
} 
amigos(); */

//CONST = NO SE PUEDE MODIFICAR el valor.
/* const a = `b`; */

//ARROW FUNCTIONS, PROMESAS, PARÁMETROS EN OBJETOS.



