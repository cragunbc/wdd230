const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=60d1bc253403b22d2d659064abbf8f2e";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(url) {
    currentTemp.innerHTML = `${data.currentTemp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/10d.png`;
    let desc = data.weather[0].desc;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "rainy");
    captionDesc.textContent = `${desc}`;
}