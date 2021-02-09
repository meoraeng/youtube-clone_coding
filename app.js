//const express = require("express");
import "core-js" ;
import express from "express";  // bable test를 위해 require가 아닌 import로 express를 가져옴
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";

 // default로 export하지 않으면 이렇게 import해줘야함


const app = express();


//function 도 arrow function + const 꼴로 바꿔줌
// 니꼬가 말하는 handle은 뭘까


const handleHome = (req, res) =>  res.send('Hello, from home');


const handleProfile = (req,res) =>  res.send("You are on my profile"); //실제 웹사이트를 제작할때는 여기에 send할 때 html, css값을 보내줘야함
 //req 객체는 사용하지 않음


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome); // get함수에 인자로 넘기는 값  (1. 이 주소(url)를 입력받으면, 2. 이 값을 호출해라 (함수든 객체든 어떤 데이터든))

app.get("/profile", handleProfile);

app.use("/user", userRouter); // use의 의미 -> 누군가 /user 경로로 접속하면 이 router 전체를 사용하겠다는 의미 , 미들웨어 전역에 사용한 use는 url을 안받았음

export default app;//다른곳에서 내 파일을 import를 할때 app object들을 준다는 내용 , 여기서 default는 무슨 의미지??