const banner = document.querySelector(".banner");
const banner_button = document.querySelector("#banner-close");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const day = "Tuesday";


if(day === "Monday" || day === "Tuesday" || day === "Wednesday") {
    banner.style.display = "block";
    console.log("This block is working");
    // console.log();
} else {
    banner.style.display = "none";
}

banner_button.addEventListener("click", () => {
    banner.style.display = "none";
});