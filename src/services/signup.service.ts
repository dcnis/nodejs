import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { Response } from 'express';

import db from '../config/mysql/database.js';
// import redisClient from './redis.service';
import SignupBody from '../models/signup-body.model.js';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'jamel.bode29@ethereal.email',
    pass: 'Z627AVkj16VzaewtZG',
  },
});

export default class SignupService {
  public static signup(signupData: SignupBody, res: Response) {
    // Create Token with encrypt
    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        console.log(err);
        return res.redirect('/');
      }

      const token = buffer.toString('hex');
      signupData.token = token;

      // // Store potential User with Token in REDIS
      // if (!redisClient) {
      //   console.log('REDIS NOT INITIALIZED');
      //   return;
      // }

      const key = 'signup:' + token;
      const value = JSON.stringify(signupData);

      // redisClient.SET(key, value);
      // redisClient.EXPIRE(key, 1200);

      // transporter.sendMail({
      //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
      //     to: "bgk.dennis@yahoo.de", // list of receivers
      //     subject: "Verify your email✔", // Subject line
      //     html: `<b>Hello Dennis! <br>
      //     Please click on following link to verify your email: <a href="http://localhost:3000/signupVerification/${token}">
      //     http://localhost:3000/signupVerification/${token}</a></b>`,
      // }).catch((error) => {
      //     console.log('Fehler beim Senden der Email ' + error)
      // });
    });

    res.render('checkYourEmail');
  }

  public static createUser(signupData: SignupBody) {
    return bcrypt.hash(signupData.password, 12).then((encryptedPassword) => {
      return db
        .execute(
          'INSERT INTO Users (full_name, email, roomnumber, user_password) VALUES (?, ?, ?, ?)',
          [
            signupData.full_name,
            signupData.email,
            signupData.roomnumber,
            encryptedPassword,
          ]
        )
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((error) => {
          const errorMsg = 'Error while inserting new user: ' + error;
          return errorMsg;
        });
    });
  }
}
