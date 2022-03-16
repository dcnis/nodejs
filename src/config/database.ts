import mysql, { Pool } from 'mysql2';

import env from './env.js';
import log from './winston.js';

class Database {
  private static _instance: Database;

  private _pool: any;

  private constructor() {}

  public static getInstance(): Database {
    if (!this._instance) {
      this._instance = new Database();
    }
    return this._instance;
  }

  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._pool = mysql.createPool({
        host: env.MYSQL_URL,
        user: env.MYSQL_USER,
        database: env.MYSQL_DB,
        password: env.MYSQL_ROOT_PASSWORD,
      });

      log.info('MySQL Pool created');
      resolve();
    });
  }

  public getPool(): any {
    return this._pool.promise();
  }
}

export default Database.getInstance();
