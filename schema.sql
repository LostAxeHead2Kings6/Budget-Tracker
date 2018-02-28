DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

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


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
