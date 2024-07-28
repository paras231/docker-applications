// src/db.js
const { Client } = require('pg');

const client = new Client({
  host: process.env.DATABASE_HOST ,
  port: 5432,
  user: process.env.DATABASE_USER ,
  password: process.env.DATABASE_PASSWORD ,
  database: process.env.DATABASE_NAME ,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;


