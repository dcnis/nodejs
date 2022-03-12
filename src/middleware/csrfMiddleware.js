
const csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.isAuth = req.session.isAuthenticated;
    next();
};

export default csrfMiddleware;