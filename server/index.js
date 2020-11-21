const path = require('path');
const express = require('express');
const db = require('../db/schema.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let port = 4444;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public')));


app.get('/api/products/:id/similar', (req, res) => {
  db.getSuggestedProducts(req.params.id, 'similar')
    .then((products) => {
      res.send(products);
    }).catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/api/products/:id/youmayalsolike', (req, res) => {
  db.getSuggestedProducts(req.params.id, 'you_may_like')
    .then((products) => {
      res.send(products);
    }).catch((err) => {
      res.status(404).send(err);
    });
});



// Add product to user's "Loves" list (favorites) (disregard complexity of users for now - just add a 'shopping list' table and join with products table?)
// app.post('/api/shopping_list', (req, res) => {
//   db.addToLoves(//req.body.id)
//     .then((product) => {
//       res.send(product);
//     }).catch((err) => {
//       res.status(404).send(err);
//     });
// });

// Parameters

// id of product: integer
// * Required 
// * The id of the "loved" product


// Returns
// Nothing

// Status codes
// * 201: Product successfully inserted into user's "Loves" list
// * 400: Unsuccessful attempt at inserting new product into "Loves" list


// Add product to user's cart

// POST /api/basket

// Parameters

// product_id: integer
// * Required 
// * The id of the "loved" product

// size: string
// * Required only if there are multiple sizes
// * The desired size of product (only applies to some products)

// color: string
// * Required only if there are multiple colors
// * The desired color of product (only applies to some products)

// user_id: integer
// * Optional
// * The id of the current user, in order to save product to their cart indefinitely if they leave the session


// Returns
// Nothing

// Status codes
// * 201: Product successfully added to user's cart
// * 400: Unsuccessful attempt at adding product to cart


module.exports = app;