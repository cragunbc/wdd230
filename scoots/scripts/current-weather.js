const currentTemperature = document.querySelector("#current-temp");
const currentMaxTemperature = document.querySelector("#current_max_temp");
const currentHumidity = document.querySelector("#current-humidity");
const weatherIcon = document.querySelector("#weather-icon");
const currentCaptionDesc = document.querySelector("#desc");
const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.94&units=imperial&appid=60d1bc253403b22d2d659064abbf8f2e";

async function apiFetch() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        // console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentMaxTemperature.innerHTML = `${data.main.temp_max}&deg;F`
    currentTemperature.innerHTML = `${data.main.temp}`;
    currentHumidity.innerHTML = `${data.main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    currentCaptionDesc.innerHTML = `${desc}`;
}