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
      user.email = email;
      user.avatarUrl = avatarUrl;
      user.name = name;
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
};
export const postGithubLogIn = (req,res) => {
  res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate('facebook');

export const facebookLoginCallback = async(accessToken,__,profile,cb) => {
  const {_json: {id, name, email}} = profile;
  try{
    const user = await User.findOne({email});
    if(user){
      user.facebookId = id;
      user.name = name; 
      user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large&access_token=${accessToken}`
      user.save();
      return cb(null, user); //쿠키에 저장하게됨
    }
    const newUser= await User.create({
      email,
      name,
      facebookId: id,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large&access_token=${accessToken}`
    });
    return cb(null,user);
  }catch(error){
    return cb(error);
  }
}
export const postFacebookLogIn = (req,res) => {
  res.redirect(routes.home);
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

//user Router
export const getMe = async(req,res) => {
  try{
    const user=await User.findById(req.user.id).populate('videos');
    res.render("userDetail",{pageTitle:"User Detail", user});
  }catch(error){
    res.redirect(routes.home);
  }  
};

export const users = (req,res) => res.render('users',{pageTitle:"Users"});
export const userDetail = async (req,res) =>{
  const { params : { id }} =req; 
  try{
    const user =  await User.findById(id).populate('videos');
    res.render("userDetail",{pageTitle:"User Detail", user});
  }catch(error) {
    res.redirect(routes.home);
  }
}
export const getEditProfile = (req,res) => {
  res.render("editProfile",{pageTitle:"Edit Profile"});
}
export const postEditProfile = async(req,res) => {
  const {
    body: {name,email},
    file
  } = req;
  try{
    await User.findByIdAndUpdate(req.user.id,{
      name,
      email,
      avatarUrl: file ? file.location : req.user.avatarUrl
    });
    res.redirect(routes.me);
  }catch(error){
    console.log(error)
    res.redirect(routes.editProfile);
  }
}
export const getChangePassword = (req,res) =>
 res.render("changePassword",{pageTitle:"Change Password"});
export const postChangePassword = async(req,res)=> {
  const {
    body: {
      oldPassword,
      newPassword,
      newPassword1
    }
  } = req;
  try {
    if(newPassword !== newPassword1){
      res.status(400);
      res.redirect(`/users${routes.changePassword}`);
      return;
    } else {
      await req.user.changePassword(oldPassword, newPassword);
      res.redirect(routes.me);
    }
  }catch(error){
    res.status(400);
    res.redirect(`/users${routes.changePassword}`);
  }
}


