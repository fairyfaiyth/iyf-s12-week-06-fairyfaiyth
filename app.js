const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");

const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const searchHistory = document.getElementById("search-history");

async function getWeather(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    showLoading();
    hideError();

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) throw new Error("City not found.");
      if (response.status === 401) throw new Error("Invalid API key.");
      throw new Error("Failed to fetch weather.");
    }

    const data = await response.json();
    displayWeather(data);
    saveToHistory(city);
  } catch (err) {
    showError(
      err.name === "TypeError"
        ? "Network problem. Check your connection."
        : err.message
    );
  } finally {
    hideLoading();
  }
}

function displayWeather(data) {
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed} m/s`;
  pressure.textContent = `${data.main.pressure} hPa`;
  weatherDisplay.classList.remove("hidden");
}

function showLoading() {
  loading.classList.remove("hidden");
  weatherDisplay.classList.add("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError(message) {
  error.textContent = message;
  error.classList.remove("hidden");
}

function hideError() {
  error.classList.add("hidden");
}

function saveToHistory(city) {
  let recent = JSON.parse(localStorage.getItem("recent") || "[]");
  recent = recent.filter((c) => c.toLowerCase() !== city.toLowerCase());
  recent.unshift(city);
  recent = recent.slice(0, 5);
  localStorage.setItem("recent", JSON.stringify(recent));
  loadHistory();
}

function loadHistory() {
  const recent = JSON.parse(localStorage.getItem("recent") || "[]");
  searchHistory.innerHTML = "";
  recent.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = city;
    li.addEventListener("click", () => {
      cityInput.value = city;
      getWeather(city);
    });
    searchHistory.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

loadHistory();
