const showClock = document.querySelector('.date__clock');

function clock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  showClock.innerHTML = `현재 시각  ${hours} : ${minutes} : ${seconds}`;
}

clock();
setInterval(clock, 1000);