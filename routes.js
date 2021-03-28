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
const ME = "/me"


//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO ="/:id/edit";
const DELTE_VIDEO = "/:id/delete";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";
// Facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

// API

const API = '/api';
const REGISTER_VIEW = "/:id/view"; //id는 비디오id


const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
        if(id){
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if(id){
            return `/videos/${id}`;
        }else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: id=> {
        if(id){
            return `/videos/${id}/edit`
        } else{
            return EDIT_VIDEO;
        }
    },
    deleteVideo: id => {
        if(id) {
            return `/videos/${id}/delete`
        }else {
            return DELTE_VIDEO;
        }
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    me: ME,
    facebook: FACEBOOK,
    facebookCallback: FACEBOOK_CALLBACK,
    api: API,
    registerView:REGISTER_VIEW,
};

export default routes;