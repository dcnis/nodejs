import bcrypt from 'bcryptjs';
import { FieldPacket } from 'mysql2';

import db from '../config/database.js';
import log from '../config/winston.js';
import User from '../models/user.model.js';
import { UserQueries } from '../queries/user.queries.js';
import LoginBody from '../models/login-body.model.js';

class LoginService {
  public static login(loginBody: LoginBody) {
    return db
      .getPool()
      .execute(UserQueries.GetUserByEmail, [loginBody.email])
      .then((rows: any) => {
        if (!rows || !rows[0] || rows[0].length < 1) {
          return Promise.reject('User does not exist');
        }

        const user = rows[0][0];

        // check password
        return bcrypt
          .compare(loginBody.password, user.user_password)
          .then((result: any) => {
            if (!result) {
              return Promise.reject('Wrong password!');
            }
            return Promise.resolve(user);
          });
      })
      .catch((error: Error) => {
        log.info(error);
        return Promise.reject(error);
      });
  }
}

export default LoginService;
