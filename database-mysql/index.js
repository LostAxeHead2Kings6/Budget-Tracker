var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'budgetPlanner'
});

var addExpense = function(amount, category, callback) {
  connection.query(`INSERT INTO expenses (amount, category_id) VALUES (${amount}, (SELECT id from expenseCategories WHERE name = '${category}'))`, function(err, results) {
    if (err) {
      console.log(err, 'There was an error')
    } else {
      callback(results);
    }
  });
};

var addIncome = function(amount, category, callback) {
  connection.query(`INSERT INTO income (amount, category_id) VALUES (${amount}, (SELECT id from incomeCategories WHERE name = '${category}'))`, function(err, results) {
    if (err) {
      console.log(err, 'There was an error');
    } else {
      callback(results);
    }
  });
};

var createExpenseTotals = function(callback) {
  connection.query(`DROP TABLE IF EXISTS expenseTotals;`, (err, results) => {
    if (err) {
      console.log(err, "there's an error 1");
    } else {
      connection.query('CREATE TABLE expenseTotals (category varchar(50), amount int);', (err, results) => {
        if (err) {
          console.log(err, "there's an error 2");
        } else {
          connection.query('INSERT INTO expenseTotals (category, amount) VALUES ("Auto", (SELECT SUM(amount) FROM expenses WHERE category_id=2))', (err, results) => {
            if (err) {
              console.log(err, "there's an error 3");
            } else {
              connection.query('INSERT INTO expenseTotals (category, amount) VALUES ("Food", (SELECT SUM(amount) FROM expenses WHERE category_id=5))', (err, results) => {
                if (err) {
                  console.log(err, "there's an error 4");
                } else {
                  connection.query('INSERT INTO expenseTotals (category, amount) VALUES ("Fun", (SELECT SUM(amount) FROM expenses WHERE category_id=3))', (err, results) => {
                    if (err) {
                      console.log(err, "There's an error 5");
                    } else {
                      connection.query('INSERT INTO expenseTotals (category, amount) VALUES ("Insurance", (SELECT SUM(amount) FROM expenses WHERE category_id=1))', (err, results) => {
                        if (err) {
                          console.log(err, "There's an error 6");
                        } else {
                          connection.query('INSERT INTO expenseTotals (category, amount) VALUES ("Rent", (SELECT SUM(amount) FROM expenses WHERE category_id=4))', (err, results) => {
                            if (err) {
                              console.log(err, "There's an error 7");
                            } else {
                              console.log("The expense Totals table has been created!");
                              callback();
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

var createIncomeTotals = function(callback) {
  connection.query(`DROP TABLE IF EXISTS incomeTotals;`, (err, results) => {
    if (err) {
      console.log(err, "there's an error 1");
    } else {
      connection.query('CREATE TABLE incomeTotals (category varchar(50), amount int);', (err, results) => {
        if (err) {
          console.log(err, "there's an error 2");
        } else {
          connection.query('INSERT INTO incomeTotals (category, amount) VALUES ("Work", (SELECT SUM(amount) FROM income WHERE category_id=1))', (err, results) => {
            if (err) {
              console.log(err, "there's an error 3");
            } else {
              connection.query('INSERT INTO incomeTotals (category, amount) VALUES ("Other", (SELECT SUM(amount) FROM income WHERE category_id=2))', (err, results) => {
                if (err) {
                  console.log(err, "there's an error 4");
                } else {
                  console.log("The Income Total table has been created!");
                  callback();
                }
              });
            }
          });
        }
      });
    }
  });
};


var getIdeals = function(callback) {
  connection.query(`SELECT * from idealValues;`, function(err, results) {
    if (err) {
      console.log(err, 'There was an error');
    } else {
      callback(results);
    }
  });
};

var getIncomeTotals = function(callback) {
  connection.query(`SELECT * FROM incomeTotals;`, function(err, results) {
    if (err) {
      console.log(err, 'There was an error');
    } else {
      callback(results);
    }
  });
};

var getExpenseTotals = function(callback) {
  connection.query(`SELECT * FROM expenseTotals;`, function(err, results) {
    if (err) {
      console.log(err, 'There was an error');
    } else {
      callback(results);
    }
  });
};

module.exports.getExpenseTotals = getExpenseTotals;
module.exports.getIncomeTotals = getIncomeTotals;
module.exports.createIncomeTotals = createIncomeTotals;
module.exports.createExpenseTotals = createExpenseTotals;
module.exports.addExpense = addExpense;
module.exports.addIncome = addIncome;
module.exports.getIdeals = getIdeals;
