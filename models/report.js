'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
  Username:{
    type: String,
    require: true
  },
  Time: {
    type: Date
  },
  Description: {
    type: Number,
    enum: ['BLOCKED', 'POLICE', 'DISRUPTION', 'UNKNOWN_DANGER']
  },
  IsActive: {
    type: Boolean
  }
});

module.exports = mongoose.model('Reports', ReportSchema);