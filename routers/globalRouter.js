import express from "express";
import routes from "../routes"; //모든 route 값을 통일시켜서 모아둔 routes를 임포트해온다음, 각 router들에 맞는 route를 get받았을때 어떤 응답을 할건지 목적에 맞게 작성
//이 파일은 글로벌이니까 home에 관한 route들에 대해 응답을 해야함


const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send('Home'))
globalRouter.get(routes.join, (req, res) => res.send('Join'))
globalRouter.get(routes.login, (req, res) => res.send('Login'))
globalRouter.get(routes.logout, (req, res) => res.send('Logout'))
globalRouter.get(routes.search, (req, res) => res.send('Search')) //훨씬 정돈되어있음

export default globalRouter;

//유일하게 독점적으로 url을 다루는건 globalRouter,  나머지 함수들과는 상관이 없음