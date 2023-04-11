
import { throttle } from "lodash";
const LOCALSTORAGE_KEY = "feedback-form-state";

const formField = document.querySelector(".feedback-form");
// console.log(formField);
const input = document.querySelector("input");
const textArea = document.querySelector("textarea"):
const email = formField.addEventListener("input", throttle(emailInput,500));
const message = formField.addEventListener("input", throttle(messageInput,500));
const submit = formField.addEventListener("submit", onSubmit);
let formArr = {email, message}

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    input.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
    textArea.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
} else {
    input.value = ""; 
    textArea.value = "";
}

function emailInput(evt) {

    if (evt.target.name === "email") {
        formArr.email = evt.target.value
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formArr))
    // console.log(evt.target.name);
    }
}

function messageInput(evt) {
    
    if (evt.target.name === "message") {
        formArr.message = evt.target.value
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formArr))
        // console.log(evt.target.value);
    
    }
}

function onSubmit(evt) {
    evt.preventDefault()
    console.log(formArr);
    localStorage.removeItem(LOCALSTORAGE_KEY);
input.value = ""; 
    textArea.value = "";
}