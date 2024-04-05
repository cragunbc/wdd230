const tomorrowTemp = document.querySelector("#tomorrow-temp");
const tomorrowHumidity = document.querySelector("#tomorrow-humidity");
const tomorrowDesc = document.querySelector("#tomorrow-desc");
const tomorrowIcon = document.querySelector("#tomorrow-weather-icon");
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.50&lon=-86.94&units=imperial&appid=60d1bc253403b22d2d659064abbf8f2e";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeatherResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeatherResults(data) {
    const tomorrowForecast = data.list.filter(x => x.dt_txt.includes("15:00:00"));
    console.log(tomorrowForecast);
    const iconsrc1 = `https://openweather.org/img/wn/${tomorrowForecast[0].weather[0].icon}.png`;
    let desc1 = tomorrowForecast[0].weather[0].description;
    tomorrowTemp.innerHTML = `${tomorrowForecast[0].main.temp}&deg;F`;
    tomorrowHumidity.innerHTML = `${tomorrowForecast[0].main.humidity}%`;
    tomorrowIcon.setAttribute("src", iconsrc1);
    tomorrowIcon.setAttribute("alt", desc1);
    tomorrowDesc.innerHTML = tomorrowForecast[0].weather[0].description;
    // let day = 0;
    // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // tomorrowForecast.forEach(forecast => {
    //     const d = new Date(forecast.dt_txt);
    //     tomorrowTemp.innerHTML = `${forecast[0].main.temp}&deg;F`;
    // });
}