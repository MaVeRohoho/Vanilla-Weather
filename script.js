let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let city = "Denver";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function displayTemp (response) {
    let temperatureElement = document.querySelector ("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);    
    let cityElement = document.querySelector ("#city");
    cityElement.innerHTML = response.data.name;    
    let descriptionElement = document.querySelector ("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;    
    let windElement = document.querySelector ("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);    
    let humidElement = document.querySelector ("#humid");
    humidElement.innerHTML = response.data.main.humidity;          
}


axios.get(apiUrl).then(displayTemp);
