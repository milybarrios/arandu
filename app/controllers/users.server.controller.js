/**
 * Created by rodrigo on 29/11/15.
 */

var User = require('mongoose').model('User');

exports.create = function (req, res, next){
    var user = new User(req.body);

    user.save(function(error){
        if (error){
            return next(error);
        } else {
            res.json(user);
        }
    });
};

exports.list = function(req, res, next){
    User.find({}, function (error, users){
        if (error) {
            return next(error);
        } else {
            res.json(users);
        }
    })
};