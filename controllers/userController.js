//컨트롤러는 어떤 일이 어떻게 발생하는지에 관한 로직
import routes from '../routes';
import User from "../models/User";

//global Router의 user 관련 기능 contorller
export const getJoin = (req, res) => {
    res.render('join',{pageTitle:"Join"}) ;
};
export const postJoin= async(req,res) => {
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
        } catch (error){
          console.log(error);
        }
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => {
    res.render('login',{pageTitle:"Login"});
}
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => {
    //로그아웃 처리 시켜줘야함 -> 로그인 해제 후 비로그인 상태 체크
    res.redirect(routes.home);
}

//user Router
export const users = (req,res) => res.render('users',{pageTitle:"Users"});
export const userDetail = (req,res) => res.render("userDetail",{pageTitle:"User Detail"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle:"Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"Change Password"});
