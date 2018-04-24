'use strict';
var mongoose = require('mongoose'),
  History = mongoose.model('History');

  exports.getAllHistory = function(req, res){
  	History.find({}, function(err, history){
  		if(err)
  			res.send(err);
  		res.json(history);
  	}).select({ "Username": 1, "Destination": 1, "StartingPoint": 1, "Time": 1});
  };

exports.newHistory = function(req, res){
	var new_history = new History(req.body);
  	new_history.save(function(err, history) {
    	if (err)
      		res.send(err);
    res.json(history);
  });
};

exports.getHistoryByUsername = function(req, res){
    History.find({Username: req.params.Username}, function(err, history){
      if(err)
        res.send(err);
      res.json(history);
    }).select({ "Username": 1, "Destination": 1, "StartingPoint": 1, "Time": 1});
  };

  exports.getHistory = function(req, res){
    History.find({_id: req.params.Id}, function(err, history){
      if(err)
        res.send(err);
      res.json(history);
    }).select({ "Username": 1, "Destination": 1, "StartingPoint": 1, "Time": 1});
  };

exports.updateHistory = function(req, res){
	History.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, history) {
    	if (err)
      		res.send(err);
    res.json(history);
  });
};

exports.deleteHistory = function(req, res){
  History.remove({_id: req.params.Id}, function(err, history) {
      if (err)
          res.send(err);
    res.json({ message: 'History successfully deleted' });
  });
};

exports.deleteHistoryByUsername = function(req, res){
  History.remove({Username: req.params.Username}, function(err, history) {
      if (err)
          res.send(err);
    res.json({ message: 'History successfully deleted' });
  });
};