// biến toàn cục process = window
require("dotenv").config();

module.exports = {
  dbDatabase: process.env.DB_DATABASE,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbDialect: process.env.DB_DIALECT,
};
