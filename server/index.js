const express = require('express');
const db = require('../db/schema.js');
const mongoose = require('mongoose');
const app = express();
let port = 4444;

// serve static files with express



// gets all info for similar products carousel from that id's related products
// change to '/api/products/:id/similar'
app.get('/api/products/similar', (req, res) => {
  db.getAllFromProducts().then((products) => {
    res.send(products);
  }
  ).catch((err) => {
    res.status(404).send(err);
  });
});

//gets all info needed to display in the quicklook popup modal
// GET /api/:id/quicklook
app.get('/api/:id/quicklook', (req, res) => {
  db.getOneProductInfo(req.params.id).then((product) => {
    res.send(product);
  }
  ).catch((err) => {
    res.status(404).send(err);
  });
});


// Parameters

// product_id: integer
// * The ID is used to determine whether the current listing is already in the user’s favorites 

// user_id: integer (optional)
// * Can also be implemented with any other unique attribute instead of user_id, e.g. username, email 
// If no user_id was passed, favorite is null for all products.


// Returns
// All information about the clicked product that is needed to display in the Quick Look modal.

// [
//   {
//     "product_id": "1925965",
//     "image_url": "http://some.fake.url/photo1.png",
//     "brand": "FENTY BEAUTY by Rihanna",
//     "product_name": "Gloss Bomb Universal Lip Luminizer",
//     "product_url": "that product's page url",
//     "short_detail": "An ultimate, gotta-have-it lip gloss with explosive shine that feels as good as it looks.",
//     "sizes": [
// "0.30 oz/9 mL"
// 	     ],
//     "colors": [
// 	{
// 	    "name": "Fenty Glow",
// 	    "description": "shimmering rose nude",
// 	    "image_url": "some_url"
// 	},
// 	{
// 	    "name": "Glass Slipper",
// 	    "description": "clear",
// 	    "image_url": "some_url"
// }
//     ],
//     "price": "19",
//     "loved": "true",
//     "loves": "656400",
//     "stars": "4.3",
//     "review_count": "10900",
//     "tags": ["exclusive", "new", "sold out", "limited edition", "online only"]
//   }
// ]

// Status codes
// * 200: Successfully retrieved info about product for Quick Look
// * 404: Unsuccessful attempt due to missing resource 


// Add product to user's "Loves" list (favorites)

// POST /api/shopping_list
// (the loves list goes to /shopping_list on actual Sephora.com)

// Parameters

// product_id: integer
// * Required 
// * The id of the "loved" product

// user_id: integer
// * Required
// * The id of the current user, to add to their "Loves" list


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