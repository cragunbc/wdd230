const todaysDate = new Date();
const visitedInfo = document.querySelector("#visited");
let visits = Number(window.localStorage.getItem("lastVisited-date")) || 0;
visits++;
localStorage.setItem("lastVisited-date", visits);

let storedDate = Number(window.localStorage.getItem("lastVisited-date"));
const date1 = new Date("2024-02-23");
const date2 = new Date("2024-02-24");



if (!storedDate) {
   localStorage.setItem("lastVisited-date", date1)
   storedDate = Number(window.localStorage.getItem("lastVisited-date"));
} else {
    const dateDiff = date2 - storedDate;
    const dateDiffInDays = dateDiff / (1000 * 60 * 60 * 24);
    console.log(dateDiffInDays);
    if (dateDiffInDays !== 0 && dateDiffInDays < 2) {
        visitedInfo.textContent = "Back so soon! Awesome!";
    } else if (dateDiffInDays > 1){
        visitedInfo.textContent = `You came back ${dateDiffInDays} days ago`;
    } else if (dateDiffInDays === 0 ){
        visitedInfo.textContent = "This is your first visit";
    }
}