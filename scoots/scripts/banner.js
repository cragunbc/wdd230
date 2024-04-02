const banner = document.querySelector(".banner");
const banner_button = document.querySelector("#close-button");

banner_button.addEventListener("click", () => {
    banner.style.display = "none";
});