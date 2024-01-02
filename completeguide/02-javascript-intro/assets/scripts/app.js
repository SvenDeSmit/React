// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(userName, message = "Hello!") {
// console.log(userName);
// console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// export default (userName, message) => {
//  console.log("Hello");
//   return userName + message;
// };

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarzmüller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser);

// const password = prompt("Your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function init() {
//   function greet() {
//     console.log(“Hi!“);
//   }

//   greet();
// }

// init();

// const message = “Hello”;

const hobbies = ["Sports", "Cooking"];
// hobbies = [];
hobbies.push("Working");
console.log(hobbies);

//import { apiKey } from "./util.js";
//console.log(apiKey);

//import defaulVar from "./util.js";
//console.log(defaultVar);

import * as util from "./util.js";
console.log(util.default + " , " + util.apiKey + " , " + util.abc);

let myVar = "My Variable";
console.log(myVar);

const myConst = "MY CONSTANT";
console.log(myConst);

// myConst = "new val";

// equality!
console.log(10 === 5);
if (10 > 5) {
  console.log("Yes!");
}

// FUNCTIONS
function greet(userName, message = "default message") {
  console.log("Hello " + userName);
  console.log(message);
  return "Hi, I am " + userName + " : " + message;
}

greet("Sven", "my message");
greet("Paul");

const msg = greet("Sabrina", "sabrina message");
console.log(msg);

function doFunc(f, arg1, arg2) {
  return f(arg1, arg2);
}

// anonymous functions
let res = doFunc(
  (arg1, arg2) => {
    console.log(arg1);
    console.log(arg2);
    return arg1 + arg2;
  },
  5,
  7
);
console.log(res);

// OBJECTS
const user = {
  name: "Sven",
  age: 55,
  greet() {
    console.log("hello, " + this.name);
  },
};

console.log(user);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi");
  }
}

const user1 = new User("Peter", 45);
console.log(user1);
user1.greet();

// ARRAYS
const hobbies2 = ["sports", "cooking", "reading"];
console.log(hobbies2);
console.log(hobbies2[0]);

// util methods
hobbies2.push("working");
console.log(hobbies2);

// console.log(
//   hobbies2.findIndex((item) => {
//     console.log(item);
//     return item === "reading";
//   })
// );

// reduce method - filtering, ..
console.log(hobbies2.findIndex((item) => item === "reading"));

// map method - transformation of the list
const hobbies3 = hobbies2.map((item) => item + "!");
console.log(hobbies2);
console.log(hobbies3);

// create objects from ietms in array
const hobbies4 = hobbies3.map((item) => ({ text: item, len: item.length }));
console.log(hobbies4);

// Desctructuring
const uNameData = ["Sven", "De Smit"];
const [fname, lname] = uNameData;
console.log(fname);
console.log(lname);

const u = {
  name: "Max",
  age: 55,
};
const { name: user2, age } = u;
console.log(user2);
console.log(age);

// SPREAD - get individual elements from an array or object
console.log(hobbies2);
const newH = ["gaming"];
const hobbies10 = [...hobbies2, ...newH];
console.log(hobbies10);

const extUser = {
  isAdmin: true,
  ...u,
};
console.log(extUser);

// COTROL STATEMENTS
//const passw = prompt("Your pwd? ");
const passw = "Hello";
console.log(passw);

// if ... else
if (passw === "hello") {
  console.log("hello works");
} else if (passw === "Hello") {
  console.log("Hello works");
} else {
  console.log("ERROR");
}

// for ...
for (const item of hobbies2) {
  console.log(item);
}

// DOM not done with raw javscript - React will do this
const list = document.querySelector("ul");
console.log(list);
//list.remove();

// FUNCTIONS as VALUES
function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out!");
};

setTimeout(handleTimeout2, 1000); // 3000 = wait before starting timer in ms

function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("Hi");
});

// FUNCTION in FUNCTION
function init() {
  function greet2() {
    console.log("greeting ..");
  }

  greet2(); // init() calls greet2()
}

init();

// REF versus PRIMITIVE

// primitives - passed by value
let um = "hello!";
um = um.concat(" ###");
console.log(um);

// objects passed by ref
console.log(hobbies2);
hobbies2.push("thinking");
console.log(hobbies2);
