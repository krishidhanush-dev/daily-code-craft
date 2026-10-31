// Data Types (null vs undefined)

// undefined

// let userEmail;

// console.log(userEmail);

// null

// let selectedEmail = null;

// console.log(selectedEmail);


// let userEmail;
// let selectedEmail = null;

// console.log(userEmail);
// console.log(selectedEmail);

// console.log(typeof userEmail); // undefined
// console.log(typeof selectedEmail); // object

// let age;
// let score = null;

// console.log(age);
// console.log(score);
// console.log(typeof age);
// console.log(typeof score);


//  == vs ===

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false


// console.log(10 == "10"); // true
// console.log(10 === "10"); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false


// truthy and falsy

// if ("hello") {
//   console.log("Hello!");
// }

// if (0) {
//   console.log("Zero!");
// }

// if ("0") {
//   console.log("A");
// }

// if ("") {
//   console.log("B");
// }

// if (null) {
//   console.log("C");
// }

// if ([]) {
//   console.log("D");
// }


// Logical NOT Operator

// console.log(!true);
// console.log(!false);
// console.log(!0);
// console.log(!"hello");

// console.log(!"");
// console.log(!"0");
// console.log(!!"hello");
// console.log(!!0);


// Logical AND (&&)

// let age = 22;
// let hasID = true;

// if (age >= 18 && hasID) {
//   console.log("Entry Allowed");
// }

// console.log(true && true);
// console.log(true && false);
// console.log(5 > 2 && 10 > 3);
// console.log(5 > 2 && 10 < 3);


// Logical OR (||)

// let hasCash = false;
// let hasUPI = true;

// if (hasCash || hasUPI) {
//   console.log("Payment possible");
// }

// console.log(true || false);
// console.log(false || false);
// console.log(5 < 2 || 10 > 3);
// console.log(5 > 10 || 2 > 8);


// Logical NOT (!) 

// let age = 20;
// let hasID = true;

// console.log(age >= 18 && hasID); // true
// console.log(age >= 18 && !hasID); // false
// console.log(age < 18 || hasID); // true


// let isLoggedIn = true;
// let isAdmin = false;

// console.log(isLoggedIn && !isAdmin); // true
// console.log(!isLoggedIn || isAdmin); // false
// console.log(isLoggedIn && isAdmin); // false
// console.log(!isAdmin || !isLoggedIn); // true


// Nullish coalescing operator (??)

// let userName = null;

// console.log(userName ?? "Guest");

// let score = 0;

// console.log(score ?? 100);

// console.log(0 || 100);
// console.log(0 ?? 100);


// console.log(null ?? "Hello"); // Hello
// console.log(0 ?? 50); // 0
// console.log(undefined ?? "Guest"); // Guest
// console.log("" ?? "Default"); // Default


// Ternary Operator (? :)

// let age = 20;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// } 

// same logic using ternary:

// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);

// console.log(5 > 3 ? "Yes" : "No"); 
// console.log(10 < 5 ? "True" : "False");

// let age = 16;
// console.log(age >= 18 ? "Adult" : "Minor");

// let score = 80;
// console.log(score >= 50 ? "Pass" : "Fail");


// Switch statement

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   default:
//     console.log('Unknown day');
// }

// let fruit = "apple";

// switch (fruit) {
//   case "banana":
//     console.log("Yellow");
//     break;

//   case "apple":
//     console.log("Red");
//     break;

//   case "grape":
//     console.log("Purple");
//     break;

//   default:
//     console.log('Unknown Fruit');
// }

// let level = 1;

// switch (level) {
//   case 1:
//     console.log("Beginner");
//     break;

//   case 2:
//     console.log("Intermediate");
//     break;

//   default:
//     console.log("Advanced");
// }


// Switch grouping case

// let day = "Sunday";

// switch (day) {
//   case "Saturday":
//   case "Sunday":
//     console.log("Weekend");
//     break;

//   default:
//     console.log("Weekday");
// }


// let day = "Wednesday";

// switch (day) {
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//     console.log("First half of the week");
//     break;

//   case "Thursday":
//   case "Friday":
//     console.log("Almost weekend");
//     break;

//   default:
//     console.log("Weekend");
// }


// switch vs if...else

// condition check 
// let age = 20;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// } 

// // one value multiple options compare 

// let role = "admin";

// switch (role) {
//   case "admin":
//     console.log("Full access");
//     break;

//   case "user":
//     console.log("Limited access");
//     break;

//   default:
//     console.log("Unknown role");
// }

// let value = "1";

// switch (value) {
//   case 1:
//     console.log("Number");

//   case "1":
//     console.log("String");
//     break;
  
//   default:
//     console.log("Unknown");
// }


