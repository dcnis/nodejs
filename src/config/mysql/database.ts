import mysql from 'mysql2';

import env from '../env.js';

const pool = mysql.createPool({
  host: env.MYSQL_URL,
  user: env.MYSQL_USER,
  database: env.MYSQL_DB,
  password: env.MYSQL_ROOT_PASSWORD,
});

export default pool.promise();
