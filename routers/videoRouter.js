import express from "express";
import { 
    deleteVideo, 
    getEditVideo, 
    getUpload, 
    postUpload, 
    postEditVideo, 
    videoDetail
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';
import routes from "../routes";

const videoRouter = express.Router();


//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); //미들웨어를 넣긴 했는데 얘는 next가없는데

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);
// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo)


// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);


export default videoRouter;