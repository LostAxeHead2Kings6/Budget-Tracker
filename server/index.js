var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/income', function (req, res) {
  console.log("received");
  res.status(201).send();
});

app.post('/expenses', function(req, res) {
  res.status(201).send();
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
