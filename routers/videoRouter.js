import express from "express";
import { 
    deleteVideo, 
    editVideo, 
    getUpload, 
    postUpload, 
    videoDetail
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';
import routes from "../routes";

const videoRouter = express.Router();



videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); //미들웨어를 넣긴 했는데 얘는 next가없는데

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);


export default videoRouter;