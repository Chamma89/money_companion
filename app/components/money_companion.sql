CREATE DATABASE money_companion;

CREATE TABLE users (
	id Serial PRIMARY KEY,
	name VARCHAR(300),
    email VARCHAR(100),
    phone INTEGER
);