// JavaScript for loop 

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 2; i <=4; i++) {
//   console.log(i);
// }

// for (let i = 2; i <= 8; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 7; i += 3) {
//   console.log(i);
// }

// for (let i = 3; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 5; i >=1; i -= 2) {
//   console.log(i);
// }


// break and continue in a for loop

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 4) {
//     break;
//   }

//   console.log(i);
// }


// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 2) {
//     continue;
//   }

//   console.log(i);
// }

// Nested for loops

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log(i);
//   }
// }


// for (let i = 1; i <= 3; i++) {
//   let row = "";

//   for (let j = 1; j <= 3; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// for (let i = 1; i <= 3; i++) {
//   let row = "";

//   for (let j = 1; j <= 1; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// for (let i = 1; i <= 4; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "# ";
//   }

//   console.log(row);
// }


// While loop

// let i = 1;

// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// let i = 2;

// while (i <= 6) {
//   console.log(i);
//   i += 2;
// }


// do..while

// let i = 5;

// do {
//   console.log(i);
//   i++;
// } while(i <= 3);


// let x = 10;

// do {
//   console.log(x);
//   x++;
// } while (x < 5);


// for....of loop

// const fruits = ["Apple", "Mango", "Grapes"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const numbers = [10, 20, 30];

// for (const num of numbers) {
//   console.log(num + 5);
// }


// for....in loop

// const student = {
//   name: "Dhanu",
//   age: 22,
//   course: "MCA"
// };

// for (const key in student) {
//   console.log(key);
// } 

// object-na values 

// for (const key in student) {
//   console.log(student[key]);
// }

// const car = {
//   brand: "Toyota",
//   year: 2024
// };

// for (const key in car) {
//   console.log(car[key]);
// }


// Array.forEach()

// const fruits = ["Apple", "Mango", "Grapes"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// const numbers = [2, 4, 6];

// numbers.forEach(function (num) {
//   console.log(num * 2);
// });


// Arrow function with forEach()

// const numbers = [2, 4, 6];

// numbers.forEach((num) => {
//   console.log(num * 2);
// });

// const prices = [10, 20, 30];

// prices.forEach((price) => {
//   console.log(price + 5);
// });


// map() method

// const numbers = [1, 2, 3];

// const doubled = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubled);

// const numbers = [3, 5, 7];

// const result = numbers.map((num) => {
//   return num + 10;
// });

// console.log(result);


// filter() method

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);

// const ages = [12, 18, 25, 16, 30];

// const adults = ages.filter((age) => {
//   return age >= 18;
// });

// console.log(adults);


// reduce() method

// const prices = [100, 200, 300];

// const total = prices.reduce((sum, price) => {
//   return sum + price;
// }, 0);

// console.log(total);

// const numbers = [5, 10, 15];

// const result = numbers.reduce((sum, num) => {
//   return sum + num;
// }, 0);

// console.log(result);


// find() method

// const numbers = [4, 7, 10, 13];

// const result = numbers.find((num) => {
//   return num > 8;
// });

// console.log(result);

// const numbers = [3, 8, 12, 16];

// const result = numbers.find((num) => {
//   return num > 10;
// });

// console.log(result);


// some() method

// const numbers = [2, 4, 7, 8];

// const result = numbers.some((num) => {
//   return num % 2 !== 0;
// });

// console.log(result);


// const numbers = [2, 4, 6, 8];

// const result = numbers.some((num) => {
//   return num > 5;
// });

// console.log(result);


// every() method

// const numbers = [2, 3, 4, 6, 8];

// const result = numbers.every((num) => {
//   return num % 2 === 0;
// });

// console.log(result);


// const numbers = [10, 20, 30, 40];

// const result  = numbers.every((num) => {
//   return num >= 20;
// });

// console.log(result);

// Array methods revision

// Practice Test

// const marks = [35, 48, 72, 90];

// const passed = marks.filter((mark) => {
//   return mark >= 50;
// });

// console.log(passed);

// const prices = [100, 200, 50];

// const total = prices.reduce((sum, price) => {
//   return sum + price;
// }, 0);

// console.log(total);

// const numbers = [1, 2, 3, 4];

// const result = numbers.map((num) => {
//   return num * 2;
// });

// console.log(result);

// const numbers = [5, 12, 18, 25];

// const result = numbers.find((num) => {
//   return num > 15;
// });

// console.log(result);

// const ages = [18, 22, 16, 25];

// const result = ages.every((age) => {
//   return age >= 18;
// });

// console.log(result);

// const scores = [45, 60, 75, 30];

// const result = scores.some((score) => {
//   return score >= 70;
// });

// console.log(result);

// const scores = [45, 60, 75, 30];

// const result = scores.filter((score) => {
//   return score >= 60;
// });

// console.log(result);

// const numbers = [2, 5, 8, 11];

// const result = numbers.filter((num) => {
//   return num > 4;
// }).map((num) => {
//   return num * 2;
// });

// const result = numbers.filter((num) => num > 4).map((num) => num * 2);

// console.log(result);

// const numbers = [-5, 10, -2, 20, 5];

// const result = numbers.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);

// console.log(result);


// const numbers = [3, 7, 10, 15];

// const result = numbers.find((num) => num > 8);

// console.log(result * 2);

// const numbers = [4, 9, 12, 15];

// const result = numbers.some((num) => num % 2 !== 0);

// console.log(result);


const products = [
  {name: "Mouse", price: 500},
  {name: "Keyboard", price: 1200},
  {name: "Monitor", price: 8000},
  {name: "USB Cable", price: 200}
];

const items = products.filter((product) => {
  return product.price >= 1000;
});

const names = items.map((product) => {
  return product.name;
});

const price = items.reduce((sum, product) => {
  return sum + product.price;
}, 0);


console.log(items);
console.log(names);
console.log(price);

