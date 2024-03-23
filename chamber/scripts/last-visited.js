const todaysDate = Date.now();
const visitedInfo = document.querySelector("#visited");
let visits = Number(window.localStorage.getItem("lastVisited-ls")) || 0;
visits++;
localStorage.setItem("lastVisited-ls", visits);

let storedDate = window.localStorage.getItem("lastVisited-date");

if (!storedDate) {
   storedDate = window.localStorage.setItem("lastVisited-date", Date.now());
   visitedInfo.textContent = "This is your first visit!";
} else {
    const dateDiff = todaysDate - storedDate;
    const dateDiffInDays = dateDiff / (1000 * 60 * 60 * 24);
    // console.log(dateDiffInDays);
    if (dateDiffInDays >= 0 && dateDiffInDays < 1) {
        visitedInfo.textContent = "Back so soon! Awesome!";
    } else {
        visitedInfo.textContent = `You came back ${Math.round(dateDiffInDays)} days ago`;
    }
    storedDate = window.localStorage.setItem("lastVisited-date", Date.now());
}