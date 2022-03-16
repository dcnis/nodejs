import { Request, Response } from 'express';

import signupService from '../../services/signup.service.js';
// import redisClient from '../../services/redis.service';
import log from '../../config/winston.js';
import SignupBody from '../../models/signup-body.model.js';

export default class SignupController {
  public static signupPage(req: Request, res: Response) {
    const errorMessage = null;
    return res.render('signup', { errorMessage });
  }

  public static signup(req: Request, res: Response) {
    const body: SignupBody = req.body as SignupBody;

    signupService.signup(body, res);
  }

  public static signupVerification(req: Request, res: Response) {
    const signupHash = req.params['token'];

    signupService
      .verifySignup(signupHash)
      .then(() => {
        res.render('signupSuccessful');
      })
      .catch((error) => {
        log.error(error);
      });
  }
}
