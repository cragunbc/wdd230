const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const head = document.querySelector("header");
const foot = document.querySelector("footer");
const member = document.querySelector("#member");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "lightgray";
        main.style.color = "black";
        head.style.background = "black";
        head.style.color = "white";
        foot.style.background = "black";
        foot.style.color = "white";
        member.style.background = "lightgray";
        modeButton.textContent = "💡";
    } else {
        main.style.background = "white";
        main.style.color = "#000";
        head.style.background = "navy";
        head.style.color = "white";
        foot.style.background = "navy";
        foot.style.color = "white";
        member.style.background = "white";
        modeButton.textContent = "🕶️"
    }
});