function fetchWeather() {
    const apiKey = "7040ea904442a45d6950ba584410ce59";
    const cityName = document.getElementById("cityInput").value;
    const baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    const completeURL = baseURL + cityName + "&appid=" + apiKey + "&units=metric";

    fetch(completeURL)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById("weatherResult");
            if (data.cod !== "404") {
                const mainData = data.main;
                const windData = data.wind;
                weatherResult.innerHTML = `
                    <h2>Weather Details for ${cityName}</h2>
                    <p>Current Temperature: ${mainData.temp} °C</p>
                    <p>Current Humidity: ${mainData.humidity} %</p>
                    <p>Current Wind Speed: ${windData.speed} m/s</p>
                `;
            } else {
                weatherResult.innerHTML = "City not found. Please check the city name and try again.";
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
