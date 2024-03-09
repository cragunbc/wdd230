const modeButton = document.querySelector("#mode");
const main = document.querySelector("#directory-main");
const head = document.querySelector("header");
const foot = document.querySelector("footer");
const menu = document.querySelector(".directory-menu");
const section = document.querySelector("members");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "gray";
        main.style.color = "black";
        head.style.background = "black";
        head.style.color = "white";
        foot.style.background = "black";
        foot.style.color = "white";
        menu.style.background = "gray";
        modeButton.textContent = "💡";
    } else {
        main.style.background = "white";
        main.style.color = "#000";
        head.style.background = "navy";
        head.style.color = "white";
        foot.style.background = "navy";
        foot.style.color = "white";
        menu.style.background = "white";
        modeButton.textContent = "🕶️"
    }
});