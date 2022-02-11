const buttons = document.getElementsByTagName("BUTTON");
for (const btn of buttons) {
    btn.addEventListener("click", function () {
        var operation = btn.getAttribute("id");
        var amount = document.getElementById(operation + "-amount").value;
        document.getElementById(operation + "-amount").value = "";

        // console.log(document.getElementById("current-" + operation).innerText);
        if (parseFloat(amount) > 0) {
            const currentAmount = document.getElementById("current-" + operation);
            currentAmount.innerText = parseFloat(currentAmount.innerText) + parseFloat(amount);

            const balance = document.getElementById("balance");
            if (operation == "deposit") {
                balance.innerText = parseFloat(balance.innerText) + parseFloat(amount);
            }
            else if (operation == "withdraw") {
                balance.innerText = parseFloat(balance.innerText) - parseFloat(amount);
            }
        }
        else {
            alert("Wrong Input")
        }
        // console.log(operation, amount);
    })
}