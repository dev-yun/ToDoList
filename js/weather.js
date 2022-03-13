const span = document.querySelector('.weather');

function onGeoOk(location) {
  const lat = location.coords.latitude;
  const lng = location.coords.longitude;
  console.log(API_KEY);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const icon = data.weather[0].icon;
      const img = document.createElement('img');
      img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      span.innerHTML = `${name}, ${weather}`;
      span.appendChild(img);
    });
}
function onGeoError() {
  alert("Can't find you, So Can't send weather to you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
