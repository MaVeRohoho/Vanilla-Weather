let apiKey = "fc50e00c9bbae52d3e97a4dfd4c8a5f5";
let city = "Denver";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


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
    return `${day} ${hours}:${minutes}`;
}


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
    let dateElement = document.querySelector ("#date");
    dateElement.innerHTML = formatDate (response.data.dt * 1000);          
}


axios.get(apiUrl).then(displayTemp);
