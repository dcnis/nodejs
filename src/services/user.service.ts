import db from '../config/database.js';
import User from '../models/user.model.js';

export default class UserService {
  public static addUser(user: User) {
    return db
      .getPool()
      .execute(
        'INSERT INTO Users (first_name, last_name, email, roomnumber) VALUES (?, ?, ?, ?)',
        [user.full_name, user.last_name, user.email, user.roomnumber]
      )
      .then((response: any) => {
        return response;
      })
      .catch((error: Error) => {
        const errorMsg = 'Error while inserting new user: ' + error;
        return errorMsg;
      });
  }

  public static getAll() {
    return db
      .getPool()
      .execute('SELECT * FROM Users')
      .then((data: any) => {
        return data[0];
      })
      .catch((err: Error) => {
        console.log(err);
        return Promise.resolve([]);
      });
  }
}
