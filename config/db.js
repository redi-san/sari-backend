const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  connectTimeout: 10000, // 10 seconds max
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection failed:", err.message);
    // do NOT throw; let the server continue
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

module.exports = db;
