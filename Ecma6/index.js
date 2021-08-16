
function newFunction (name, age, country) {
    var name = name || "Alberto";
    var age = age || "32";
    var country = country || "Mexico";
    console.log (name, age, country);
}


// Using Ecmascript6
function newFunction2 (name = "Albert", age = 32, country = "Mx"){
    console.log(name, age, country);
}


newFunction2();
newFunction2("Nina", 18, "Colombia");


//concatenate vars

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Concatenate using Ecmascript

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


// old method multiline
let lorem = "lorem ip sum dolor sit amet \n"
+ "Another phrase wee need.";


// new method for multilne
let lorem2 = `\n Another phrase needed 
now its another phrase
`;

console.log(lorem);
console.log(lorem2);


// destructuration of elements old method

let person = {
    "name": "Albert",
    "age": 32,
    "country": "MX"
}

console.log(person.name, person.age, person.country);


//destructuration ecma method

let {name, age} = person; // here we could call only required data
console.log(name, age);


// spread operator, reduce qty of called data from an array

let team1 = ["alberta", "nara", "shisuka"];
let team2 = ["Vale", "jess", "camila"];

let education = ["albert", ...team1, ...team2];

console.log(education);


// var vs let understanding

{
    var globalVar = "im global var"; // global dispose of variable
}

{
    let globalLet = "This is a global Let"; // Only accesible on this block
    console.log(globalLet);                 // only callable on the block
}

console.log(globalVar);
console.log(globalLet);


// use of const define a var cant be reassigned

const a = "b";
a = "a";
console.log(a);


// object properties 

let name = "Albert";
let age = 32;

obj = {name: name, age: age };

// ecma improved calling

obj2 = {name, age};

console.log(obj);
console.log(obj2);


// arrow functions solve problem with reduced sintax, work with 2 elements
// and a this not linkable

const names = [
    {name: "albert", age: 32, country: "MX"},
    {name: "lola", age: 30}
]

// old method to print names item.name
let listOfNames = names.map(function(item) {
    console.log(item.name);
})

// use an arrow function to delcare output of item.name
let listOfNames2 = names.map(item => console.log(item.name));


    const listOfNames3 = (name,age, country) => {
        console.log(name, age, country);
    };

    const listOfNames4 = name => {
        console.log(name);
    }

    const square = num => num * num;


// promises asynchronys and asynchronus behavior in a moment or time will do something

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (false){
            resolve("its Okay")
        } else {
            reject("Nothing work :/")
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(response => console.log("hello"))
    .catch(error => console.log(error))


// working with class ecma 6

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    multiply(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,8))
console.log(calc.multiply(2,8))


// working with modules ecma6

// Old import form
// import {hellow} from "./module";
// hellow();

const hellow = require("./module")
console.log(hellow())


// Use of generator from values use a validator if true return value

function* helloWorld() {
    if (true){
        yield "Hello, ";
    }
    if (true) {
        yield "World.";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
