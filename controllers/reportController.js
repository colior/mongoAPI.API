'use strict';
var mongoose = require('mongoose'),
  Reports = mongoose.model('Reports');

  exports.getAllReports = function(req, res){
  	Reports.find({}, function(err, report){
  		if(err)
  			res.send(err);
  		res.json(report);
  	}).select({ "Username": 1, "Destination": 1, "Time": 1, "Description": 1, "IsActive": 1});
  };

exports.newReport = function(req, res){
	var new_report = new Report(req.body);
  	new_report.save(function(err, report) {
    	if (err)
      		res.send(err);
    res.json(report);
  });
};

exports.getReportsByUsername = function(req, res){
    Reports.find({Username: req.params.Username}, function(err, report){
      if(err)
        res.send(err);
      res.json(report);
    }).select({ "Username": 1, "Destination": 1, "Time": 1, "Description": 1, "IsActive": 1});
  };

  exports.getReport = function(req, res){
    Reports.find({_id: req.params.Id}, function(err, report){
      if(err)
        res.send(err);
      res.json(report);
    }).select({ "Username": 1, "Destination": 1, "Time": 1, "Description": 1, "IsActive": 1});
  };

exports.updateReport = function(req, res){
	Reports.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, report) {
    	if (err)
      		res.send(err);
    res.json(report);
  });
};

exports.deleteReport = function(req, res){
  Reports.remove({_id: req.params.Id}, function(err, report) {
      if (err)
          res.send(err);
    res.json({ message: 'Report successfully deleted' });
  });
};

exports.deleteReportsByUsername = function(req, res){
  Reports.remove({Username: req.params.Username}, function(err, report) {
      if (err)
          res.send(err);
    res.json({ message: 'Report successfully deleted' });
  });
};