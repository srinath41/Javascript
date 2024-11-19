// Basic Concepts
// Declaring variables
var globalVar = "I'm a global variable"; // var (function-scoped)
let blockScopedVar = "I'm a block-scoped variable"; // let (block-scoped)
const constantVar = "I cannot be reassigned"; // const (immutable)

// Data Types
let stringType = "Hello, JavaScript!";
let numberType = 42;
let booleanType = true;
let undefinedType;
let nullType = null;

// Functions
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Sai"));

// Arrow functions
const add = (a, b) => a + b;
console.log(`5 + 3 = ${add(5, 3)}`);

// Conditionals
let num = 10;
if (num > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is less than or equal to 5");
}

// Loops
for (let i = 0; i < 3; i++) {
    console.log(`For loop iteration: ${i}`);
}

let j = 0;
while (j < 3) {
    console.log(`While loop iteration: ${j}`);
    j++;
}

// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date"); // Add an element
console.log(fruits);
fruits.forEach((fruit, index) => console.log(`Fruit ${index}: ${fruit}`));

// Objects
let person = {
    firstName: "Sai",
    lastName: "Srinath",
    age: 22,
    greet() {
        return `Hi, I'm ${this.firstName} ${this.lastName}`;
    },
};
console.log(person.greet());

// ES6 Features
// Template Literals
let templateString = `I am ${person.age} years old`;
console.log(templateString);

// Destructuring
let { firstName, age } = person;
console.log(`Name: ${firstName}, Age: ${age}`);

// Spread and Rest Operators
let moreFruits = [...fruits, "Elderberry"];
console.log(moreFruits);

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`);

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
let dog = new Dog("Rex");
dog.speak();

// Closures
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Count: ${count}`);
    };
}
let increment = counter();
increment();
increment();

// Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        success ? resolve("Promise Resolved!") : reject("Promise Rejected!");
    }, 1000);
});
promise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

// Async/Await
async function fetchData() {
    console.log("Fetching data...");
    let data = await new Promise((resolve) =>
        setTimeout(() => resolve("Fetched Data"), 1000)
    );
    console.log(data);
}
fetchData();

// DOM Manipulation
// Creating and appending elements
let div = document.createElement("div");
div.textContent = "Hello, DOM!";
document.body.appendChild(div);

// Event Listeners
div.addEventListener("click", () => {
    alert("Div clicked!");
});

// Advanced Concepts
// Map, Filter, Reduce
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((n) => n * n);
console.log("Squares:", squares);

let evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let sumOfNumbers = numbers.reduce((total, n) => total + n, 0);
console.log("Sum of Numbers:", sumOfNumbers);

// Modules (example for ES6 imports/exports - requires separate files in practice)
// export function exampleModule() { console.log("Module Example"); }
// import { exampleModule } from './exampleModule.js';
// exampleModule();

console.log("JavaScript concepts covered!");