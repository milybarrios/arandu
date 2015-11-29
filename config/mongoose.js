/**
 * Created by rodrigo on 29/11/15.
 */

var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect(config.db);

    return db;
};