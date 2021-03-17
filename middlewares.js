import routes from './routes';

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "Jotubue";
    res.locals.routes = routes; //routes.js 의 routes 객체를 가져옴
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};

