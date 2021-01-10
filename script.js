function displayTemperature (response) {
let temperatureElement = document.querySelector ("#temperature");
temperatureElement.innerHTML = Math.round(response.data.main.temp);

}



let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let city = "Zurich";
let apiUrlMetric = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let apiUrlImperial = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

axios.get(apiUrlMetric).then(displayTemperature);

