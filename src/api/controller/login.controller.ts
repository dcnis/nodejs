import jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import LoginService from '../../services/login.service.js';
import env from '../../config/env.js';
import log from '../../config/winston.js';
import LoginBody from '../../models/login-body.model.js';

class LoginController {
  public static loginPage(req: Request, res: Response): void {
    const errorMessage = null;
    return res.render('login', { errorMessage });
  }

  public static login(req: Request, res: Response, next: NextFunction) {
    const body: LoginBody = req.body as LoginBody;

    LoginService.login(body)
      .then((user: any) => {
        // Create JWT Token
        const token = jwt.sign(
          {
            email: user.email,
            id: user.id,
          },
          env.JWT_SECRET as Secret,
          { expiresIn: '1h' }
        );

        res.status(200).json({ token: token, userId: user.id });
      })
      .catch((error: Error) => {
        log.error(error);
        return next(error);
      });
  }
}

export default LoginController;
