import { Request, Response } from 'express';

import User from '../../models/user.model.js';
import userservice from '../../services/user.service.js';

export default class UserController {
  public static getAll(req: Request, res: Response) {
    userservice.getAll().then((allUser: any) => {
      res.json(allUser);
    });
  }

  public static addUser(req: Request, res: Response) {
    const body: User = req.body as User;
    userservice
      .addUser(body)
      .then((response: any) => {
        return res.json(response);
      })
      .catch((error: Error) => {
        console.log(error);
        return res.json(error);
      });
  }

  public static getUserByUserId(req: Request, res: Response) {}

  public static getUserByEmail(req: Request, res: Response) {}

  public static deleteUserById(req: Request, res: Response) {}

  public static deleteUserByEmail(req: Request, res: Response) {}
}
