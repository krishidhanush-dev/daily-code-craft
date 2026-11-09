// DOM Manipulation  => Select → Store → Modify

// DOM selection - Part 1

// const heading = document.getElementById("heading");

// heading.textContent = "Radhe Radhe!";

// const heading = document.getElementById("title");

// console.log(heading); // show selected element

// const myHeading = document.getElementById("course");

// console.log(myHeading);


// textContent - part 2

// const myHeading = document.getElementById("course");

// myHeading.textContent = "DOM Manipulation";

// const myHeading = document.getElementById("course");

// myHeading.textContent = "I am a Full Stack Developer";


// querySelector() 

// const heading = document.querySelector("#title");

// const paragraph = document.querySelector(".message");


// const statusText = document.querySelector(".status");

// statusText.textContent = "Learning JavaScript DOM";


// querySelectorAll() 

// const topics = document.querySelectorAll(".topic");

// console.log(topics);
// console.log(topics.length);

// const mySkills = document.querySelectorAll(".skill");

// console.log(mySkills);
// console.log(mySkills.length);


// forEach()

// const mySkills = document.querySelectorAll(".skill");

// mySkills.forEach(function (skill) {
//   console.log(skill.textContent);
// });

// const mySkills = document.querySelectorAll(".skill");

// mySkills.forEach(function (skill) {
//   console.log(skill.textContent.toUpperCase());
// });


// DOM text-na modify

// const mySkills = document.querySelectorAll(".skill");

// mySkills.forEach(function (skill) {
//   skill.textContent = skill.textContent.toUpperCase();
// });

// const myTopics = document.querySelectorAll(".topic");

// myTopics.forEach(function (topic) {
//   topic.textContent = topic.textContent.toUpperCase();
// });


// classList.add()

// const message = document.querySelector("#message");

// message.classList.add("highlight");

// const heading = document.querySelector("#heading");

// heading.classList.add("active");


// classList.toggle()

// const heading = document.querySelector("#heading");

// heading.classList.toggle("active");

// const paragraph = document.querySelector("#status");

// paragraph.classList.toggle("dark");


// classList.contains()

// const paragraph = document.querySelector("#status");

// console.log(paragraph.classList.contains("dark"));

// const loginButton = document.querySelector("#loginBtn");

// console.log(loginButton.classList.contains("active"));


// DOM Events - addEventListener()

// const button = document.querySelector("#myButton");

// button.addEventListener("click", function () {
//   console.log("Button clicked!");
// });

// const button = document.querySelector("#greetBtn");

// button.addEventListener("click", function () {
//   console.log("Radhe Radhe!");
// });


// event parameter

// const button = document.querySelector("#greetBtn");

// button.addEventListener("click", function (event) {
//   console.log(event.type);
// });

// const button = document.querySelector("#greetBtn");

// button.addEventListener("click", function (event) {
//   console.log(event.type);
//   console.log(event.target);
// });


// event.target vs event.currentTarget

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", function (event) {
//   console.log("Target:", event.target); 
//   console.log("Current Target:", event.currentTarget);
// });


// event.preventDefault()

// const form = document.querySelector("#myForm");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   console.log("Form submitted!");
// });


// const link = document.querySelector("#myLink");

// link.addEventListener("click", function (event) {
//   event.preventDefault();

//   console.log("Link clicked!");
// });


// Form Validation with DOM Events

// const form = document.querySelector("#registerForm");
// const username = document.querySelector("#username");
// const message = document.querySelector("#message");

// form.addEventListener("submit", function (event) {

//   event.preventDefault();
  
//   console.log(username.value);

//   if (username.value.trim() === "") {
//     message.textContent = "Please enter your name";
//   } else {
//     message.textContent = "Welcome, " + username.value + "!";
//   }

// });

// trim()

// const name = "  Dhanu  ";

// console.log(name.trim());



// Event Delegation

// const buttons = document.querySelector("button");

// buttons.forEach(function (button) {
//   button.addEventListener("click", function() {
//     console.log(this.texContent);
//   });
// });

const container = document.querySelector("#container");

container.addEventListener("click", function (event) {

  if (event.target.tagName === "BUTTON") {
    console.log(event.target.texContent);
  }

});
