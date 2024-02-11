const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const hero = document.querySelector(".hero-img");
const text = document.querySelector(".card");
const head = document.querySelector("header");
const foot = document.querySelector("footer");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "gray";
        main.style.color = "black";
        hero.style.background = "gray";
        head.style.background = "black";
        head.style.color = "white";
        foot.style.background = "black";
        foot.style.color = "white";
        modeButton.textContent = "💡";
    } else {
        main.style.background = "white";
        main.style.color = "#000";
        hero.style.background = "white";
        head.style.background = "navy";
        head.style.color = "white";
        foot.style.background = "navy";
        foot.style.color = "white";
        modeButton.textContent = "🕶️";
    }
});