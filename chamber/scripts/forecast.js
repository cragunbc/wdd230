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
            console.log(data);
            displayWeatherResults(data);
            windChill(temp, speed);
            console.log(threeDayForecast);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// function displayResults(data) {
//     const threeDayForecast = data.list.filter(x => x.dt_txt.includes("15:00:00"));
//     console.log(threeDayForecast);
//     let day = 0;
//     const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     threeDayForecast.forEach(forecast => {
//         const d = new Date(forecast.dt_txt);
//         const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
//         let desc = forecast.weather[0].description;
//         document.getElementById(`current-day${day}`).innerHTML = weekdays[d.getDay()];
//         document.getElementById(`current-temp${day}`).innerHTML = `${forecast.main.temp_max}&deg;F`;
//         document.getElementById(`weather-icon${day}`).setAttribute("src", iconsrc);
//         document.getElementById(`weather-icon${day}`).setAttribute("alt", desc);
//         document.getElementById(`desc${day}`).textContent = `Conditions: ${desc}`;
//         document.getElementById(`wind-speed${day}`).innerHTML = forecast.wind.speed;
//     });
// }

function displayWeatherResults(data) {
    const threeDayForecast = data.list.filter(x => x.dt_txt.includes("15:00:00"));
    console.log(threeDayForecast);
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
        document.getElementById(`wind-speed${day+1}`).innerHTML = forecast.wind.speed;
        // document.getElementById(`windChill${day+1}`).innerHTML = forecast.main.feels_like;
            // if (temp >= 50 && speed > 3) {
            //     return document.getElementById(`windChill${day+1}`).innerHTML = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(2);
            // } else {
            //     return document.getElementById(`windChill${day+1}`).innerHTML = `N/A`;
            // }
        
        day++;
        // function windChill(temp, speed) {
        //     if (temp >= 50 && speed > 3) {
        //         return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        //     } else {
        //         return document.querySelector('#windChill').innerHTML = `N/A`;
        //     }
        // }

    });

}