const form = document.querySelector("#form-container");
const card = document.querySelector("#card");
const cardError = document.querySelector("#card-error");
const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardName-error");
const exp = document.querySelector("#exp");
const expError = document.querySelector("#exp-error");
const ccv = document.querySelector("#ccv");
const ccvError = document.querySelector("#ccv-error");
const button = document.querySelector(".submitForm");
const formSuccess = document.querySelector(".formSuccess");

function formValidation(event) {
    event.preventDefault();
    let formError = false;

    if (checkingLength(card.value.trim(), 12) === true) {
        cardError.style.display = "none";
    } else {
        cardError.style.display = "block";
        formError = true;
    }

    if (checkingLength(cardName.value.trim(), 0) === true) {
        cardNameError.style.display = "none";
    } else {
        cardNameError.style.display = "block";
        formError = true;
    }

    if (checkingLength(exp.value.trim(), 0) === true) {
        expError.style.display = "none";
    } else {
        expError.style.display = "block";
        formError = true;
    }

    if (checkingLength(ccv.value.trim(), 3) === true) {
        ccvError.style.display = "none";
    } else {
        ccvError.style.display = "block";
        formError = true;
    }

    if (formError) {
        formSuccess.style.display = "none";
    } else {
        window.location.href="./checkout_three.html";
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