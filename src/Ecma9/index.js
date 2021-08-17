
// Repose operator extract object properties of an object not built yet

const obj = {
    name: "Albert",
    age: 32,
    country: "Mx",
};

let { name, ...all} = obj;
console.log(name, all);
console.log(all);


// properties of propagation to joint x quantity of elements of objects to a new one

const obj = {
    name: "Albert",
    age: 32,
};

const obj1 = {
    ...obj,
    country: "Mx"
};

console.log(obj1)


// know when finish the calling and then run a caracteristic of code

const helloWorld = ()=> {
    return new Promise((resolve, reject) => {
        (true)
            ?setTimeout(() =>  resolve( "Hello W."), 3000)
            : reject(new Error("test error"))
    })
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finish"))


// Regex to a group block

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2020-11-15");
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)

