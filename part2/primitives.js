//Numbers

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// Null and Undefined
let firstname;
let num = null;
console.log(firstname);
console.log(num);

//String
let myString = "hello";
let myStringOne = "Hola";
let userName = "Subhajit";

let oldGreet = myString + " " + "Subhajit";
console.log(oldGreet);

let greetMessage = `Hello ${userName} !`;
let demoOne = `Value is ${2 * 2}`;

console.log(greetMessage);
console.log(demoOne);

//Symbol
let sm1 = Symbol("Subhajit");
let sm2 = Symbol("Subhajit");

console.log(sm1 == sm2);
