import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validationResult } from 'express-validator';

const validateHome = [
  check('name')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long')
    .trim(),
  check('roomnumber')
    .exists()
    .withMessage('Please enter a roomnumber')
    .isNumeric()
    .withMessage('Roomnumber must be a number')
    .trim(),
  check('day').custom((value) => {
    if (value === 'Please choose? / 请选择') {
      throw new Error('Please choose a day!');
    }
    return true;
  }),
  check('temperature')
    .isNumeric()
    .withMessage('Please enter a valid temperature')
    .trim(),
  check('symptoms').exists().withMessage('Please choose a symptom'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      const sessionStorage = {};
      const oldInput = {
        name: req.body.name,
        roomnumber: req.body.roomnumber,
        temperature: req.body.temperature,
      };
      return res
        .status(422)
        .render('home', { sessionStorage, errorMessage, oldInput });
    }
    next();
  },
];

export default validateHome;
