function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    return showMessage("Password must be at least 6 characters");
  }

  const user = {
    email,
    password: hashPassword(password)
  };

  localStorage.setItem("user", JSON.stringify(user));
  showMessage("Signup successful!");
}

function login() {
  const email = document.getElementById("email").value;
  const password = hashPassword(document.getElementById("password").value);

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
    return showMessage("Invalid credentials");
  }

  localStorage.setItem("isAuthenticated", "true");
  window.location.href = "dashboard.html";
}

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
}