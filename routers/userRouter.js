import express from "express";
import { changePassword, editProfile, userDetail, users } from '../controllers/userController';
import routes from "../routes";


const userRouter = express.Router();


//사용자 정보를 알아보기 위해 DB를 조회하는 등 더 복잡해질 수 있는 로직 

userRouter.get(routes.users ,users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);


export default userRouter
