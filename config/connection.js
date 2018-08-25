require("dotenv").config();
let keys = require("../keys.js");
let sqlKeys = keys.sql;
let mysql = require("mysql");

// Set up our connection information
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: sqlKeys.dbPassword,
        database: "burgers_db"
    });
};

// if (process.env.NODE_ENV === "development") {
//     connection  = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: sqlKeys.dbPassword,
//         database: "burgers_db"
//       });
// } else {
//     connection = mysql.createConnection()
// }
    
//     = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: sqlKeys.dbPassword,
//   database: "burgers_db"
// });

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