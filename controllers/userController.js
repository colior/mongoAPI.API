'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('Users');

  exports.getAllUsers = function(req, res){
  	User.find({}, function(err, user){
  		if(err)
  			res.send(err);
  		res.json(user);
  	}).select({"_id": 0, "__v": 0});
  };

exports.newUser = function(req, res){
	var new_user = new User(req.body);
  	new_user.save(function(err, user) {
    	if (err)
      		res.send(err);
    res.json(user);
  });
};

exports.getUser = function(req, res){
	User.find({Username: req.params.Username}, function(err, user) {
    	if (err)
      		res.send(err);
    res.json(user);
  }).select({"_id": 0, "__v": 0});
};

exports.updateUser = function(req, res){
	User.findOneAndUpdate({Username: req.params.Username}, req.body, {new: true}, function(err, user) {
    	if (err)
      		res.send(err);
    res.json(user);
  }).select({"_id": 0, "__v": 0});
};

exports.deleteUser = function(req, res){
	User.remove({Username: req.params.Username}, function(err, user) {
    	if (err)
      		res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};