//home의 video 관련 기능들
export const home = (req,res) => res.render("home"); // home 컨트롤러
export const search = (req,res) => res.render("search"); 


//video Rotuer 
export const videos = (req,res) => res.render("videos");
export const upload = (req,res) => res.render("upload");
export const videoDetail = (req,res) => res.render("videoDetail");
export const editVideo = (req,res) => res.render("editVideo");
export const deleteVideo = (req,res) => res.render("deleteVideo");
