import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

import env from '../config/env.js';
import log from '../config/winston.js';

const isAuthJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    const error = new Error('Not authorized');
    // error.status = 401;
    throw error;
  }

  const token = authHeader.split(' ')[1];

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, env.JWT_SECRET as Secret);
  } catch (err) {
    log.error(err);
    // err.status = 401;
    throw err;
  }

  if (!decodedToken) {
    const error = new Error('Not authenticated');
    // error.status = 401;
    log.error(error);
    throw error;
  }

  next();
};

export default isAuthJWT;
