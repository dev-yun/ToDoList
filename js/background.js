const imgs = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
]

const body = document.querySelector("body");
 
const IMG_NUMBER = imgs.length;
 
function paintImage(images) {
  const image = new Image();
  image.src = `asset/img/${images}`; // 가져올 image경로 지정
  image.classList.add("bgImg"); // image에 bgImage 클래스 추가 
  body.appendChild(image); // body의 자식에 image추가
}
 
function genRandom() {
  const images = imgs[Math.floor(Math.random() * IMG_NUMBER)];
  return images;
}
 
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
 
init();
