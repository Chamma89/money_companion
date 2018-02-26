var pg = require('pg')
const pgp = require('pg-promise')();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'money_companion'
};

const db = pgp(cn);

const express = require('express')
const app = express()


db.one('INSERT INTO users(id, name) VALUES($1, $2) RETURNING id', ['1', 'Fouad'])
    .then(data => {
        console.log(data.id); // print new user id;
    })
    .catch(error => {
        console.log('ERROR:', error); // print error;
    });