let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.value = "Create account";

submitButton.style.backgroundColor = "green";
submitButton.style.color = "white";
submitButton.style.padding = "14px 20px";
submitButton.style.margin = "8px 0";
submitButton.style.border = "none";
submitButton.style.cursor = "pointer";
submitButton.style.width = "25%";

submitButton.addEventListener("mouseover", function () {
    submitButton.style.opacity = "0.8";
});
submitButton.addEventListener("mouseout", function () {
    submitButton.style.opacity = "1";
});

const buttonDivElement = document.getElementById("createAccountButton");
buttonDivElement.appendChild(submitButton);

let createAccountButton = document.getElementById("createAccountButton");

createAccountButton.addEventListener("click", function (event) {
    event.preventDefault();
    let pswInput = document.getElementById("psw");
    let cpswInput = document.getElementById("cpsw");
    let psw = pswInput.value;
    let cpsw = cpswInput.value;
    ValidatePassword(psw, cpsw)
});

function ValidatePassword(password, confirmPassword) {

    if (password.trim() === confirmPassword.trim() && password.length !== 0 && confirmPassword.length !== 0) {
        document.getElementById("password_error").textContent = "";
        console.log("Account created")
    } else {
        document.getElementById("password_error").textContent = "Passwords do not match";
        document.getElementById("password_error").style.color = "red";
        document.getElementById("password_error").style.fontSize = "10px";
        document.getElementById("password_error").style.fontWeight = "bold";
    }


}

