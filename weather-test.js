const fs = require("fs");
const API_KEY = fs.readFileSync("config.js", "utf8").match(/"([^"]*)"/)[1];
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new Error("Network problem. Check your connection.");
  }

  if (!response.ok) {
    if (response.status === 404) throw new Error("City not found.");
    if (response.status === 401) throw new Error("Invalid API key.");
    throw new Error("Failed to fetch weather.");
  }

  return response.json();
}

function showWeather(data) {
  console.log(`${data.name}, ${data.sys.country}`);
  console.log(`Temp: ${data.main.temp}°C (feels ${data.main.feels_like}°C)`);
  console.log(`Sky: ${data.weather[0].description}`);
  console.log(`Humidity: ${data.main.humidity}%`);
  console.log(`Wind: ${data.wind.speed} m/s`);
  console.log(`Pressure: ${data.main.pressure} hPa`);
}

async function main() {
  const cities = ["Nairobi", "Dar es Salaam", "Xyzabc"];
  for (const city of cities) {
    try {
      console.log("---", city, "---");
      showWeather(await getWeather(city));
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

main();
