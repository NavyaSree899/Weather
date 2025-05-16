function getWeather() {
  const apiKey = "7040ea904442a45d6950ba584410ce59";
  const cityName = document.getElementById("city-name").value;
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const completeURL = `${baseURL}${cityName}&appid=${apiKey}&units=metric`;

  fetch(completeURL)
    .then(response => response.json())
    .then(data => {
      const weatherReport = document.getElementById("weather-report");
      if (data.cod !== "404") {
        const mainData = data.main;
        const windData = data.wind;
        weatherReport.innerHTML = `
          <h2>Weather Details for ${cityName}</h2>
          <p>Current Temperature: ${mainData.temp} °C</p>
          <p>Humidity: ${mainData.humidity} %</p>
          <p>Wind Speed: ${windData.speed} m/s</p>
        `;
      } else {
        weatherReport.innerHTML = "City not found. Please check the city name and try again.";
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}
