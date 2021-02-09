import app from "./app"; //다른 파일에서 express를 import 해서 app 관련 메소드들을 정의했고, listen만 이 파일내에서 하는게 가능하고 app.js의 모든 기능에 접근이 가능하다

const PORT = 4000;

const handleListening = () =>
    console.log(`❤Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);