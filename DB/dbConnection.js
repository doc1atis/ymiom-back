const mysql = require("mysql");
const pool = mysql.createPool({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  connectionLimit: 20,
  database: "KOLANOLGY",
});
module.exports = pool;
