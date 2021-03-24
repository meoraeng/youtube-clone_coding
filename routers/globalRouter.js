import express from "express";
import passport from 'passport';
import { home, search } from '../controllers/videoController';
import { 
    getJoin, 
    getLogin, 
    postJoin, 
    postLogin, 
    logout, 
    githubLogin,
    postGithubLogIn,
    getMe,
    facebookLogin,
    postFacebookLogIn
} from '../controllers/userController';
import routes from "../routes"; //모든 route 값을 통일시켜서 모아둔 routes를 임포트해온다음, 각 router들에 맞는 route를 get받았을때 어떤 응답을 할건지 목적에 맞게 작성
import { onlyPrivate, onlyPublic } from '../middlewares';
//이 파일은 글로벌이니까 home에 관한 route들에 대해 응답을 해야함


const globalRouter = express.Router();
globalRouter.get(routes.home, home)

globalRouter.get(routes.join, onlyPublic,getJoin)
globalRouter.post(routes.join, onlyPublic,postJoin,postLogin);

globalRouter.get(routes.login, onlyPublic,getLogin)
globalRouter.post(routes.login, onlyPublic,postLogin)


globalRouter.get(routes.logout, onlyPrivate,logout)
globalRouter.get(routes.search, search) //훨씬 정돈되어있음 


globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback, 
  passport.authenticate('github', {failureRedirect: routes.login}),
  postGithubLogIn
);
globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate('facebook', {failureRedirect: routes.login}),
  postFacebookLogIn
)
globalRouter.get(routes.me, getMe);
export default globalRouter;

//유일하게 독점적으로 url을 다루는건 globalRouter,  나머지 함수들과는 상관이 없음