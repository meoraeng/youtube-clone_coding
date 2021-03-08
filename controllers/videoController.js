//home의 video 관련 기능들
export const home = (req,res) => res.send("Home"); // home 컨트롤러
export const search = (req,res) => res.send("Search"); 



//video Rotuer 
export const videos = (req,res) => res.send("Videos");
export const upload = (req,res) => res.send("Upload");
export const videoDetail = (req,res) => res.send("Video Detail");
export const editVideo = (req,res) => res.send("Edit Video");
export const deleteVideo = (req,res) => res.send("Delete Video");
