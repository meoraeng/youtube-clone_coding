//컨트롤러는 어떤 일이 어떻게 발생하는지에 관한 로직

//global Router의 user 관련 기능 contorller
export const join = (req, res) => res.render('join') 
export const login = (req, res) => res.render('login')
export const logout = (req, res) => res.render('logout')

//user Router
export const users = (req,res) => res.render('users');
export const userDetail = (req,res) => res.render("userDetail");
export const editProfile = (req,res) => res.render("editProfile");
export const changePassword = (req,res) => res.render("changePassword");
