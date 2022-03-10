const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  mysql_url: process.env.MYSQL_URL,
  mysql_user: process.env.MYSQL_USER,
  mysql_password: process.env.MYSQL_PASSWORD
};