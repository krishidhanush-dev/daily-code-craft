// JavaScript Functions

// function greet() {
//   console.log("Radhe Radhe! 💐");
// }

// greet();

// function greet() {
//   console.log("Hello Developer");
// }
// No function call


// function welcome() {
//   console.log("Welcome to JavaScript Functions!");
// }

// welcome();
// welcome();


// Parameters and Arguments

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Radhe");
// greet("Krishna");

// function introduce(name, skill) {
//   console.log("My name is " + name + " and I am learning " + skill);
// }

// introduce("Dhanush", "JavaScript");
// introduce("Krishna", "Python");


// JavaScript Return Statement

// function add(a, b) {
//   return a + b;
// }

// let result = add(10, 20);
// console.log(result);

// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(5, 4);
// console.log(result);


// Function Expression

// const greet = function(name) {
//   return "Hello " + name;
// };

// console.log(greet("Krishna"));


// const subtract = function(a, b) {
//   return a - b;
// };

// console.log(subtract(20, 8));


// JavaScript Arrow Functions

// const add = function(a, b) {
//   return a + b;
// }; // normal function

// const addition = (x, y) => {
//   return x + y;
// }; // arrow function

// console.log(addition(10, 5));

// const add = (a, b) => a + b; // shorter syntax

// const square = (num) => {
//   return num * num;
// };

// console.log(square(6));


// Arrow Function Implicit Return

// const square = (num) => {
//   return num * num;
// }; // explicit return


// const square = num => num * num; // implicit return

// const square = num => num * num;

// console.log(square(8));


// Default Parameters

// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet("Krishna");
// greet();

// function calculatePrice(price, quantity = 1) {
//   return price * quantity;
// } 

// console.log(calculatePrice(100, 5));
// console.log(calculatePrice(100));


// Function Scope

// let name = "Krishna";

// function greet() {
//   let message = "Radhe Radhe!";
//   console.log(name);
//   console.log(message);
// }

// greet();

// let x = 10;

// function test() {
//   let y = 20;
//   console.log(x + y);
// }

// test();
// console.log(y);

// const language = "JavaScript";

// function showSkill() {
//   let level = "Beginner";
//   console.log("Language: " + language);
//   console.log("Level: " + level);
// }

// showSkill();
// console.log(level);


// JavaScript Block Scope (let vs var)

// if (true) {
//   let age = 21;
//   var city = "Bengaluru";
// }

// console.log(city);
// console.log(age);

// function checkScope() {
//   if (true) {
//     let x = 10;
//     var y = 20;
//   }

//   console.log(y);
//   console.log(x);
// }

// checkScope();

// function studentInfo() {
//   if (true) {
//     let name = "Dhanush";
//     var course = "MCA";
//   }

//   console.log(course);
//   console.log(name);
// }

// studentInfo();


// JavaScript Function Hoisting

// greet();

// function greet() {
//   console.log("Radhe Radhe!");
// } // function declaration

// greet();

// const greet = function() {
//   console.log("Radhe Radhe!");
// } // function expression


// multiply(5, 4); 

// function multiply(a, b) {
//   console.log(a * b);
// }

// showMessage();

// function showMessage() {
//   console.log("learning JavaScript Hoisting!");
// }



const showMessage = function () {
  console.log("Learning JavaScript Hoisting!");
};

showMessage();


function calculateTotal(price, quantity) {
  return price * quantity;
} 

const total = calculateTotal(100, 3);

console.log(total);