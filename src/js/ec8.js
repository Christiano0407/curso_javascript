//ECS8
//OBJECT.ENTRIES (Object.entries()) = dEVOLVER LA CLAVE Y VALORES DE UNA MATRIZ (array).

/* const data = {
    frontend: `Chris`,
    backend: `Isabel`,
    uxDesigner: `Samantha`,
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); */

//Object.values = valores de un Object a un Array
/* const data = {
    frontend: `Chris`,
    backend: `Isabel`,
    uxDesigner: `Samantha`,
    edito: `Natasha`,
}
const values = Object.values(data);
console.log(values);
console.log(values.length); */

//PADDING-Estructura de elementos. 
/* const string = `Hello`;
console.log(string.padStart(7, `Di`));
console.log(string.padEnd(8, `End`)); */

/* ASYNC AND AWAIT. */
//Asincronismo. 
//ASYNC => Hace que la función devuelva una promesa.
//AWAIT => Antes de una función hace que la función espere una promesa. / Sólo se puede usar dentro de una async function.
//Try and Catch.

//1)
/* const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if(true){
         resolve(`Hello World`);
        }else {
         reject(`Test Error`);
        }
    })
}
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))

const helloAsync = async() => {
    const hello = await helloWorld()
    console.log(hello);
};

helloAsync(); */

//2)
/* const hola = (amigo = "Mauricio", novia = "Kader") => {
    return new Promise ((resolve, reject) => {
        if(amigo === "Mauricio" || novia === "Kader"){
         resolve(`Son las personas que mas quiero en la vida`);
        }else {
         reject(`No son nada para mi.`)
        }
    })
}
hola()
.then(response => console.log(response))
.catch(error => console.log(error))

const holaAsync = async() => {
    const saludo = await hola()
    console.log(saludo);
};
holaAsync(); */