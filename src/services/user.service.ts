import db from '../config/mysql/database.js';
import User from '../models/user.model.js';

export default class UserService {
  public static addUser(user: User) {
    return db
      .execute(
        'INSERT INTO Users (first_name, last_name, email, roomnumber) VALUES (?, ?, ?, ?)',
        [user.full_name, user.last_name, user.email, user.roomnumber]
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        const errorMsg = 'Error while inserting new user: ' + error;
        return errorMsg;
      });
  }

  public static getAll() {
    return db
      .execute('SELECT * FROM Users')
      .then((data) => {
        return data[0];
      })
      .catch((err) => {
        console.log(err);
        return Promise.resolve([]);
      });
  }
}
