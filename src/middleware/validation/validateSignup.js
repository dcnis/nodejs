import { check } from 'express-validator';
import { validationResult } from 'express-validator';


const validateSignup = [
    check('email').isEmail().withMessage('Please enter a valid email!'),
    check('full_name').isLength({min: 2}).withMessage('Name must be at least 2 characters long'),
    check('roomnumber').isNumeric().withMessage('Roomnumber must be a number'),
    check('password').isLength({min: 6, max: 25}).withMessage('Password must be between 6 and 25 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.array()[0].msg;
            return res.status(422).render('signup', {errorMessage});
        }
        next();
      }
];

export default validateSignup;