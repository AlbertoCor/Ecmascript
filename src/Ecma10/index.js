
// plain array, order reduce of an array return an array flat of all order you choose to reduce
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]];

console.log(array.flat(2));

// map every element and return a value 
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value *2]));


// eliminate blanck spaces of a string with trim

let hello = "      Hello W.";
console.log(hello);
console.log(hello.trimStart());

let hello2 = "Hello W.      ";
console.log(hello2);
console.log(hello2.trimEnd());


// opctional catch binding - optional error value to catch

try{

} catch //"-(error)-Eliminate error here" 
{
    error  // only use error inside brackets of catch
}


// From entries - transform key value transform into objects

let entries = [["name", "Albert"], ["age", 32]];
console.log(Object.fromEntries(entries));


// Object type symbol to access a description

let mySymbol = `my symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);

