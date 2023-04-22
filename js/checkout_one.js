const form = document.querySelector("#form-container");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullName-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const button = document.querySelector(".submitForm");
const formSuccess = document.querySelector(".formSuccess");

function formValidation(event) {
    event.preventDefault();
    let formError = false;

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
        formError = true;
    }
    if (checkingLength(fullName.value.trim(), 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        formError = true;
    }

    if (checkingLength(address.value.trim(), 0) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        formError = true;
    }

    if (formError) {
        formSuccess.style.display = "none";
    } else {
        window.location.href="/checkout_two.html";
    }
}

form.addEventListener("submit", formValidation);


function checkingLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailChecked = regEx.test(email);
    return emailChecked;
}