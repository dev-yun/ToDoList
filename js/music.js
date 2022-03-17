const music = document.querySelector(".playlist");
const musicImg = document.querySelector(".music__img img");
const playBtn = document.querySelector(".music__play-pause");
const prevBtn = document.querySelector(".music__prev-play");
const nextBtn = document.querySelector(".music__next-play");
const animation = document.querySelector(".music__animation");
const musicTitle = document.querySelector(".music__title");

const PLAY_BTN = "fa-solid fa-play";
const PAUSE_BTN = "fa-solid fa-pause";

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
        music.src = `asset/music/${musicList.src}`;
        animation.innerText = musicList.animation;
        musicTitle.innerText = musicList.musicTitle;
        musicImg.src = `asset/img/${musicList.img}`;
        return music.played ? handleMusic.playMusic() : handleMusic.pauseMusic();
    },
    autoMusic : function () {
        const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
        music.src = `asset/music/${musicList.src}`;
        animation.innerText = musicList.animation;
        musicTitle.innerText = musicList.musicTitle;
        musicImg.src = `asset/img/${musicList.img}`;
        return music.paused ? handleMusic.playMusic() : handleMusic.pauseMusic();
    },
};

function musicPlayer(){
    const musicList = musicInfo[Math.floor(Math.random() * musicInfo.length)];
    music.src = `asset/music/${musicList.src}`;
    animation.innerText = musicList.animation;
    musicTitle.innerText = musicList.musicTitle;
    musicImg.src = `asset/img/${musicList.img}`;
    prevBtn.addEventListener('click', player.nextMusic);
    nextBtn.addEventListener('click', player.nextMusic);
    music.addEventListener("ended", player.autoMusic);
    playBtn.addEventListener("click", toggle);
}

const musicInfo = [
    {
        animation: "고양이의 보은",
        musicTitle: "At the Crossroads",
        src: "고양이의 보은 OST  At the Crossroads.mp3",
        img: "고양이의보은1.jpg",
    },
    {
        animation: "마녀 배달부 키키",
        musicTitle: "Wrapped in Kindness",
        src: "마녀 배달부 키키 OST Wrapped in Kindness.mp3",
        img: "키키1.jpg",
    },
    {
        animation: "모노노케히메",
        musicTitle: "Theme of Princess Mononoke",
        src: "모노노케히메 OST Theme of Princess Mononoke.mp3",
        img: "원령공주1.jpg",
    },
    {
        animation: "붉은 돼지",
        musicTitle: "By gone days",
        src: "붉은 돼지 OST By gone days.mp3",
        img: "붉은돼지1.jpg",
    },
    {
        animation: "붉은 돼지",
        musicTitle: "Toki Ni Wa",
        src: "붉은 돼지 OST Toki Ni Wa.mp3",
        img: "붉은돼지2.jpg",
    },
    {
        animation: "센과 치히로의 행방불명",
        musicTitle: "Merry Go Round of Life",
        src: "센과 치히로의 행방불명 OST Merry Go Round of Life.mp3",
        img: "센과치히로1.jpg",
    },
    {
        animation: "센과 치히로의 행방불명",
        musicTitle: "One Summers Day",
        src: "센과 치히로의 행방불명 OST One Summers Day.mp3",
        img: "센과치히로2.jpg",
    },
    {
        animation: "센과 치히로의 행방불명",
        musicTitle: "Reprise",
        src: "센과 치히로의 행방불명 OST Reprise.mp3",
        img: "센과치히로3.jpg",
    },
    {
        animation: "이웃집 토토로",
        musicTitle: "My Neighbor Totoro Ending Theme",
        src: "이웃집 토토로 OST My Neighbor Totoro Ending Theme.mp3",
        img: "토토로1.jpg",
    },
    {
        animation: "이웃집 토토로",
        musicTitle: "Path of the Wind",
        src: "이웃집 토토로 OST Path of the Wind.mp3",
        img: "토토로2.jpg",
    },
    {
        animation: "하울의 움직이는 성",
        musicTitle: "Promise of the World",
        src: "하울의 움직이는 성 OST Promise of the World.mp3",
        img: "하울1.jpg",
    },
]


window.addEventListener("load", musicPlayer);
