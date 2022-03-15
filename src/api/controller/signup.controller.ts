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
    const token = req.params['token'];

    // // get User from REDIS via token
    // if (!redisClient) {
    //   log.error('redisClient not ready');
    //   return;
    // }

    // redisClient.get('signup:' + token)
    //   .then((redisUser) => {
    //     const userdata = JSON.parse(redisUser);

    //     if (userdata) {
    //       signupService
    //         .createUser(userdata)
    //         .then(() => {
    //           res.render('signupSuccessful');
    //         })
    //         .catch((err: Error) => {
    //           log.error(err);
    //         });
    //     }
    // })
  }
}
