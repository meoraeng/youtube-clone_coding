//const express = require("express");
import "core-js" ;
import express from "express";  // bable test를 위해 require가 아닌 import로 express를 가져옴
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import { localsMiddleware } from './middlewares';
import userRouter from "./routers/userRouter"; // default로 export하지 않으면 이렇게 import해줘야함
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

import "./passport";


const app = express();


app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
    }); //동영상 안나와서 넣은 설정


app.use( helmet({ contentSecurityPolicy: false }))//동영상이 안나와서 댓글따라 설정 바꿈
app.set("view engine","pug"); // app.set ?
app.use("/uploads", express.static('uploads')); //express.static이 뭐지?
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//어차피 각  router 파일 들에서 get요청에 대한 res 설정은 이미 다 되어있으니, 이미 정의된 그 로직을 미들웨어로서(?) 사용하기 위해 use를 쓰는거같음


app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); 
// use의 의미 -> 누군가 /user 경로로 접속하면 이 userRouter파일의 값을 사용하겠다는 의미 , 전역으로 쓰이는 미들웨어로 사용하는 use는 url을 안받았음, 여기서 설정한 주소값 + Router페이지의 요청메소드에 대한 라우팅 주소값을 합쳐서 user/(userRouter의 라우팅 주소값) 형태로 라우팅을 연결한다
app.use(routes.videos, videoRouter);

export default app;//다른곳에서 내 파일을 import를 할때 app object들을 준다는 내용 , 여기서 default는 무슨 의미지??