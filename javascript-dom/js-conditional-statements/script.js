// Conditional Statements

// if-statement

// let age = 20;

// if (age >= 18) {
//   console.log("You are eligible to vote");
// }

// let marks = 75;

// if (marks >= 35) {
//   console.log("Pass");
// }

// let temperature = 25;

// if (temperature > 30) {
//   console.log("It's hot");
// }

// console.log("Weather checked");


// if-else statement

// let marks = 30;

// if (marks >= 35) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// let age = 16;

// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("not eligible to vote");
// }

// let password = "12345";

// if (password === "admin123") {
//   console.log("Login Successful");
// } else {
//   console.log("Invalid Password");
// }


// else-if Statement

// let marks = 75;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 35) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

// let signal = "yellow";

// if (signal === "red") {
//   console.log("Stop");
// } else if (signal === "yellow") {
//   console.log("Wait");
// } else if (signal === "green") {
//   console.log("Go");
// } else {
//   console.log("Invalid Signal");
// }

// let score = 85;

// if (score >= 90) {
//   console.log("Excellent");
// } else if (score >= 70) {
//   console.log("Good");
// } else if (score >= 50) {
//   console.log("Average");
// } else {
//   console.log("Fail");
// }


// Nested Conditions

// let isLoggedIn = true;
// let isAdmin = false;

// if (isLoggedIn) {
//   if (isAdmin) {
//     console.log("Welcome Admin");
//   } else {
//     console.log("Welcome User");
//   }
// } else {
//   console.log("Please Login");
// }

// let attendance = 80;
// let feesPaid = true;

// if (attendance >= 75) {
//   if (feesPaid) {
//     console.log("Eligible for Exam");
//   } else {
//     console.log("Pay Fees");
//   }
// } else {
//   console.log("Low Attendance");
// }

// let age = 20;
// let hasID = false;

// if (age >= 18) {
//   if (hasID) {
//     console.log("Entry Allowed");
//   } else {
//     console.log("ID required");
//   }
// } else {
//   console.log("Underage");
// }


// Ternary Operator (? :)

// let age = 20;

// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// } // using ternary operator logic 
 
// let age = 20;

// let result = age >=18 ? "Eligible" : "Not Eligible";

// console.log(result);

// let marks = 28;

// let result = marks >= 35 ? "Pass" : "Fail";

// console.log(result);

// let isLoggedIn = false;

// let message = isLoggedIn ? "Welcome" : "Please Login";

// console.log(message);


// Switch Statement 

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Day");
}

let signal = "green";

switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Wait");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;

  case "apple":
    console.log("Red");
    break;

  default:
    console.log("Unknown");
}

// let marks = 82;
// let attendance = 70;

// if (marks >= 75) {
//   if (attendance >= 75) {
//     console.log("Eligible for Scholarship");
//   } else {
//     console.log("Attendance Too Low");
//   }
// } else {
//   console.log("Marks Too Low");
// }

let marks = 65;

let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}

let result = grade === "Fail" ? "Try Again" : "You Passed";

console.log(grade);
console.log(result);

