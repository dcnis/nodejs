import { Request, Response } from 'express';


export default class LogoutService {

public static logout (req: Request, res: Response) {
        res.redirect('/');
};


}
