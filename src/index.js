import "./styles/styles.css"
import "./styles/menu.css"
import "./styles/about.css"
import { firstLoad } from "./scripts/firstLoad";
import { loadMenuPage } from "./scripts/menu";
import { loadAboutPage } from "./scripts/about";
import { reset } from "./scripts/reset";

console.log("Hello World!");

firstLoad();

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelectorAll(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
homeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    menuOptions.classList.remove("show");
    firstLoad();
});

menuBtn.forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        menuOptions.classList.remove("show");
        reset();
        loadMenuPage();
    });
});

aboutBtn.addEventListener("click", function (event) {
    event.preventDefault();
    menuOptions.classList.remove("show");
    reset();
    loadAboutPage();
});

const menuOptionsBtn = document.querySelector(".menu-button");
const menuOptions = document.querySelector(".menu-options");
menuOptionsBtn.addEventListener("click", function () {
    if (menuOptions.classList.contains("show")) {
        menuOptions.classList.remove("show");
    } else {
        menuOptions.classList.add("show");
    }
});