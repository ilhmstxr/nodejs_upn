require('dotenv').config(); // Impor konfigurasi dari file .env
const mysqlc = require("mysql2");

const dbPool = mysqlc.createPool({
  // wont work
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // work
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "nodejs_upn",
});

module.exports = dbPool.promise();
