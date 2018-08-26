require("dotenv").config();
let keys = require("../keys.js");
let sqlKeys = keys.sql;
let mysql = require("mysql");

// Set up our connection information
let connection;

if (process.env.JAWSDB_URL) {
    console.log('DEBUG: JAWSDB detected.');
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log('DEBUG: no JAWSDB');
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "6G]A4xu'uT>&!YKU",
        database: "burgers_db"
    });
};

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;