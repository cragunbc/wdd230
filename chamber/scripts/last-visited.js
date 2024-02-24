const msToDays = 3600000;
const todaysDate = new Date();
const lastVisited = document.querySelector("#visited");
let visits = Number(window.localStorage.getItem("lastVisited-ls")) || 0;
const today = Date.now();

if (today / today < 2) {
    lastVisited.textContent = "Back so soon! Awesome!";
} else if (visits >= 2 ){
    lastVisited.textContent = "You came back 5 days ago";
} else {
    lastVisited.textContent = "This is your first visit";
}

lastVisited.textContent = today;

visits++;
localStorage.setItem("lastVisited-ls", visits);