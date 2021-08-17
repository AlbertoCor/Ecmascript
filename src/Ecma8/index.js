
// object.entries return value and key of a matrix

const data = {
    frontend: "lola",
    backend: "Albert",
    design: "karla",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


// object.values return the values of an object to a array

const data = {
    frontend: "lola",
    backend: "Albert",
    design: "karla",
}


const values = Object.values(data);
console.log(values);
console.log(values.length);


// padding add empty string or elements to aa string

const string = "hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(12, "---"));
console.log("food".padEnd(12, " ----"));


// use of async and await


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("helloWorld"), 3000)
            : reject(new Error("Test Error"))
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    // const hello2 = await   <<< could have more callings on our async 
    console.log(hello);
}

helloAsync();

// Another form to use async and await
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
