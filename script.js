function login() {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  let message = document.getElementById("message");

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (username === "") {
    message.textContent = "Please enter username";
    return;
  }

  if (password === "") {
    message.textContent = "Please enter password";
    return;
  }

  if (savedUser && username === savedUser.username && password === savedUser.password) {
    message.textContent = "Login successful!";
  } else {
    message.textContent = "Invalid username or password";
  }

}

function register() {
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  let confirmPassword = document.getElementById("confirmPassword").value;

  let message = document.getElementById("message");

  if (name === "") {
    message.textContent = "Please enter your name";
    return;
  }

  if (email === "") {
    message.textContent = "Please enter your email";
    return;
  }

  if (username === "") {
    message.textContent = "Please enter username";
    return;
  }

  if (password === "") {
    message.textContent = "Please enter your password";
    return;
  }

  if (confirmPassword === "") {
    message.textContent = "Please confirm your password";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Please does not match";
    return;
  }

  let user = {
    name: name,
    email: email,
    username: username,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  console.log("Register function is running")
  message.textContent = "Registration successful!"

}