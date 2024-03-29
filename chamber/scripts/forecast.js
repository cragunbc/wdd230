const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const currentDay = document.querySelector("#current-day");
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=41.09&lon=-112.06&units=imperial&appid=60d1bc253403b22d2d659064abbf8f2e";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            // let temp = data.main.temp_max;
            // let speed = data.wind.speed;
            // console.log(data);
            displayWeatherResults(data);
            windChill(temp, speed);
            // console.log(threeDayForecast);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        // console.log(error);
    }
}

apiFetch();


function displayWeatherResults(data) {
    const threeDayForecast = data.list.filter(x => x.dt_txt.includes("15:00:00"));
    // console.log(threeDayForecast);
    let day = 0;
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    threeDayForecast.forEach(forecast => {
        const d = new Date(forecast.dt_txt);
        let temp = forecast.main.temp_max;
        let speed = forecast.wind.speed;
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        let desc = forecast.weather[0].description;
        document.getElementById(`current-day${day+1}`).innerHTML = weekdays[d.getDay()];
        document.getElementById(`current-temp${day+1}`).innerHTML = `${forecast.main.temp_max}&deg;F`;
        document.getElementById(`weather-icon${day+1}`).setAttribute("src", iconsrc);
        document.getElementById(`weather-icon${day+1}`).setAttribute("alt", desc);
        document.getElementById(`desc${day+1}`).textContent = `Conditions: ${desc}`;

        day++;
    });

}