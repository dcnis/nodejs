import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';

const isAuthJWT = (req, res, next) => {

    const authHeader = req.get('Authorization');
    
    if(!authHeader){
        const error = new Error('Not authorized');
        error.status = 401;
        throw error;
    }

    const token = authHeader.split(' ')[1];

    let decodedToken;
    try{
        decodedToken = jwt.verify(token, JWT_SECRET);
    } catch(err){
        console.error(err);
        err.status = 401;
        throw err;
    }

    if(!decodedToken){
        const error = new Error('Not authenticated');
        error.status = 401;
        console.error(err);
        throw error;
    }

    next();
};

export default isAuthJWT; 