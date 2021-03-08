//컨트롤러는 어떤 일이 어떻게 발생하는지에 관한 로직

//global Router의 user 관련 기능 contorller
export const join = (req, res) => res.send('Join') 
export const login = (req, res) => res.send('Login')
export const logout = (req, res) => res.send('Logout')

//user Router
export const users = (req,res) => res.send('Users');
export const userDetail = (req,res) => res.send("User Detail");
export const editProfile = (req,res) => res.send("Edit Profile");
export const changePassword = (req,res) => res.send("Change Password");
