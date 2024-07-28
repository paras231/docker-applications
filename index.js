// src/index.js
const express = require('express');
const db = require('./db');
const dotenv =  require('dotenv');
const app = express();
const port = 3000;
dotenv.config();



app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.send(`Current time from the database: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
