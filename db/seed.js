const faker = require('faker');
const db = require('./schema.js');


// TEST
const randomName = faker.name.findName();
console.log(randomName);


const generateProducts = (quantity) => {

  const products = [];

  for (var i = 0; i < quantity; i++) {
    // create data in the correct schema shape using faker (could i directly import the schema with mongodb to make it more DRY??)
    const product = {
      'id': Number,
      'product_id': Number,
      'image_url': String,
      'brand': String,
      'product_name': String,
      'product_url': String,
      'short_detail': String,
      'sizes': [ String ],
      'colors': [
        {
          'name': String,
          'description': String,
          'image_url': String
        }
      ],
      'price': Number,
      'loves': Number,
      'stars': Number,
      'review_count': Number,
      'banners': [ String ],
      'tags': [ String ]
    };
    products.push(product);
  }

  return products;
};

db.insertAllProducts(generateProducts(100));