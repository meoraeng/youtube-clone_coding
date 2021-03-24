//컨트롤러는 어떤 일이 어떻게 발생하는지에 관한 로직
import passport from 'passport';
import routes from '../routes';
import User from "../models/User";

//global Router의 user 관련 기능 contorller
export const getJoin = (req, res) => {
    res.render('join',{pageTitle:"Join"}) ;
};
export const postJoin= async(req,res, next) => {
    const {
        body: {name, email, password, password2}
    } =req;
    if(password!==password2){
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else{
        try{const user = await User({
          name,
          email
        });
          await User.register(user, password);
          next();
        } catch (error){
          console.log(error);
        }
    }
}

export const getLogin = (req, res) => {
    res.render('login',{pageTitle:"Login"});
}
export const postLogin = passport.authenticate('local',{
  failureRedirect: routes.login,
  successRedirect: routes.home
})
export const githubLogin = passport.authenticate('github');

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {_json: {id, avatar_url:avatarUrl, name, email} } = profile;
  try{
    const user = await User.findOne({email});
    if(user){
      user.githubId = id;
      user.avatarUrl = avatarUrl;
      user.name = name; //이름까지 깃허브 정보로 갱신되게 하는게 맞는걸까?
      user.save();
      return cb(null, user); //쿠키에 저장하게됨
    }
    const newUser= await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  }catch(error){
    return cb(error);
  }
}
export const postGithubLogIn = (req,res) => {
  res.redirect(routes.home);
}
export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

//user Router
export const getMe = (req,res) => {
  res.render("userDetail",{pageTitle:"User Detail", user: req.user});
};

export const users = (req,res) => res.render('users',{pageTitle:"Users"});
export const userDetail = (req,res) => res.render("userDetail",{pageTitle:"User Detail"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle:"Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"Change Password"});


