// app.js
require ('dotenv').config();
// or
// import dotenv from 'dotenv';
// dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


// Root route
app.get('/', (req, res) => {
  res.send('Hello nodejs\n');
});

// /name route
var USER = process.env.USER;
app.get('/name', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Hello ${USER}! Nice to meet you\n`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

