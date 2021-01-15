function search(city) {
  let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response) {   
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = null;
let forecast = null;
for (let index = 0; index < 6; index ++) {
forecast = response.data.list [index];  
  forecastElement.innerHTML += `
    <div class="col-sm-2 text-center">
        <h6> ${formatHours (forecast.dt*1000)}</h6>
        <i class="${getIcon(response.data.list[index].weather[0].icon)}"></i>
        <h6 class="tempStyle">${Math.round(
          response.data.list[0].main.temp
        )}°</h6> 
    </div>`;
}
}
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${formatHours(timestamp)}`;
}
function formatHours (timestamp){
let date = new Date( timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function searchCoords(position) {
  let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
function searchCoords(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCoords);
}
let myWeatherButton = document.querySelector("#my-weather-button");
myWeatherButton.addEventListener("click", getCurrentLocation);

function displayTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  celciusTemp = response.data.main.temp;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let humidElement = document.querySelector("#humid");
  humidElement.innerHTML = response.data.main.humidity;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let mainIcon = document.querySelector("#mainIcon");
  mainIcon.innerHTML = `<i class="${getIcon(
    response.data.weather[0].icon
  )}"></i>`;
}
function getIcon(icon) {
  let iconClass = "";
  if (icon === "01d") {
    iconClass = `fal fa-sun`;
  } else if (icon === "01n") {
    iconClass = `fal fa-moon-stars`;
  } else if (icon === "02d") {
    iconClass = `fal fa-cloud-sun`;
  } else if (icon === "02n") {
    iconClass = `fal fa-moon-cloud`;
  } else if (icon === "03d") {
    iconClass = `fal fa-cloud`;
  } else if (icon === "03n") {
    iconClass = `fal fa-cloud`;
  } else if (icon === "04d") {
    iconClass = `fal fa-clouds-sun`;
  } else if (icon === "04n") {
    iconClass = `fal fa-clouds-moon`;
  } else if (icon === "09d") {
    iconClass = `fal fa-cloud-showers-heavy`;
  } else if (icon === "09n") {
    iconClass = `fal fa-cloud-moon-rain`;
  } else if (icon === "10d") {
    iconClass = `fal fa-cloud-sun-rain`;
  } else if (icon === "10n") {
    iconClass = `fal fa-cloud-moon-rain`;
  } else if (icon === "11d") {
    iconClass = `fal fa-thunderstorm-sun`;
  } else if (icon === "11n") {
    iconClass = `fal fa-thunderstorm-moon`;
  } else if (icon === "13d") {
    iconClass = `fal fa-snowflake`;
  } else if (icon === "13n") {
    iconClass = `fal fa-snowflakes`;
  } else if (icon === "50d") {
    iconClass = `fal fa-fog`;
  } else if (icon === "50n") {
    iconClass = `fal fa-fog`;
  }
  return iconClass;
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}
function displayFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = (celciusTemp * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);
function displayCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celciusTemp);
}
let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", displayCelcius);
let celciusTemp = null;
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
search("Zurich");