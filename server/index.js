const path = require('path');
const express = require('express');
const db = require('../db/schema.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let port = process.env.PORT || 4444;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
  }
  next();
});

app.use(express.static(path.join(__dirname, '../docs')));


app.get('/api/products/:id/similar', (req, res) => {
  const id = (req.params.id === undefined) ? 2 : req.params.id;
  db.getSuggestedProducts(id, 'similar')
  .then((products) => {
    res.status(200).send(products);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

// app.get('/api/products/:id/youmayalsolike', (req, res) => {
//   const id = (req.params.id === undefined) ? 2 : req.params.id;
//   db.getSuggestedProducts(id, 'you_may_like')
//     .then((products) => {
//       res.status(200).send(products);
//     }).catch((err) => {
//       res.status(404).send(err);
//     });
// });

app.get('/*/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'))
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});