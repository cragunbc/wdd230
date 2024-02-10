const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const hero = document.querySelector(".hero-img");
const text = document.querySelector(".card");
const head = document.querySelector("header");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "black";
        main.style.color = "black";
        hero.style.background = "black";
        head.style.background = "gray";
        modeButton.textContent = "💡";
    } else {
        main.style.background = "white";
        main.style.color = "#000";
        hero.style.background = "white";
        head.style.background = "red";
        modeButton.textContent = "🕶️";
    }
});