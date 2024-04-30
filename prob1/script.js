document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiKey = '139bb5e5dde940b291d200426242904';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayCurrentWeather(data);
        displayForecast(data.forecast.forecastday);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function displayCurrentWeather(data) {
    const currentTime = new Date(data.location.localtime).toLocaleTimeString();
    document.getElementById('current-time').textContent = `Current time: ${currentTime}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById('condition-icon').src = data.current.condition.icon;
    document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
}

function displayForecast(forecastDays) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = ''; 

    forecastDays.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `
            <h3>${day.date}</h3>
            <img src="${day.day.condition.icon}" alt="Weather Icon">
            <p>Max Temp: ${day.day.maxtemp_c}°C</p>
            <p>Min Temp: ${day.day.mintemp_c}°C</p>
        `;
        forecastDiv.appendChild(dayDiv);
    });
}
