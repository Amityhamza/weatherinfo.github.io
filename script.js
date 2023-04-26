const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const displayImg = document.getElementById("displayImg");

const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const getWeather = async (city) => {
  const API_KEY = "a5359faf7e3b554557e72562d936df64";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    temperature.innerText = `${Math.floor(data.main.temp - 273.1)}°C`;
    wind.innerText = `${data.wind.speed} km/h`;
    humidity.innerText = `${data.main.humidity}%`;
    description.innerText = data.weather[0].description;

    if (data.weather[0].main === "Clouds") {
      displayImg.src = "./img/cloud.png";
    } else if (data.weather[0].main === "Clear") {
      console.log("hello");
      displayImg.src = "./img/clear.png";
    } else if (data.weather[0].main === "Rain") {
      displayImg.src = "./img/rain.png";
    } else if (data.weather[0].main === "Snow") {
      displayImg.src = "./img/snow.png";
    } else if (data.weather[0].main === "Haze") {
      displayImg.src = "./img/mist.png";
    } else if (data.weather[0].main === "Mist") {
      displayImg.src = "./img/mist.png";
    } else {
      displayImg.src = "./img/404.png";
    }
  } catch (error) {
    displayImg.style.width = "200px";
    displayImg.style.paddingTop = "30px";
    displayImg.src = "./img/404.png";
    description.innerText = "";
    temperature.innerText = "City Not Found";
    humidity.innerText = "";
    wind.innerText = "";
  }

};

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather(searchBox.value);
  }
});