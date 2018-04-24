var express = require('express'),
app = express(),
port = process.env.PORT || 8080;
mongoose = require('mongoose'),
User = require('./models/user'),
History = require('./models/history'),
Report = require('./models/report'),
bodyParser = require('body-parser');

// mongoDB instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Cyclist01:K3d-LS3-s8P-4Re@cyclist-shard-00-00-jomwu.mongodb.net:27017,cyclist-shard-00-01-jomwu.mongodb.net:27017,cyclist-shard-00-02-jomwu.mongodb.net:27017/test?ssl=true&replicaSet=Cyclist-shard-0&authSource=admin'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);