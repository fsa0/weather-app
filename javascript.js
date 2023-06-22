const API_KEY = "33f72e52ae38b5ef8d4900bf6264ff91";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SEARCH_BOX = document.querySelector(".search input")
const SEARCH_BTN = document.querySelector(".search button")

const WEATHER_ICON = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        document.querySelector(".error").style.display = "none";

        var data = await response.json();


        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degc";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".pressure").innerHTML = Math.round(data.main.pressure) + " hPa";

        switch(data.weather[0].main) {
            case "Clouds":
                WEATHER_ICON.src = "images/cloudy.png";
                break;
            case "Clear":
                WEATHER_ICON.src = "images/sunny.png";
                break;
            case "Fog":
                WEATHER_ICON.src = "images/foggy.png";
                break;
            case "Snow":
                WEATHER_ICON.src = "images/snowy.png";
                break;
            case "Rain":
                WEATHER_ICON.src = "images/raining.png";
                break;
            case "Thunderstorm":
                WEATHER_ICON.src = "images/lightning.png";
                break;
        }

        document.querySelector(".weather").style.display = "block";
    }

}

SEARCH_BTN.addEventListener("click", ()=>{
    checkWeather(SEARCH_BOX.value);
})


