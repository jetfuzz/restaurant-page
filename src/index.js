import "./style.css";
import { displayHomepage } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

let contentDiv = document.getElementById("content");
let homeBtn = document.getElementById("homeBtn");
let menuBtn = document.getElementById("menuBtn");
let aboutBtn = document.getElementById("aboutBtn");


document.addEventListener("DOMContentLoaded", () => {
    displayHomepage();
    document.getElementById("viewMenuBtn").addEventListener("click", () => {
        removeAllChildNodes(contentDiv);
        displayMenu();
    })
})

homeBtn.addEventListener("click", () => {
    removeAllChildNodes(contentDiv);
    displayHomepage();
    document.getElementById("viewMenuBtn").addEventListener("click", () => {
        removeAllChildNodes(contentDiv);
        displayMenu();
    })
})

menuBtn.addEventListener("click", () => {
    removeAllChildNodes(contentDiv);
    displayMenu();
})

aboutBtn.addEventListener("click", () => {
    removeAllChildNodes(contentDiv);
    displayAbout();
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}