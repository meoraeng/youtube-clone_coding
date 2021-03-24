import passport from "passport";
import GithubStrategy from "passport-github"
import { githubLoginCallback } from './controllers/userController';
import User from "./models/User";
import routes from './routes';


//Strategy -> 로그인 하는 방식(페북, 깃헙, 로컬 로그인 등등 각각이 Starategy)
//passport가 Strategy 하나를 사용하도록 한다
passport.use(User.createStrategy())

passport.use(
  new GithubStrategy({
  clientID: process.env.GH_ID,
  clientSecret: process.env.GH_SECRET,
  redirect_uri: `http://localhost:4000/${routes.githubCallback}`
  },
  githubLoginCallback
  )
);

passport.serializeUser(function(user, done) {
  done(null,user);
});
passport.deserializeUser(function(user,done){
  done(null,user);
});
//전 세계 모든 이들이 이와 같은 함수를 실행함
