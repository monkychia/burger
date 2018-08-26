let orm = require("../config/orm.js");

let burgers = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(newBurger, eaten, callback) {
        orm.insertOne(newBurger, eaten, function(res) {
            callback(res);
        });
    },

    updateOne: function(id, callback) {
        orm.updateOne(id, function(res) {
            callback(res);
        })
    }

}; 
 
module.exports = burgers;

