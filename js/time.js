const showClock = document.querySelector('.date');

function clock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  showClock.innerHTML = `현재 시각  ${hours} : ${minutes} : ${seconds}`;
}

clock();
setInterval(clock, 1000);

// function remainTime(newTime) {
//   const today = new Date();
//   const remain = new Date(newTime);

//   const remainMS = remain.getTime() - today.getTime();
//   const remainSeconds = parseInt(remainMS / 1000);
//   const remainMinutes = parseInt(remainSeconds / 60);
//   const remainHours = parseInt(remainMinutes / 60);
//   const remainDays = parseInt(remainHours / 24);

//   const hours = String(remainHours - remainDays * 24).padStart(2, '0');
//   const minutes = String(remainMinutes - remainHours * 60).padStart(2, '0');
//   const seconds = String(remainSeconds - remainMinutes * 60).padStart(2, '0');

//   return `남은 시간 ${remainDays}d ${hours}h ${minutes}m ${seconds}`;
// }
