

const express = require('express');
const app = express();
const port = 4444;

// serve static files with express

const database = require('../db/schema.js');


// '/api/products/:id/similar'
app.get('/api/products/similar', (req, res) => {

  // database.products.find().exec().then();
  res.send('Hello World!');
});








app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});