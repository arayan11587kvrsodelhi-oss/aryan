let container = document.querySelector('.container');
let message = document.getElementById("message");

document.addEventListener("keyup", function () {
    let password = document.getElementById("yourPassword").value;

    let strength = checkStrength(password);

    container.classList.remove("weak", "moderate", "strong");

    if (password.length === 0) {
        message.innerHTML = "";
        return;
    }

    if (strength <= 2) {
        container.classList.add("weak");
        message.innerHTML = "Weak Password";
        message.style.color = "red";
    } 
    else if (strength <= 4) {
        container.classList.add("moderate");
        message.innerHTML = "Moderate Password";
        message.style.color = "orange";
    } 
    else {
        container.classList.add("strong");
        message.innerHTML = "Strong Password";
        message.style.color = "lime";
    }
});

function checkStrength(password) {
    let strength = 0;

    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    return strength;
}

function togglePassword() {
    let input = document.getElementById("yourPassword");

    input.type = input.type === "password" ? "text" : "password";
}