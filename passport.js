import passport from "passport";
import User from "./models/User";


//Strategy -> 로그인 하는 방식(페북, 깃헙, 로컬 로그인 등등 각각이 Starategy)
//passport가 Strategy 하나를 사용하도록 한다
passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//전 세계 모든 이들이 이와 같은 함수를 실행함
