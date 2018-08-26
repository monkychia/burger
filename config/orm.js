let connection = require("./connection.js");

let orm = {
    selectAll: function(callback) {
        let queryString = "SELECT * FROM burgers";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                console.log(err);
            }
            callback(result);
        });
    },

    insertOne: function(newBurger, eaten, callback) {
        let queryString = "INSERT INTO burgers (burger_name, devoured, createdAt) VALUES (? ,?, NOW());";
        connection.query(queryString, [newBurger, eaten], function(err, result) {
            if (err) {
                console.log("Err: ", err);
            } else {
                console.log(result);
                // return result;
                callback(result);
            }
        })
    },

    updateOne: function(id, callback) {
        console.log('orm id ', id);

        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function(err, result) {
            callback(result);
        })
    }
}

module.exports = orm;