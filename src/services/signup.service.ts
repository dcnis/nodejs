import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { Response } from 'express';

import db from '../config/mysql/database.js';
import redisClient from './redis.service.js';
import SignupBody from '../models/signup-body.model.js';
import log from '../config/winston.js';

export default class SignupService {
  // create reusable transporter object using the default SMTP transport
  // Login at: https://ethereal.email/login
  private static transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'jamel.bode29@ethereal.email',
      pass: 'Z627AVkj16VzaewtZG',
    },
  });

  public static signup(signupData: SignupBody, res: Response) {
    // Create unique signupHash
    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        console.log(err);
        return res.redirect('/');
      }

      const signupHash = buffer.toString('hex');
      signupData.signupHash = signupHash;

      if (!redisClient.isConnected()) {
        const error = new Error('redisClient not ready');
        throw error;
      }

      bcrypt.hash(signupData.password, 12).then((encryptedPassword) => {
        signupData.password = encryptedPassword;

        const key = 'signup:' + signupHash;
        const value = JSON.stringify(signupData);

        redisClient.set(key, value);
        redisClient.expire(key, 1200);
      });

      this.transporter
        .sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: 'bgk.dennis@yahoo.de', // list of receivers
          subject: 'Verify your email✔', // Subject line
          html: `<b>Hello Dennis! <br>
           Please click on following link to verify your email: <a href="http://localhost:3000/signupVerification/${signupHash}">
           http://localhost:3000/signupVerification/${signupHash}</a></b>`,
        })
        .catch((error) => {
          console.log('Fehler beim Senden der Email ' + error);
        });
    });

    res.render('checkYourEmail');
  }

  public static verifySignup(signupHash: string): Promise<void> {
    // get User from REDIS via token
    if (!redisClient.isConnected()) {
      const error = new Error('redisClient not ready');
      throw error;
    }

    return redisClient.get('signup:' + signupHash).then((redisUser) => {
      const userdata = JSON.parse(redisUser);

      if (userdata) {
        this.createUser(userdata)
          .then(() => Promise.resolve())
          .catch((err: Error) => {
            log.error(err);
            return err;
          });
      }
    });
  }

  private static createUser(signupData: SignupBody) {
    return db
      .execute(
        'INSERT INTO Users (full_name, email, roomnumber, user_password) VALUES (?, ?, ?, ?)',
        [
          signupData.full_name,
          signupData.email,
          signupData.roomnumber,
          signupData.password,
        ]
      )
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        const errorMsg = 'Error while inserting new user: ' + error;
        return errorMsg;
      });
  }
}
