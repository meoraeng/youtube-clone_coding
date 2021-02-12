import express from "express";
import routes from "../routes";


const userRouter = express.Router();


//사용자 정보를 알아보기 위해 DB를 조회하는 등 더 복잡해질 수 있는 로직 

userRouter.get(routes.users, (req,res) => res.send('Users'));
userRouter.get(routes.userDetail, (req,res) => res.send("User Detail"));
userRouter.get(routes.editProfile, (req,res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req,res) => res.send("Change Password"));


export default userRouter
