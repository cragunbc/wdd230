const pw1 = document.querySelector("#pwd1");
const pw2 = document.querySelector("#pwd2");
const formMessage = document.querySelector("#message");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pw1.value !== pw2.value) {
        formMessage.textContent = "Passwords DO NOT MATCH";
        formMessage.style.visibility = "show";
        formMessage.style.color = "red";
        pw2.style.backgroundColor = "red";
        pw2.value = "";
        pw2.focus();
    } else {
        formMessage.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
}

const rangeValue = document.querySelector("#rangevalue");
const range = document.querySelector("#pageRat");

range.addEventListener('change', dispalyRatingValue);
range.addEventListener('input', dispalyRatingValue);

function dispalyRatingValue() {
    rangeValue.innerHTML = range.value;
}