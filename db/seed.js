const faker = require('faker');
const db = require('./schema.js');


const getRandomLengthFakerArray = (limit, fakerProp) => {
  var randomLength = Math.ceil(Math.random() * limit);
  var arrOfProps = [];
  for (var i = 0; i < randomLength; i++) {
    arrOfProps.push(fakerProp());
  }
  return arrOfProps;
};


const generateProducts = (quantity) => {

  const products = [];

  for (var i = 1; i <= quantity; i++) {
    // create data in the correct schema shape using faker (could i directly import the schema with mongodb to make it more DRY??)

    // S3 host images and add links here later

    const product = {
      'id': i,
      'product_id': faker.random.number(),
      // REPLACE ME!
      // 'image_url': faker.random.imageUrl(),
      'brand': faker.company.companyName(),
      'product_name': faker.commerce.productName(),
      // FIGURE OUT HOW TO DO THIS (COMPOSE A URL FROM SEPHORA AND PRODUCT ID?)
      // 'product_url': ,
      'short_detail': faker.lorem.sentence(),
      'sizes': getRandomLengthFakerArray(4, faker.commerce.productAdjective),
      'colors': [
        {
          'name': faker.commerce.color(),
          //REPLACE ME!
          // 'image_url': faker.image.abstract(),
          'description': faker.commerce.productAdjective()
        }
      ],
      'price': faker.commerce.price(),
      'loves': faker.random.number(),
      'stars': faker.random.number(),
      'review_count': faker.random.number(),
      'banners': getRandomLengthFakerArray(4, faker.lorem.word),
      'tags': getRandomLengthFakerArray(3, faker.lorem.word)
    };

    products.push(product);

  }

  console.log('SEEDED DB, here are some example products: ', JSON.stringify(products.slice(0, 5)));
  console.log('verifying length of fake data: ' + products.length + ' records');
  return products;
};

db.removeAllFromProducts().then(
  () => {
    db.insertAllIntoProducts(generateProducts(100));
  });
