const key = '8ff5d99de10e7c1162e35fccc86c098c';
const searchButton = getElementById('weather-search-button');

searchButton.addEventListener('click', function() {
    const searchInputValue = getFieldValue('weather-search-input', true);
    loadWeather(searchInputValue);
});

loadWeather();
function loadWeather(cityName = 'london') {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherDetails(data));
}

function displayWeatherDetails(weatherDetails) {
    const parentContainer = getElementById('weather-container');
    let weatherDetailsContainer = getElementById('weather-details-container');
    
    if(weatherDetailsContainer) {
        weatherDetailsContainer.innerHTML = '';
    } else {
        weatherDetailsContainer = createElement('div');
        weatherDetailsContainer.id = 'weather-details-container';
    }
    const cityNameElement = createElement('p');
    cityNameElement.innerText = weatherDetails?.name ?? '';
    const weatherConditionElement = createElement('p');
    weatherConditionElement.innerText = weatherDetails?.weather?.[0]?.description ?? ''
    const temperatureElement = createElement('p');
    temperatureElement.innerText = weatherDetails?.main?.temp ?? '';
    if(temperatureElement.innerText) {
        temperatureElement.innerText = temperatureElement.innerText + " Celcius"
    }
    weatherDetailsContainer.appendChild(cityNameElement);
    weatherDetailsContainer.appendChild(weatherConditionElement);
    weatherDetailsContainer.appendChild(temperatureElement);
    parentContainer.appendChild(weatherDetailsContainer);
    cityNameElement.classList.add('weather-details');
    temperatureElement.classList.add('weather-details');
    weatherConditionElement.classList.add('weather-details');
    if(weatherDetails?.weather?.[0].main.toLowerCase() === 'haze') {
        parentContainer.style.backgroundImage = 'url("../resources/hazy.jpg")';
        const weatherDetailsElements = document.getElementsByClassName('weather-details');
        for(let x  of weatherDetailsElements) {
            x.style.color = 'blue';
        }
    } else if(weatherDetails?.weather?.[0].main.toLowerCase() === 'clear') {
        parentContainer.style.backgroundImage = 'url("../resources/clear.jpg")';
    } else if(weatherDetails?.weather?.[0].main.toLowerCase() === 'rain') {
        parentContainer.style.backgroundImage = 'url("../resources/rainy.jpg")';
        const weatherDetailsElements = document.getElementsByClassName('weather-details');
        for(let x  of weatherDetailsElements) {
            x.style.color = 'black';
        }
    } else if(weatherDetails?.weather?.[0].main.toLowerCase() === 'clouds') {
        parentContainer.style.backgroundImage = 'url("../resources/cloudy.jpg")';
        const weatherDetailsElements = document.getElementsByClassName('weather-details');
        for(let x  of weatherDetailsElements) {
            x.style.color = 'rgb(76 75 222)';
        }
    } else if(weatherDetails?.weather?.[0].main.toLowerCase() === 'snow') {
        parentContainer.style.backgroundImage = 'url("../resources/snow.avif")';
        const weatherDetailsElements = document.getElementsByClassName('weather-details');
        for(let x  of weatherDetailsElements) {
            x.style.color = '#d53800';
        }
    } else {
        parentContainer.style.backgroundImage = 'url("../resources/summer.jpg")'
    }
    parentContainer.style.backgroundSize = 'cover';
    parentContainer.style.backgroundRepeat = 'no-repeat';
}