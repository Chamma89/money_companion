CREATE DATABASE money_companion;

CREATE TABLE savings (
	id Serial PRIMARY KEY,
	currentBalance INTEGER,
    income INTEGER,
    closingBalance INTEGER,
    spending INTEGER,
    saving INTEGER,
    month VARCHAR(15)
);