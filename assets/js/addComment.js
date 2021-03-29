import axios from 'axios';

const addCommentForm = document.getElementById('jsAddComment');
const commentList = document.getElementById('jsCommentList');
const commentNumber = document.getElementById('jsCommentNumber');

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
}

const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment; 
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async(comment) => {
  const videoId = window.location.href.split('/videos/')[1];
  const response = await axios({
    url:`/api/${videoId}/comment`, //이걸 통해 페이지가 따로 없어도 원하는 url로 요청을 할 수 있음
    method: "POST",
    data: {
      comment
    } //여기서 comment라는 속성에 인수로 받은 input text(comment)를 값으로 넘겨 post요청을 하면, post메소드 처리를 하는 라우트 컨트롤러에 의해 백엔드에서 작업시작
  });
  if(response.status===200){
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault(); //post요청 관련 작업에 대해 자동으로 새로고침 되는게 default라서, 새로고침이 되지 않게끔 하는 역할을 한다
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = ""; //입력이 완료되면 input창을 비운다
}

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if(addCommentForm){
  init();
}