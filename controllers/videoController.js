//home의 video 관련 기능들
import {videos} from "../db";
import routes from "../routes"; //default 로 export한 것을 import할때는 {}없이


export const home = (req,res) => {
    res.render("home",{pageTitle: 'Home', videos});
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
export const postUpload = (req,res) => {
    const {
        body: {file, title, description}
    } = req; // req.body의 title, file, description 값을 가져와서 임시로 저장한다
    // To Do : DB에 video 업로드하고 저장
    res.redirect(routes.videoDetail(123393)); 
    //임시방편으로 가짜 id를 보내줌 업로드 기능이 아직 없으니 업로드한 파일의 id로 만드는게 불가능
}


export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle:"Video Deatil"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle:"Delete Video"});

