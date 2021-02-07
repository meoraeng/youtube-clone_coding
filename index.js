const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){ // 니꼬가 말하는 handle은 뭘까
    console.log(`Listening on : http://localhost:${PORT}`);
} //콜백함수로 app.listen에 넘겨준다는데 아직 콜백함수 공부안했음... 니꼬도 알려준적없는데

app.listen(PORT, handleListening); 
