//const express = require("express");
import "core-js" ;
import express from "express";  // bable test를 위해 require가 아닌 import로 express를 가져옴
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter"; // default로 export하지 않으면 이렇게 import해줘야함
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


 const app = express();




//function 도 arrow function + const 꼴로 바꿔줌
// 니꼬가 말하는 handle은 뭘까

 //req 객체는 사용하지 않음


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use의 의미 -> 누군가 /user 경로로 접속하면 이 router 전체를 사용하겠다는 의미 , 미들웨어 전역에 사용한 use는 url을 안받았음
app.use(routes.videos, videoRouter);

export default app;//다른곳에서 내 파일을 import를 할때 app object들을 준다는 내용 , 여기서 default는 무슨 의미지??