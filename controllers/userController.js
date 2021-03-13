//컨트롤러는 어떤 일이 어떻게 발생하는지에 관한 로직

//global Router의 user 관련 기능 contorller
export const join = (req, res) => res.render('join',{pageTitle:"Join"}) 
export const login = (req, res) => res.render('login',{pageTitle:"Login"})
export const logout = (req, res) => res.render('logout',{pageTitle:"Log out"})

//user Router
export const users = (req,res) => res.render('users',{pageTitle:"Users"});
export const userDetail = (req,res) => res.render("userDetail",{pageTitle:"User Detail"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle:"Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"Change Password"});
