import { Request, Response } from 'express';

class AdminController {

    public static topsecretInfo (req: Request, res: Response): void {
        res.status(200).json({secret: 'This is my top secret message!'});
    };


}


export default AdminController;