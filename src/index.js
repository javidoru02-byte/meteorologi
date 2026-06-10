const cityId = document.getElementById("city-id");
const cityName = document.getElementById("city");

function findway(event) {
  const selectWay = document.querySelector(".select-way");
  if (event.target.type === "radio") {
    if (event.target.id === "by-name") {
      cityId.disabled = true;
      cityName.disabled = false;
    }
    if (event.target.id === "by-id") {
      cityName.disabled = true;
      cityId.disabled = false;
    }
  }
}

const selectWay = document.querySelector(".select-way");
selectWay.addEventListener("click", findway);

function clearFields() {
  cityId.value = "";
  cityName.value = "";
  document.getElementById("by-name").checked = false;
  document.getElementById("by-id").checked = false;
  document.getElementById("temperature").value = "";
  document.getElementById("humidity").value = "";
  document.getElementById("wind-speed").value = "";
  cityName.disabled = true;
  cityId.disabled = true;
}

const clearButton = document.getElementById("cancel-btn");
clearButton.addEventListener("click", clearFields);

let url = "";

function getWeather() {
  if (cityName.disabled === false) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=70f20ef72b9e0e8174c79715a97b7959&units=metric`;
  } else if (cityId.disabled === false) {
    url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId.value}&appid=70f20ef72b9e0e8174c79715a97b7959&units=metric`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      document.getElementById("temperature").value = `${temperature} °C`;
      document.getElementById("humidity").value = `${humidity} %`;
      document.getElementById("wind-speed").value = `${windSpeed} m/s`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

const getWeatherButton = document.getElementById("get-weather-btn");
getWeatherButton.addEventListener("click", getWeather);
