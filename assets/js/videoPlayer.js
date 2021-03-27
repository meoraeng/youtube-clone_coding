const videoContainer = document.getElementById('jsVideoPlayer');
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton")
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScreenBtn = document.getElementById("jsFullScreen");


function handlePlayClick(){
  if(videoPlayer.paused){
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else { //innerHTML을 하면, 해당 요소의 HTML 내용을 바꾼다
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
};

function handleVolumeClick(){
  if(videoPlayer.muted){
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}
function exitFullScreen(){
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenBtn.addEventListener('click', goFullScreen);
  document.exitFullscreen();
}

function goFullScreen(){
  videoContainer.requestFullscreen();
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenBtn.removeEventListener("click", goFullScreen);
  fullScreenBtn.addEventListener("click", exitFullScreen);
}


function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click",handleVolumeClick);
  fullScreenBtn.addEventListener("click",goFullScreen);
}

if(videoContainer){
  init();
}