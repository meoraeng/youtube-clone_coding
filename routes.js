//모든 route는 여기서 통일한다. 다른 곳에서 같은 url을 사용할 수도 있기 때문에
// /user/id/edit 등등 길어지는 구조를 모두 외워야하기 때문에 성가심, 하나의 진실된 source를 사용하기 위해 작성된 파일임

//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

 
//Users

const USERS = "/users";
const USER_DETAIL = "/:id"; // :id 는 id가 변하는 값이라는걸 express가 알아차림
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";


//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO ="/:id/edit";
const DELTE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELTE_VIDEO
};

export default routes;