/* Tops */
const topImage = document.getElementById("topImage");
const changeTop = document.getElementById("changeTop");
const tops = ["#", "top1", "top2", "top3"];

// Broeken
const bottomImage = document.getElementById("bottomImage");
const changeBottom = document.getElementById("changeBottom");
const bottoms = ["#", "bottom1", "bottom2", "bottom3"];

// Schoenen
const shoesImage = document.getElementById("shoesImage");
const changeShoes = document.getElementById("changeShoes");
const shoes = ["#", "shoes1", "shoes2", "shoes3"];

// Achtergrond
const backgroundButton = document.getElementById("backgroundButton");
const backgrounds = ["dressbackground", "dressbackground2", "dressbackground3", "dressbackground4"];

// Sounds
const audio = document.getElementById("sounds");
const doneButton = document.getElementById("doneButton");

// confettie
const confettiButton = document.getElementById("confettieButton");
const confettiImage = document.getElementById("confettiImage");


// Index
let topIndex = 0;
let bottomIndex = 0;
let shoesIndex = 0;
let backgroundIndex = 0;

// Function tops
function editTop() {
    topIndex++;
    if (topIndex >= tops.length) {
        topIndex = 0;
    }
    topImage.src = "doll/" + tops[topIndex] + ".png";
}

// Function bottoms
function editBottom() {
    bottomIndex++;
    if (bottomIndex >= bottoms.length) {
        bottomIndex = 0;
    }
    bottomImage.src = "doll/" + bottoms[bottomIndex] + ".png";
}

// Function shoes
function editShoes() {
    shoesIndex++;
    if (shoesIndex >= shoes.length) {
        shoesIndex = 0;
    }
    shoesImage.src = "doll/" + shoes[shoesIndex] + ".png";
}

// Function background
function changeBackground() {
    backgroundIndex++;
    if (backgroundIndex >= backgrounds.length) {
        backgroundIndex = 0;
    }
    document.body.style.backgroundImage = "url('doll/" + backgrounds[backgroundIndex] + ".png";
}

/* Function sound */
function playAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}
/* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play */

// Functie confettie
function showConfetti() {
    confettiImage.style.display = "block";
    setTimeout(() => {
        confettiImage.style.display = "none";
    }, 3000);
}

// AddEventListener
changeTop.addEventListener("click", editTop);
changeBottom.addEventListener("click", editBottom);
changeShoes.addEventListener("click", editShoes);
doneButton.addEventListener("click", playAudio);
backgroundButton.addEventListener("click", changeBackground);
confettiButton.addEventListener("click", showConfetti);

// background foto's https://wallpapercave.com/moviestarplanet-wallpapers, https://www.vectorstock.com/royalty-free-vector/performance-stage-catwalk-for-fashion-show-vector-50039464, https://dti-dress-to-impress.fandom.com/wiki/Game_Assets#Sound_Tracks, 




