const key = '8ff5d99de10e7c1162e35fccc86c098c';


const searchButton = getElementById('weather-search-button');

searchButton.addEventListener('click', function() {
    const searchInputValue = getFieldValue('weather-search-input', true);
    loadWeather(searchInputValue);
});

loadWeather();
function loadWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherDetails(data));
}

function displayWeatherDetails(weatherDetails) {
    const parentContainer = getElementById('weather-container');
    console.log(parentContainer)
    console.log(weatherDetails)
}