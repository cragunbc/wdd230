const currentTemperature = document.querySelector("#current-temp");
const currentWeatherIcon = document.querySelector("#weather-icon");
const currentCaptionDesc = document.querySelector("figcaption");
const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=41.09&lon=-112.06&units=imperial&appid=60d1bc253403b22d2d659064abbf8f2e";

async function apiFetch() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            let temp = data.main.temp;
            let speed = data.wind.speed;
            console.log(data);
            displayResults(data);
            currentwindChill(temp, speed);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
    document.getElementById("wind-speed").innerHTML = data.wind.speed;

}


function currentwindChill(temp, speed) {
    // let temp = data.main.temp_max;
    // let speed = data.wind.speed;
    if (temp >= 50 && speed > 3) {
        return document.querySelector("#windChill").innerHTML = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(2);
    } else {
        return document.querySelector("#windChill").innerHTML = `N/A`;
    }
}