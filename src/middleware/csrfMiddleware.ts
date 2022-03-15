import { NextFunction, Request, Response } from 'express';

const csrfMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

export default csrfMiddleware;
