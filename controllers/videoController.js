//home의 video 관련 기능들
export const home = (req,res) => res.render("home",{pageTitle: 'Home'}); // home 컨트롤러
export const search = (req,res) => {
    const {
        query: {term: searchingBy}
    } = req; // const searchingBy = req.query.term을 한 것과 같음
    res.render("search",{pageTitle: 'Search', searchingBy});
}


//video Rotuer 
export const videos = (req,res) => res.render("videos",{pageTitle:"Videos"});
export const upload = (req,res) => res.render("upload",{pageTitle:"Upload Video"});
export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle:"Video Deatil"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle:"Delete Video"});


//커밋 진짜 개같네 ㅋㅋㅋㅋ 한번 실수하면 바꿀 수가 없어 ㅈ같게;;