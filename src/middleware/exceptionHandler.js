

const exceptionHandler = {};

exceptionHandler.handleException = (error, req, res, next) => {
    res.redirect('/error500');
};

export default exceptionHandler;
