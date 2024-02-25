const todaysDate = new Date();
const today = Date.now();
const msToDays = 84600000;
let dateVisit = Number(window.localStorage.getItem("dateVisits-ls")) || 0;
localStorage.setItem("dateVisits-ls", today);

const vistedInfo = document.querySelector("#visited");

if (dateVisits !== 0 ) {
    visitedInfo.textContent = "this is a test";
} else {
    visitedInfo.textContent = "Welcome! Let us know if you have any questions."
}
