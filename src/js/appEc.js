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

//Queremos crear un objeto más grande.
/* let name = "César";
let apellido = "Camacho";
obj = {name, apellido};
console.log(obj); */
//antes obj = {name:name, apellido: apellido};

//ARROW:
/*  const names = [
     {name: "Kader", age: 23},
     {name: "Chris", age: 28}
 ]
 let listOfNames = names.map(item => console.log(`Yo soy ${item.name}`)); */
 //antes: let listOfNames = names.map(function(item) {console.log(item.name)});
//arrow function > () => {}; / const list = name => {}

//PROMESAS: Asincronismo.
//ARREGLAR LOS "CALLBACKS".
//API WEB = DEVUELVEN UNA PROMESA.
//RESOLVE O REJECT.
//.then / .catch.
/* const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve(`Hey!`);
        }else {
            reject(`No`);
        }
    });
}
helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error)) */
 //2)
/*  const amigos = (person1 = "Muricio", person2 = "Alma") => {
    return new Promise ((resolve, reject) => {
        if (person1 === "Mauricio" || person2 === "Alma") {
          resolve(`Ellos son amigos`);
        }else {
            reject(`Ninguno lo es`);
        }
    })
 }
 amigos()
 .then(response => console.log(response))
 .catch(error => console.log(error)) */

 //CLASES / MÓDULOS / GENERADORES :
 //constructor / this..
/* class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    } 
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(20, 10)); */
//Módulos: crear otro archivo de javascript. / export e import.
/* import  hello  from `../js/modules.js`;
hello(); */

