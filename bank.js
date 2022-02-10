const buttons = document.getElementsByTagName("BUTTON");
for (const btn of buttons) {
    btn.addEventListener("click", function () {
        var operation = btn.getAttribute("id");
        var amount = parseFloat(document.getElementById(operation + "-amount").value);
        document.getElementById(operation + "-amount").value = "";

        // console.log(document.getElementById("current-" + operation).innerText);
        document.getElementById("current-" + operation).innerText = parseFloat(document.getElementById("current-" + operation).innerText) + amount;

        if (operation == "deposit") {
            document.getElementById("balance").innerText = parseFloat(document.getElementById("balance").innerText) + amount;
        }
        else if (operation == "withdraw") {
            document.getElementById("balance").innerText = parseFloat(document.getElementById("balance").innerText) - amount;
        }
        // console.log(operation, amount);
    })
}