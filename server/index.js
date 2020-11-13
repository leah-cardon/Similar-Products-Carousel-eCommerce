const express = require('express');
const db = require('../db/schema.js');
const mongoose = require('mongoose');
const app = express();
let port = 4444;

// serve static files with express



// '/api/products/:id/similar'
app.get('/api/products/similar', (req, res) => {
  db.getAllProducts().then((products) => {
    res.send(products);
  }
  ).catch((err) => {
    // set err headers???
    res.send(err);
  });
});








app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});