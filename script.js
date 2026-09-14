function login() {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  let message = document.getElementById("message");

  if (username === "") {
    message.textContent = "Please enter username";
    return;
  }

  if (password === "") {
    message.textContent = "Please enter password";
    return;
  }

  if (username === "azuuu" && password === "1432") {
    document.getElementById("message").textContent = "Login successful!";
  } else {
    document.getElementById("message").textContent = "Invalid username or password";
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

  message.textContent = "Registration successful!"
}