const name = document.querySelector("#name");
const nameError = document.querySelector(".nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector(".subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector(".messageError");

const submissionSuccessful = document.querySelector(".submissionSuccessful");

const form = document.querySelector(".contactForm");

const button = document.querySelector("#contactFormButton");

form.addEventListener("submit", formValidation);

    

function formValidation() {

    event.preventDefault();

    if(lengthChecker(name.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    };

    if(emailTester(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };

    if(lengthChecker(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    };

    if(lengthChecker(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    };

    if(lengthChecker(name.value, 5) === true &&
        emailTester(email.value) === true && 
        lengthChecker(subject.value, 15) === true &&
        lengthChecker(message.value, 25) === true) {
            console.log("bonk");
        }
};

form.onsubmit = function (event) {
    event.preventDefault();

    if(lengthChecker(name.value, 5) === true &&
    emailTester(email.value) === true && 
    lengthChecker(subject.value, 15) === true &&
    lengthChecker(message.value, 25) === true) {
    button.style.display = "none";
    submissionSuccessful.style.display = "block";
    setTimeout(function () {
        name.value = "";
        subject.value = "";
        email.value = "";
        message.value = "";
        submissionSuccessful.style.display = "none";
        button.style.display = "block";
    }, 4000);
    return false;}

}


function lengthChecker(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
};

function emailTester(email) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const patternTest = regEx.test(email);
    return patternTest;
};


