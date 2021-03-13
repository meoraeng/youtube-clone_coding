//home의 video 관련 기능들
export const home = (req,res) => res.render("home",{pageTitle: 'Home'}); // home 컨트롤러
export const search = (req,res) => res.render("search",{pageTitle: 'Search'}); 


//video Rotuer 
export const videos = (req,res) => res.render("videos",{pageTitle:"Videos"});
export const upload = (req,res) => res.render("upload",{pageTitle:"Upload Video"});
export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle:"Video Deatil"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle:"Delete Video"});
