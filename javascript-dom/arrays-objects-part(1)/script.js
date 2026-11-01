// Arrays and Objects Part 1

// Array Basics

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// console.log(skills[0]);
// console.log(skills[1]);
// console.log(skills[2]);
// console.log(skills[3]);


// Array Length Property

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// console.log(skills.length);
// console.log(skills[skills.length - 1]);

// console.log(skills[0]);
// console.log(skills[skills.length -1]);


// Updating Array Element

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills[1] = "React";
// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills[1] = "Tailwind CSS";
// skills[3] = "Django";

// console.log(skills);


// Adding Element with push()

// let skills = ["HTML", "CSS", "JavaScript"];

// skills.push("Python");

// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript"];

// skills.push("Java");
// skills.push("SQL");

// console.log(skills);


// Removing Elements with pop()

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills.pop();

// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Java", "SQL"];

// skills.pop();

// console.log(skills);


// shift() method

// let skills = ["HTML", "CSS", "JavaScript"];

// skills.shift();

// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills.shift();

// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// let removedSkill = skills.shift();

// console.log(removedSkill);
// console.log(skills);


// unshift() method

// let skills = ["CSS", "JavaScript", "Python"];

// skills.unshift("HTML");

// console.log(skills);

// let skills = ["CSS", "JavaScript", "Python"];

// skills.unshift("HTML");
// skills.unshift("React");

// console.log(skills);


// includes() method

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// console.log(skills.includes("Python"));
// console.log(skills.includes("Java"));

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// console.log(skills.includes("HTML"));
// console.log(skills.includes("React"));


// indexOf() method

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// console.log(skills.indexOf("JavaScript"));
// console.log(skills.indexOf("React"));

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// console.log(skills.indexOf("CSS"));
// console.log(skills.indexOf("Python"));
// console.log(skills.indexOf("Java"));


// slice() method

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// let frontend = skills.slice(0, 2);

// console.log(frontend);
// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Python", "SQL"];

// let backend = skills.slice(3, 5); // slice(start, end)

// console.log(backend);
// console.log(skills);


// splice() to removing method

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills.splice(2, 1);

// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Python", "SQL"];

// skills.splice(1, 2);  // splice(starting index, remove element count)

// console.log(skills);


// splice() to Add Elements

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills.splice(1, 0, "React");

// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills.splice(2, 0, "Bootstrap");

// console.log(skills);


// splice() to Replace Elements

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills.splice(1, 1, "Tailwind CSS");

// console.log(skills);

// let skills = ["HTML", "CSS", "JavaScript", "Python", "SQL"];

// skills.splice(2, 1, "React");

// console.log(skills);


// concat() method

// let frontend = ["HTML", "CSS"];
// let backend = ["Python", "Java"];

// let fullStack = frontend.concat(backend);

// console.log(fullStack);

// let fronted = ["HTML", "CSS", "JavaScript"];
// let backend = ["Python", "Django"];

// let skills = fronted.concat(backend);

// console.log(skills);


// join() method

// let skills = ["HTML", "CSS", "JavaScript"];

// let result = skills.join(" - ");

// console.log(result);

// let skills = ["HTML", "CSS", "Python", "Django"];

// let result = skills.join(", ");

// console.log(result);
// console.log(typeof result);


// reverse() method

// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// skills.reverse();

// console.log(skills);

// let numbers = [10, 20, 30, 40, 50];

// numbers.reverse();

// console.log(numbers);


// sort() method

// let numbers = [40, 10, 30, 20];

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// let numbers = [50, 10, 40, 20, 30];

// numbers.sort((a, b) => b - a);

// console.log(numbers);



// Javascript Objects

// let developer = {
//   name: "Dhanu",
//   role: "Full Stack Developer",
//   language: "JavaScript"
// };

// console.log(developer.name);
// console.log(developer.role);

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// console.log(developer.name);
// console.log(developer.role);


// Object Property Access

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// console.log(developer.name);
// console.log(developer["role"]);
// console.log(developer.experience);


// Updating Object Properties

// let developer = {
//    name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// developer.role = "Security Analyst";

// console.log(developer);

// let developer = {
//    name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// developer.technology = "Python";
// developer.experience = "3 years";

// console.log(developer);


// Adding New Object Properties

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
// };

// developer.location = "Bangalore";

// console.log(developer);

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// developer.company = "Google";
// developer.age = 22;

// console.log(developer);


// Deleting Object Properties

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   age: 22
// };

// delete developer.age;

// console.log(developer);

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years",
//   company: "Google"
// };

// delete developer.company;
// delete developer.technology;

// console.log(developer);


// Object.keys() 

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   age: 22
// };

// console.log(Object.keys(developer));

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// console.log(Object.keys(developer));


// Object.values()

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// console.log(Object.values(developer));

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// console.log(Object.values(developer));
// console.log(Object.values(developer).length);


// Object.entries()

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux"
// };

// console.log(Object.entries(developer));

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// console.log(Object.entries(developer));


// for in loop (object)

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux"
// };

// for (let key in developer) {
//   console.log(key); // property name
//   console.log(developer[key]); // property values
// }

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   technology: "Linux",
//   experience: "2 years"
// };

// for (let key in developer) {
//   console.log(key);
//   console.log(developer[key]);
// }


// Nested Objects

// let developer = {
//   name: 'Azuuuu',
//   role: "Cyber Security",

//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// console.log(developer.address.city);
// console.log(developer.address.country);

// let developer = {
//   name: 'Azuuuu',
//   role: "Cyber Security",

//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// console.log(developer.address.city);



// Nested Object properties update

// let developer = {
//   name: 'Azuuuu',
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// developer.address.city = "Mysore";
// developer.address.country = "USA";

// console.log(developer);

// let developer = {
//   name: 'Azuuuu',
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// developer.address.city = "Mysore";
// developer.address.country = "USA";
// developer.address.state = "Karnataka"


// console.log(developer.address);
// console.log(developer);


// Delete a nested property

// let developer = {
//   name: 'Azuuuu',
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// delete developer.address.country;

// console.log(developer);


// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// developer.address.city = "Mysore";
// developer.address.state = "Karnataka";
// delete developer.address.country;

// console.log(developer.address);



// Object Destructuring

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// const { name, role } = developer;

// console.log(name);
// console.log(role); 


// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// const { role: developerRole } = developer;

// const { address: developerAddress } = developer;

// console.log(developerAddress);


// Nested Destructuring

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// const {
//   address: {
//     city,
//     country
//   }
// } = developer;

// console.log(city);
// console.log(country);

// const { language = "JavaScript" } = developer;

// const { experience = 0 } = developer;

// console.log(language);
// console.log(experience);


// Object Rest Operator

// let developer = {
//   name: "Azuuuu",
//   role: "Cyber Security",
//   address: {
//     city: "Bangalore",
//     country: "India"
//   }
// };

// const { name, ...otherDetails } = developer;

// console.log(name);
// console.log(otherDetails);

// const { role, ...otherDetails } = developer;

// console.log(role);
// console.log(otherDetails);


// Object Spread Operator

let developer = {
  name: "Azuuuu",
  role: "Cyber Security",
  address: {
    city: "Bangalore",
    country: "India"
  }
};

// const updatedDeveloper = { ...developer };

// console.log(updatedDeveloper);

const finalDeveloper = { 
  ...developer,
  role: "Full Stack Developer",
  language: "JavaScript"
};

console.log(developer.role);
console.log(finalDeveloper.role);