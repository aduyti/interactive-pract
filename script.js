const email = "pola@baap.home";
const password = "baaperpola";

document.getElementById("input-submit").addEventListener("click", function () {
    if (document.getElementById("input-email").value == email && document.getElementById("input-password").value == password) {
        window.location.href = "banking.html";
    }
})