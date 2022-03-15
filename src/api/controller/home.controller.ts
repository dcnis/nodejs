import { Request, Response, NextFunction } from 'express';

import db from '../../config/mysql/database.js';

class HomeController {
  public static home(req: Request, res: Response): void {
    db.execute('SELECT * FROM Reports')
      .then((ans) => {
        // console.log(ans[0]);
      })
      .catch((err) => {
        // console.log(err);
      });

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
