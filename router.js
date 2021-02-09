import express from "express";


export const userRouter = express.Router();
//export default app ; -> import app from "./app";
//export const 변수명; -> import {변수명} from "./파일명" 


userRouter.get("/", (req,res) => res.send("user index"));
userRouter.get("/edit", (req,res) => res.send("user edit"));
userRouter.get("/password", (req,res) => res.send("user password")); 
//express는 모든것을 매우 작은 파일로 쪼개서 사용할 수 있게 해줌
//라우트를 카테고리별로 쪼개서 묶을 수 있음. 이번엔 user로 묶었음 video/~~~ 이런 식으로도 나뉠 수 있음


