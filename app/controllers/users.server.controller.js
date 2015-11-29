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

exports.read = function(req, res) {
    res.json(req.user)
};

exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, function(error, user){
        if (error) {
            return next(error);
        } else {
            req.user = user;
            next();
        }
    });
};