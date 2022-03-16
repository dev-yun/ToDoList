const weatherSpan = document.querySelector('.date__weather');
const WEATHER_API_KEY = weatherApiKey;

console.log(WEATHER_API_KEY);

function onGeoOk(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const icon = data.weather[0].icon;
      const img = document.createElement('img');
      img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherSpan.innerHTML = `${name}, ${weather}`;
      weatherSpan.appendChild(img);
    });
}
function onGeoError() {
  alert("Can't find you, So Can't send weather to you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
