
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



