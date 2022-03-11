const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  MYSQL_URL: process.env.MYSQL_URL,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DB: process.env.MYSQL_DB
};