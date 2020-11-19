const path = require('path');
const express = require('express');
const db = require('../db/schema.js');
const mongoose = require('mongoose');
const app = express();
let port = 4444;

app.use(express.static(path.join(__dirname, '/../public')));

// gets all info for similar products carousel from that id's related products
// change to '/api/products/:id/similar' and refactor db to have similar linked to each id, and also add get all similar function or refactor getAllFromProducts to take params and get similar instead of the entire db (only 15 products at a time)
app.get('/api/products/similar', (req, res) => {
  db.getAllFromProducts()
    .then((products) => {
      res.send(products);
    }).catch((err) => {
      res.status(404).send(err);
    });
});

//gets all info needed to display in the quicklook popup modal
app.get('/api/:id/quicklook', (req, res) => {
  db.getOneProductInfo(req.params.id)
    .then((product) => {
      res.send(product);
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











app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});