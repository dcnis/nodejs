import { Request, Response } from 'express';

import logoutService from '../../services/logout.service.js';

export default class LogoutController {
  public static logout(req: Request, res: Response) {
    logoutService.logout(req, res);
  }
}
