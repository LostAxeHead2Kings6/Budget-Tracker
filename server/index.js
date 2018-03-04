var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/ideals', function(req, res) {
  items.getIdeals(function(results) {
    res.status(201).send(results);
  });
});

app.post('/income', function(req, res) {
  console.log(req.body);
  items.addIncome(parseInt(req.body.amount), req.body.category, function(error, results) {
    res.end();
  });
});

app.post('/expenses', function(req, res) {
  console.log(req.body);
  items.addExpense(parseInt(req.body.amount), req.body.category, function(error, results) {
    res.end();
  });
});

app.get('/income', function(req, res) {
  items.createIncomeTotals(function() {
    items.getIncomeTotals(function(results) {
      console.log(results);
      res.status(201).send(results);
    });
  });
});

app.get('/expenses', function (req, res) {
  items.createExpenseTotals(function() {
    items.getExpenseTotals(function(results) {
      console.log(results);
      res.status(201).send(results);
    });
  });
});

app.get('/actuals', function(req, res) {
  items.createActualTotals(function() {
    items.getActuals(function(results) {
      console.log(results);
      res.status(201).send(results);
    });
  });
});

app.listen(8080, function() {
  console.log('listening on port 8080!');
});
