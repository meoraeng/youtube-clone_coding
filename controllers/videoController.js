//home의 video 관련 기능들
import routes from "../routes"; //default 로 export한 것을 import할때는 {}없이
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async(req,res) => { //니코ver. async/await설명 이해부족 
    try{ 
        const videos = await Video.find({}).sort({'_id':-1}); // find() 랑 ({})차이는 뭘까
        //home에 접근시
        res.render("home",{pageTitle: 'Home', videos}); 
    } catch (error){
        console.log(error);
        res.render("home", {pageTitle: 'Home', videos: []});
    }
} // home 컨트롤러
export const search = async(req,res) => {
    const {
        query: {term: searchingBy}
    } = req; // const searchingBy = req.query.term을 한 것과 같음
    let videos = [];
   try{
    videos = await Video.find({
        title:{$regex: searchingBy, $options: "i"}
    });
   }//매우 많은 find 옵션이있다
   catch(error){
    console.log(error);
   };
   res.render("search",{pageTitle: 'Search', searchingBy, videos});
}


//video Rotuer 
export const getUpload = (req,res) => {
    res.render("upload",{pageTitle:"Upload Video"});
}
export const postUpload = async(req,res) => {
    const {
        body: { title, description},  //사용자가 업로드한 파일의 정보
        file: { path }
    } = req; // req.body의 title,description 값을 가져와서 저장, file은 이제 필요없음
    const newVideo = await Video.create({
        fileUrl: path, //사용자가 업로드한 정보를 토대로 새로 만드는 비디오스키마
        title,
        description,
        creator: req.user.id
    }); //post요청을 받아 새 비디오를 만듬
    req.user.videos.push(newVideo.id);
    req.user.save();
    res.redirect(routes.videoDetail(newVideo.id)); 
}


export const videoDetail = async(req,res) => {
    const {
        params: {id}
    } =req;
    try{
    const video = await Video.findById(id).populate('creator').populate('comments');
    res.render("videoDetail", {pageTitle: video.title ,video});//video == video:video와 같음
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}
export const getEditVideo = async(req,res) => {
    const {
        params: {id}
    } = req;
    try {
        const video=await Video.findById(id);
        if (video.creator.toString() !== req.user.id){ //populate안한 creator는 id타입
          throw Error();
        }else{
          res.render("editVideo", {pageTitle: `Edit ${video.title}`,video})
        }
    }catch(error){//id로 비디오를 찾지 못하면 존재않는 비디오를 수정한단뜻이니
        res.redirect(routes.home); //홈으로 보냄
    }
}
export const postEditVideo = async(req,res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try{ //그냥 업데이트하는걸로 끝나지, 저장을 하진 않음 
        await Video.findOneAndUpdate({_id:id}, {title,description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
}
export const deleteVideo = async(req,res) => {
    const {
        params: {id}
    } = req;
    try{
        const video=await Video.findById(id);
        if (video.creator !== req.user.id){ //populate안한 creator는 id타입
          throw Error();
        } else{
        await Video.findOneAndRemove({_id:id});
        }
    }catch(error){
        console.log(error);
    }
    res.redirect(routes.home);
};

//Register Video View 

export const postRegisterView = async(req,res) => {
  const {
    params : {id}
  } = req;
  try{
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  }catch(error){
    res.status(400);
  } finally{
    res.end();
  }
}
// Add Comment

export const postAddComment = async(req,res) => {
  const {
    params: {id},
    body: {comment},
    user
  } = req;
  try{
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
      creatorName: user.name
    });
    video.comments.push(newComment.id);
    user.comments.push(newComment.id);
    video.save();
    user.save();
  }catch(error){
    res.status(400);
  }finally {
    res.end();
  }
}