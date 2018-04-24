'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  Username:{
    type: String,
    required: true
  },
  Destination:{
    type: String,
    required: true
  },
  StartingPoint:{
    type: String,
    required: true
  },
  Time: {
    type: Date
  }
});

module.exports = mongoose.model('History', HistorySchema);