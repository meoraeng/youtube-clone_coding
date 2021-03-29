import express from "express";
import routes from "../routes";
import { 
  getChangePassword,
  postChangePassword, 
  getEditProfile, 
  postEditProfile, 
  userDetail, 
  users 
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from '../middlewares';


const userRouter = express.Router();


//사용자 정보를 알아보기 위해 DB를 조회하는 등 더 복잡해질 수 있는 로직 

userRouter.get(routes.users ,users);

userRouter.get(routes.editProfile, onlyPrivate,getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar,postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate,getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);
//아 이상하더라... 여기선 그냥 콜백으로 실행시키고 
//템플릿에서는 locals에 있는 user의 id값을 인수로 넘기도록하는구나

export default userRouter
