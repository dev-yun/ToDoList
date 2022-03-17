const illustImg = document.querySelector(".illust__img");
const prevImgBtn = document.querySelector(".illust__prev-btn");
const nextImgBtn = document.querySelector(".illust__next-btn");

const illusts = [
    "https://www.ghibli.jp/gallery/karigurashi022.jpg",
    "https://www.ghibli.jp/gallery/karigurashi009.jpg",
    "https://www.ghibli.jp/gallery/karigurashi032.jpg",
    "https://www.ghibli.jp/gallery/karigurashi040.jpg",
    "https://www.ghibli.jp/gallery/ponyo003.jpg",
    "https://www.ghibli.jp/gallery/ponyo011.jpg",
    "https://www.ghibli.jp/gallery/ponyo020.jpg",
    "https://www.ghibli.jp/gallery/ponyo022.jpg",
    "https://www.ghibli.jp/gallery/ponyo036.jpg",
    "https://www.ghibli.jp/gallery/ponyo040.jpg",
    "https://www.ghibli.jp/gallery/howl005.jpg",
    "https://www.ghibli.jp/gallery/howl017.jpg",
    "https://www.ghibli.jp/gallery/howl026.jpg",
    "https://www.ghibli.jp/gallery/howl032.jpg",
    "https://www.ghibli.jp/gallery/howl039.jpg",
    "https://www.ghibli.jp/gallery/chihiro004.jpg",
    "https://www.ghibli.jp/gallery/chihiro021.jpg",
    "https://www.ghibli.jp/gallery/chihiro042.jpg",
    "https://www.ghibli.jp/gallery/chihiro045.jpg",
    "https://www.ghibli.jp/gallery/chihiro048.jpg",
    "https://www.ghibli.jp/gallery/mononoke014.jpg",
    "https://www.ghibli.jp/gallery/mononoke017.jpg",
    "https://www.ghibli.jp/gallery/mononoke036.jpg",
    "https://www.ghibli.jp/gallery/mononoke043.jpg",
    "https://www.ghibli.jp/gallery/porco005.jpg",
    "https://www.ghibli.jp/gallery/porco015.jpg",
    "https://www.ghibli.jp/gallery/porco040.jpg",
    "https://www.ghibli.jp/gallery/porco050.jpg",
    "https://www.ghibli.jp/gallery/majo011.jpg",
    "https://www.ghibli.jp/gallery/majo018.jpg",
    "https://www.ghibli.jp/gallery/totoro006.jpg",
    "https://www.ghibli.jp/gallery/totoro012.jpg",
    "https://www.ghibli.jp/gallery/totoro024.jpg",
    "https://www.ghibli.jp/gallery/totoro036.jpg",
    "https://www.ghibli.jp/gallery/totoro049.jpg",
]

function randomIllust() {
    const illust = illusts[Math.floor(Math.random() * illusts.length)];
    const firstIllustIndex = illusts.indexOf(illust);
    return firstIllustIndex 
}


const illustViewer = {
    prevIllust : function(firstIllustIndex){
        prevIndex = firstIllustIndex - 1
        if (prevIndex >= 0) {
            return illustImg.src = illusts[prevIndex];
        }
        return illustImg.src = illusts[(illusts.length - 1)]
    },
    nextIllust : function(firstIllustIndex){
        nextIndex = firstIllustIndex + 1
        if (nextIndex < illusts.length){
            return illustImg.src = illusts[nextIndex]
        }
        return illustImg.src = illusts[0]
    },
    currentIllust : function(firstIllustIndex){
        curruntIndex = firstIllustIndex;
        return illustImg.src = illusts[curruntIndex];
    }
}


function showIllust(){
    let firstIllustIndex = randomIllust();
    window.addEventListener("load", function(){
        illustViewer.currentIllust(firstIllustIndex);
    });
    prevImgBtn.addEventListener('click', function () {
        illustViewer.prevIllust(firstIllustIndex);
    });
    nextImgBtn.addEventListener('click', function (){
        illustViewer.nextIllust(firstIllustIndex);
    });
}

showIllust();

