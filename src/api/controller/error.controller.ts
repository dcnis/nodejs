import { Request, Response } from 'express';

class ErrorController {

    public static error404 (req: Request, res: Response) {
        res.status(404).render('error404');
    };
    
    public static error500 (req: Request, res: Response) {
        res.status(500).render('error500');
    };

}


export default ErrorController;
