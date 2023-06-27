let currentData = new Date();

let days = [
  "Sunday",
  "Monday",
  "Thuesday",
  "Wendesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentData.getDay()];
let dayApp = document.querySelector("#day");
dayApp.innerHTML = currentDay;

let currentHour = currentData.getHours();
let hourApp = document.querySelector("#hour");
hourApp.innerHTML = currentHour;
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

let currentMin = currentData.getMinutes();
let minutesApp = document.querySelector("#min");
minutesApp.innerHTML = currentMin;
if (currentMin < 10) {
  currentMin = `0${currentHour}`;
}

function displayWeatherElements(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = `${Math.round(
    response.data.main.humidity
  )}%`;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-element").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let apiKey = "5b9aaac066641215de6d72f73af7e9b5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b9aaac066641215de6d72f73af7e9b5&units=metric`;
  axios.get(apiUrl).then(displayWeatherElements);
}

function typeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#s-form").value;
  search(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", typeCity);

function unitsFahrenheit(event) {
  event.preventDefault();
  temperature.innerHTML = 66;
}

let fahrenheit = document.querySelector("#f-t");

let temperature = document.querySelector("#temperature");
fahrenheit.addEventListener("click", unitsFahrenheit);

function unitsCelsius(event) {
  event.preventDefault();
  temperature.innerHTML = 19;
}

let celsius = document.querySelector("#c-t");
celsius.addEventListener("click", unitsCelsius);

search("London");
