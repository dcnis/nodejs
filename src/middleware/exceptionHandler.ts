import { NextFunction, Request, Response } from 'express';

export default class ExceptionHandler {
  public static handleException(req: Request, res: Response) {
    // console.error(error);
    // const httpStatus = error.status || 500;
    // const errorResponse = {};
    // errorResponse.message = error.message;
    // res.status(httpStatus).json(errorResponse);

    res.redirect('/error500');
  }
}
