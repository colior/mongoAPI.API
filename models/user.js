'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  Username: {
    type: String,
    unique: true
  },
  Password:{
    type: String,
    required: true
  },
  Fname:{
    type: String,
    required: true
  },
  Lname:{
    type: String,
    required: true
  },
  Km:{
    type: Number,
    default: 0
  },
  Birthday: {
    type: Date
  },
  Ride: {
    type: Number,
    enum: ['BIKE', 'ELCTRIC_BIKE', 'ELECTRIC_SCOOTER', 'SEGWAY']
  },
  Home: {
    type: String
  },
  Work: {
    type: String
  },
  Favorites: [{
    Label: String,
    Address: String
  }]
});

module.exports = mongoose.model('Users', UserSchema);