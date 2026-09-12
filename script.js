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