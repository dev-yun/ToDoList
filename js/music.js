const music = document.querySelector(".playlist");
const musicImg = document.querySelector(".music__img img");
const playBtn = document.querySelector(".music__play-pause");
const prevBtn = document.querySelector(".music__prev-play");
const nextBtn = document.querySelector(".music__next-play");
const animation = document.querySelector(".music__animation");
const title = document.querySelector(".music__title");

const PLAY_BTN = "fa-solid fa-play";
const PAUSE_BTN = "fa-solid fa-pause";

const musicInfo = [
    {
        animation: "고양이의 보은",
        title: "At the Crossroads",
        src: "고양이의 보은 OST  At the Crossroads",
        img: "고양이의보은1",
    },
    {
        animation: "마녀 배달부 키키",
        title: "Wrapped in Kindness",
        src: "마녀 배달부 키키 OST Wrapped in Kindness",
        img: "키키1",
    },
    {
        animation: "모노노케히메",
        title: "Theme of Princess Mononoke",
        src: "모노노케히메 OST Theme of Princess Mononoke",
        img: "원령공주1",
    },
    {
        animation: "붉은 돼지",
        title: "By gone days",
        src: "붉은 돼지 OST By gone days",
        img: "붉은돼지1",
    },
    {
        animation: "붉은 돼지",
        title: "Toki Ni Wa",
        src: "붉은 돼지 OST Toki Ni Wa",
        img: "붉은돼지2",
    },
    {
        animation: "센과 치히로의 행방불명",
        title: "Merry Go Round of Life",
        src: "센과 치히로의 행방불명 OST Merry Go Round of Life",
        img: "센과치히로1",
    },
    {
        animation: "센과 치히로의 행방불명",
        title: "One Summers Day",
        src: "센과 치히로의 행방불명 OST One Summers Day",
        img: "센과치히로2",
    },
    {
        animation: "센과 치히로의 행방불명",
        title: "Reprise",
        src: "센과 치히로의 행방불명 OST Reprise",
        img: "센과치히로3",
    },
    {
        animation: "이웃집 토토로",
        title: "My Neighbor Totoro Ending Theme",
        src: "이웃집 토토로 OST My Neighbor Totoro Ending Theme",
        img: "토토로1",
    },
    {
        animation: "이웃집 토토로",
        title: "Path of the Wind",
        src: "이웃집 토토로 OST Path of the Wind",
        img: "토토로2",
    },
    {
        animation: "하울의 움직이는 성",
        title: "Promise of the World",
        src: "하울의 움직이는 성 OST Promise of the World",
        img: "하울1",
    },
]

const handleMusic = {
    playMusic : function () {
        music.play();
        playBtn.className = PAUSE_BTN;
    },
    pauseMusic : function () {
        music.pause();
        playBtn.className = PLAY_BTN;
    },
};

function toggle() {
    return music.paused ? handleMusic.playMusic() : handleMusic.pauseMusic();
}

const player = {
    nextMusic : function () {
        const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
        music.src = "";
        animation.innerText = "";
        title.innerText = "";
        musicImg.src = "";
        music.src = `asset/mp3/${musicList.src}.mp3`;
        animation.innerText = musicList.animation;
        title.innerText = musicList.title;
        musicImg.src = `asset/img/${musicList.img}.jpg`;
        return music.played ? handleMusic.playMusic() : handleMusic.pauseMusic();
    },
    prevMusic : function () {
        const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
        music.src = "";
        animation.innerText = "";
        title.innerText = "";
        musicImg.src = "";
        music.src = `asset/mp3/${musicList.src}.mp3`;
        animation.innerText = musicList.animation;
        title.innerText = musicList.title;
        musicImg.src = `asset/img/${musicList.img}.jpg`;
        return music.played ? handleMusic.playMusic() : handleMusic.pauseMusic();
    },
    autoMusic : function () {
        const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
        music.src = "";
        animation.innerText = "";
        title.innerText = "";
        musicImg.src = "";
        music.src = `asset/mp3/${musicList.src}.mp3`;
        animation.innerText = musicList.animation;
        title.innerText = musicList.title;
        musicImg.src = `asset/img/${musicList.img}.jpg`;
        return music.paused ? handleMusic.playMusic() : handleMusic.pauseMusic();
    },
};

function musicPlayer(){
    const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
    music.src = `asset/mp3/${musicList.src}.mp3`;
    animation.innerText = musicList.animation;
    title.innerText = musicList.title;
    musicImg.src = `asset/img/${musicList.img}.jpg`;
    prevBtn.addEventListener('click', player.nextMusic);
    nextBtn.addEventListener('click', player.nextMusic);
    music.addEventListener("ended", player.autoMusic);
    playBtn.addEventListener("click", toggle);
}

window.addEventListener("load", musicPlayer);
