import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validationResult } from 'express-validator';

const validateSignup = [
  check('email')
    .isEmail()
    .withMessage('Please enter a valid email!')
    .normalizeEmail(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      return res.status(422).render('login', { errorMessage });
    }
    next();
  },
];

export default validateSignup;
