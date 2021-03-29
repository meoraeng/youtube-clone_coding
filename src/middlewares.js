import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from "aws-sdk";
import routes from './routes';

const s3 = new aws.S3({
  accessKeyId:process.env.AWS_ACCESS_KEY,
  secretAccessKey:process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-2"
})

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: 'public-read', //access control list
    bucket: 'jo-tube/video',
  }),//다양한 스토리지를 multer에 설치가능, default는 node.js 파일시스템
})
const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: 'public-read', //access control list
    bucket: 'jo-tube/avatar'
  })
});

export const uploadVideo = multerVideo.single('videoFile');//하나의 파일만 업로드 가능하다는 것을 의미
//name part는(single 인수 스트링) html feild의 name이다
export const uploadAvatar = multerAvatar.single('avatar');

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "Jotubue";
    res.locals.routes = routes; //routes.js 의 routes 객체를 가져옴
    res.locals.loggedUser = req.user || null;
    next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user){
    res.redirect(routes.home);
  }else {
    next();
  }
}

export const onlyPrivate = (req,res,next) => {
  if(req.user){
    next();
  }else{
    res.redirect(routes.home);
  }
}
