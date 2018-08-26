let orm = require("../config/orm.js");

let burgers = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            console.log('burger.js - selectALL - res ', res);
            callback(res);
        });
    },

    insertOne: function(newBurger, eaten, callback) {
        orm.insertOne(newBurger, eaten, function(res) {
            console.log('burger.js - insertOne - res ', res);
            callback(res);
        });
    },

    updateOne: function(id) {
        orm.updateOne(id, function(res) {
            console.log('burger.js - updateOne - res ', res);
            callback(res);
        })
    }

}; 
 
module.exports = burgers;

