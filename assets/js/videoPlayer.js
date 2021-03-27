const videoContainer = document.getElementById('jsVideoPlayer');
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton")
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScreenBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime  = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

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
    volumeRange.value = videoPlayer.volume;
  }else {
    volumeRange.value = 0;
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}
function exitFullScreen(){
  fullScreenBtn.addEventListener('click', goFullScreen);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  videoPlayer.className = "video__normalscreen";
}


function goFullScreen(){
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScreenBtn.removeEventListener("click", goFullScreen);
  fullScreenBtn.addEventListener("click", exitFullScreen);
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenBtn.className = "video__fullscreen";
}
function escFullScreen(){
  if(document.webkitIsFullScreen === false ){
    exitFullScreen();
  } else if (document.mozFullScreen === false){
    exitFullScreen();
  }else if(document.msFullScreenElement === false){
    exitFullScreen();
  }
}
const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }  
  return `${hours}:${minutes}:${totalSeconds}`;
};
function getCurrentTime(){
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
} //한번만 실행되는 함수라서, 이벤트 등록 혹은 setInterval로 호출해야함

function setTotalTime(){
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  videoPlayer.addEventListener("timeupdate", getCurrentTime);//동영상 재생시간이면 1초마다 4~5번씩 이벤트함수를 호출함
}
function handleEnded(){
  videoPlayer.currenTime = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}
function handleDrag(event){
  const { 
    target:{value}
  } = event;
  videoPlayer.volume = value;
  if(value >= 0.6){
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if(value >= 0.3){
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else{
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
}
function init() {
  videoPlayer.volume = 0.5

  playBtn.addEventListener("click", handlePlayClick);

  volumeBtn.addEventListener("click",handleVolumeClick);
  volumeRange.addEventListener("input", handleDrag);

  fullScreenBtn.addEventListener("click",goFullScreen);

  videoPlayer.addEventListener('loadedmetadata', setTotalTime);
  videoPlayer.addEventListener('ended', handleEnded);

  if (document.addEventListener) { //내코드 아니라서 잘모름 이벤트리스너랑 DOM공부하면서 찾아봐야할듯
    document.addEventListener("fullscreenchange", escFullScreen, false);
    document.addEventListener("mozfullscreenchange", escFullScreen, false);
    document.addEventListener("MSFullscreenChange", escFullScreen, false);
    document.addEventListener("webkitfullscreenchange", escFullScreen, false);
  }
}

if(videoContainer){
  init();
}