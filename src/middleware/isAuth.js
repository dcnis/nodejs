
const isAuth = (req, res, next) => {
    if(!req.session.isAuthenticated){
        res.redirect('/login');
    }

    next();
};

export default isAuth;