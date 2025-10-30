let blackBtn = document.querySelector('.black-btn');
let whiteBtn = document.querySelector('.white-btn');
blackBtn.addEventListener('click', () => {
    document.querySelector('.blackimages').style.display = "grid";
    document.querySelector('.whiteimages').style.display = "none";
    createAndAppendBlack();
});
whiteBtn.addEventListener('click', () => {
    document.querySelector('.blackimages').style.display = "none";
    document.querySelector('.whiteimages').style.display = "grid";
    createAndAppendWhite();
});

function createAndAppendBlack() {
    let teslaElem = document.createElement('video');
    teslaElem.classList.add('black-tesla');
    teslaElem.src = './Videos/whitetoblack.mp4';
    teslaElem.autoplay = true;
    teslaElem.muted = true;
    teslaElem.playbackRate = 7; 
    teslaElem.playsInline = true;
    let videoWrapper = document.querySelector('.video-wrapper');
    videoWrapper.appendChild(teslaElem);
}

function createAndAppendWhite() {
    let teslaElem = document.createElement('video');
    teslaElem.classList.add('white-tesla');
    teslaElem.src = './Videos/blacktowhite.mp4';
    teslaElem.autoplay = true;
    teslaElem.muted = true;
    teslaElem.playbackRate = 9; 
    teslaElem.playsInline = true;
    let videoWrapper = document.querySelector('.video-wrapper');
    videoWrapper.appendChild(teslaElem);
}