DROP DATABASE IF EXISTS budgetPlanner;

CREATE DATABASE budgetPlanner;

USE budgetPlanner;

-- DROP TABLE IF EXISTS expenseTotals;
--
-- CREATE TABLE expenseTotals (
--   category varchar(50),
--   amount int NOT NULL,
-- );
--
-- DROP TABLE IF EXISTS incomeTotals;
--
-- CREATE TABLE incomeTotals (
--   category varchar(50),
--   amount int NOT NULL,
-- );

CREATE TABLE expenses (
  id int NOT NULL AUTO_INCREMENT,
  amount int NOT NULL,
  category_id int,
  PRIMARY KEY (id)
);

CREATE TABLE expenseCategories (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE income (
  id int NOT NULL AUTO_INCREMENT,
  amount int NOT NULL,
  category_id int,
  PRIMARY KEY (ID)
);

CREATE TABLE incomeCategories (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY (ID)
);

CREATE TABLE idealValues (
  projectedIncome int NOT NULL,
  projectedBudget int NOT NULL,
  projectedSavings int NOT NULL
);

INSERT INTO idealValues (projectedIncome, projectedBudget, projectedSavings) VALUES (2500.00, 2000.00, 500.00);

INSERT INTO incomeCategories (name) VALUES ("Work");
INSERT INTO incomeCategories (name) VALUES ("Other");

INSERT INTO expenseCategories (name) VALUES ("Insurance");
INSERT INTO expenseCategories (name) VALUES ("Auto");
INSERT INTO expenseCategories (name) VALUES ("Fun");
INSERT INTO expenseCategories (name) VALUES ("Rent");
INSERT INTO expenseCategories (name) VALUES ("Food");


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
