import { Request, Response, NextFunction } from 'express';

import db from '../../config/database.js';

class HomeController {
  public static home(req: Request, res: Response): void {
    

    const errorMessage = null;
    const oldInput = {
      name: '',
      roomnumber: '',
      temperature: '',
    };
    res.render('home', { errorMessage, oldInput });
  }

  public static sendReport(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    res.render('success');
  }

  public static logoutPage(req: Request, res: Response): void {
    return res.render('logout');
  }
}

export default HomeController;
