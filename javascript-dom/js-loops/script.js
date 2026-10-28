// Looping Statements

// for loop

// for (let i = 1; i <=5; i++) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }


// While loop

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 5;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }


// do-while loop

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let i = 1;

// do {
//   console.log(i);
//   i += 2;
// } while (i <= 5);


// Break Statement

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     break;
//   }

//   console.log(i);
// }


// Continue Statement

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5 || i === 8) {
//     continue;
//   }

//   console.log(i);
// }


// Task

// for (let i = 1; i <= 20; i++) {
//   if (i === 15) {
//     break;
//   }

//   if (i % 3 === 0) {
//     continue;
//   }

//   console.log(i);
// }

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }

  if (i === 6) {
    break;
  }

  console.log(i);
}