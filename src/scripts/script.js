"use strict";
let numberOne = document.querySelector(".numOne");
let select = document.querySelector(".options");
let numberTwo = document.querySelector(".numTwo");
let btn = document.querySelector(".btn");
let p = document.querySelector("p")

btn.addEventListener("click", () => {
    if( select.value === "plus" ) {
        p.textContent = ( (+numberOne.value) + (+numberTwo.value));
    }else if (select.value === "minus") {
        p.textContent = ( (+numberOne.value) - (+numberTwo.value));
    }else if (select.value === "multiply") {
        p.textContent = ( (+numberOne.value) * (+numberTwo.value));
    }else if (select.value === "divide") {
        p.textContent = ( (+numberOne.value) / (+numberTwo.value));
    }else if (select.value === "percent") {
        p.textContent = ( (+numberOne.value) % (+numberTwo.value));
    }else{
        alert("Unday amal yoq");
    }
})   
