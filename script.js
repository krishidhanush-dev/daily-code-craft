function login() {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  if (username === "azuuu" && password === "1432") {
    document.getElementById("message").textContent = "Login successful!";
  } else {
    document.getElementById("message").textContent = "Invalid username or password";
  }
}