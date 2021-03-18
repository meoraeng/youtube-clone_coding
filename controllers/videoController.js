//home의 video 관련 기능들
import routes from "../routes"; //default 로 export한 것을 import할때는 {}없이
import Video from "../models/Video";

export const home = async(req,res) => { //니코ver. async/await설명 이해부족 
    try{ 
        const videos = await Video.find({}); // find() 랑 ({})차이는 뭘까
        //home에 접근시
        res.render("home",{pageTitle: 'Home', videos}); 
    } catch (error){
        console.log(error);
        res.render("home", {pageTitle: 'Home', videos: []});
    }
} // home 컨트롤러
export const search = (req,res) => {
    const {
        query: {term: searchingBy}
    } = req; // const searchingBy = req.query.term을 한 것과 같음
    res.render("search",{pageTitle: 'Search', searchingBy, videos });
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
        description
    }); //post요청을 받아 새 비디오를 만듬
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id)); 
}


export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle:"Video Deatil"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle:"Delete Video"});

