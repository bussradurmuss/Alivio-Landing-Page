"use strict";

const hamburger_menu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const close_button = document.querySelector(".close-button");

console.log(close_button);

hamburger_menu.addEventListener("click", () => {
    menu.style.display = "flex";
});

close_button.addEventListener("click", () => {
    menu.style.removeProperty("display");
});