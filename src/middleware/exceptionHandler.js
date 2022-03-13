

const exceptionHandler = {};

exceptionHandler.handleException = (error, req, res, next) => {
    console.error(error);
    const httpStatus = error.status ? error.status : 500;
    const errorResponse = {};
    errorResponse.message = error.message;
    res.status(httpStatus).json(errorResponse);
};

export default exceptionHandler;
