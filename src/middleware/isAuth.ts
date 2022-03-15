import { NextFunction, Request, Response } from 'express';

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  //     if (!req.session.isAuthenticated) {
  //     res.redirect('/login');
  //   }

  next();
};

export default isAuth;
