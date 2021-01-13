
function search (city){
let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);
}
function formatDate (timestamp){
    let date = new Date (timestamp);
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    return `${day}, ${hours}:${minutes}`;
}
function displayTemp (response) {
    let temperatureElement = document.querySelector ("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);    

    celciusTemp = response.data.main.temp;

    let cityElement = document.querySelector ("#city");
    cityElement.innerHTML = response.data.name;    
    let descriptionElement = document.querySelector ("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;    
    let windElement = document.querySelector ("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);    
    let humidElement = document.querySelector ("#humid");
    humidElement.innerHTML = response.data.main.humidity; 
    let dateElement = document.querySelector ("#date");
    dateElement.innerHTML = formatDate (response.data.dt * 1000);     
    let iconElement = document.querySelector ("#iconOpenWeather")     
    iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ) 
    let earlyIcon = document.querySelector ("#iconOpenWeatherEarly")     
    earlyIcon.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ) 
    let morningIcon = document.querySelector ("#iconOpenWeatherMorning")     
    morningIcon.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ) 
    let lunchIcon = document.querySelector ("#iconOpenWeatherLunch")     
    lunchIcon.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ) 
    let afternoonIcon = document.querySelector ("#iconOpenWeatherAfternoon")     
    afternoonIcon.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ) 
    let eveningIcon = document.querySelector ("#iconOpenWeatherEvening")     
    eveningIcon.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ) 
    let nightIcon = document.querySelector ("#iconOpenWeatherNight")     
    nightIcon.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ) 

    let mainIcon = document.querySelector("#mainIcon");
    if(response.data.weather[0].icon === "01d") {
    mainIcon.innerHTML = `<i class="fal fa-sun"></i>`;
    } else if(response.data.weather[0].icon === "01n"){
    mainIcon.innerHTML = `<i class="fal fa-moon-stars"></i>`;
    } else if(response.data.weather[0].icon === "02d"){
    mainIcon.innerHTML = `<i class="fal fa-cloud-sun"></i>`;
    } else if(response.data.weather[0].icon === "02n"){
    mainIcon.innerHTML = `<i class="fal fa-moon-cloud"></i>`;
    } else if(response.data.weather[0].icon === "03d"){
    mainIcon.innerHTML = `<i class="fal fa-cloud"></i>`;
    } else if(response.data.weather[0].icon === "03n"){
    mainIcon.innerHTML = `<i class="fal fa-cloud"></i>`;
    } else if(response.data.weather[0].icon === "04d"){
    mainIcon.innerHTML = `<i class="fal fa-clouds-sun"></i>`;
    } else if(response.data.weather[0].icon === "04n"){
    mainIcon.innerHTML = `<i class="fal fa-clouds-moon"></i>`;
    } else if(response.data.weather[0].icon === "09d"){
    mainIcon.innerHTML = `<i class="fal fa-cloud-showers-heavy"></i>`;
    } else if(response.data.weather[0].icon === "09n"){
    mainIcon.innerHTML = `<i class="fal fa-cloud-moon-rain"></i>`;
    } else if(response.data.weather[0].icon === "10d"){
    mainIcon.innerHTML = `<i class="fal fa-cloud-sun-rain"></i>`;
    } else if(response.data.weather[0].icon === "10n"){
    mainIcon.innerHTML = `<i class="fal fa-cloud-moon-rain"></i>`;
    } else if(response.data.weather[0].icon === "11d"){
    mainIcon.innerHTML = `<i class="fal fa-thunderstorm-sun"></i>`;
    } else if(response.data.weather[0].icon === "11n"){
    mainIcon.innerHTML = `<i class="fal fa-thunderstorm-moon"></i>`;
    } else if(response.data.weather[0].icon === "13d"){
    mainIcon.innerHTML = `<i class="fal fa-snowflake"></i>`;
    } else if(response.data.weather[0].icon === "13n"){
    mainIcon.innerHTML = `<i class="fal fa-snowflakes"></i>`;
    } else if(response.data.weather[0].icon === "50d"){
    mainIcon.innerHTML = `<i class="fal fa-fog"></i>`;
    } else if(response.data.weather[0].icon === "50n"){
    mainIcon.innerHTML = `<i class="fal fa-fog"></i>`;
    }
}
function handleSubmit (event){
    event.preventDefault();
     let cityInputElement = document.querySelector("#city-input");
     search(cityInputElement.value);
}
function searchCoords (position){
let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
axios.get(apiUrl).then(displayTemp);
}

function getCurrentLocation (event) {
    event. preventDefault ();
    navigator.geolocation.getCurrentPosition(searchCoords);
}

let findMeButton = document.querySelector ("#my-weather-button");
findMeButton .addEventListener ("click", getCurrentLocation);


function displayFahrenheit (event) {
    event.preventDefault();
    let fahrenheitTemp = (celciusTemp * 9) / 5 + 32;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemp); 
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener ("click", displayFahrenheit);

function displayCelcius (event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celciusTemp);
}
let celcius = document.querySelector("#celcius");
celcius.addEventListener ("click", displayCelcius);

let celciusTemp= null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


search ("Zurich"); 