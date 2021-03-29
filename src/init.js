
import "@babel/polyfill";
import "./db";
import dotenv from "dotenv";
import app from "./app"; //다른 파일에서 express를 import 해서 app 관련 메소드들을 정의했고, listen만 이 파일내에서 하는게 가능하고 app.js의 모든 기능에 접근이 가능하다
import "./models/Video";
import "./models/Comment";
import "./models/User";


dotenv.config(); // .env의 환경변수를 사용할 수 있도록 해주는 함수인건가? 그냥 import만 해선 안되는거임?

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);