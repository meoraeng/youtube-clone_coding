const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){ // 니꼬가 말하는 handle은 뭘까
    console.log(`Listening on : http://localhost:${PORT}`);
} //콜백함수로 app.listen에 넘겨준다는데 아직 콜백함수 공부안했음... 니꼬도 알려준적없는데

function handleHome(req, res){
    res.send('Hello, from home');
}

function handleProfile(req,res){
    res.send("You are on my profile"); //실제 웹사이트를 제작할때는 여기에 send할 때 html, css값을 보내줘야함
} //req 객체는 사용하지 않음

app.get("/", handleHome); // get함수에 인자로 넘기는 값  (1. 이 주소(url)를 입력받으면, 2. 이 값을 호출해라 (함수든 객체든 어떤 데이터든))

app.get("/profile", handleProfile);

app.listen(PORT, handleListening); 
