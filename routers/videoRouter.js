import express from "express";
import { 
    deleteVideo, 
    getEditVideo, 
    getUpload, 
    postUpload, 
    postEditVideo, 
    videoDetail
} from '../controllers/videoController';
import { onlyPrivate, uploadVideo } from '../middlewares';
import routes from "../routes";

const videoRouter = express.Router();


//Upload
videoRouter.get(routes.upload, onlyPrivate,getUpload);
videoRouter.post(routes.upload, onlyPrivate,uploadVideo, postUpload); //미들웨어를 넣긴 했는데 얘는 next가없는데

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);
// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate,getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate,postEditVideo)


// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate,deleteVideo);


export default videoRouter;