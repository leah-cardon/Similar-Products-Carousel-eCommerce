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

const getRandomImage = (imageType) => {

  const imageURLs = {
    'productImage': [
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/1.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/2.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/3.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/4.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/5.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/6.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/7.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/8.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/9.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/10.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/11.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/12.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/13.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/14.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/15.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/16.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/17.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/18.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/19.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/20.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/21.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/22.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/23.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/24.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/25.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/26.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/27.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/28.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/29.webp',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/30.webp'
    ],
    'colorSwatch': [
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/a.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/b.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/c.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/d.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/e.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/f.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/g.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/h.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/i.jpg',
      'https://fec-sephora-images.s3-us-west-1.amazonaws.com/j.jpg'
    ]
  };

  var randomIndex = Math.floor(Math.random() * imageURLs[imageType].length - 1);
  return imageURLs[imageType][randomIndex];
};

var generateRandomLengthColorArray = (limit) => {
  var randomLength = Math.ceil(Math.random() * limit);
  var arrOfColors = [];
  for (var i = 0; i < randomLength; i++) {
    arrOfColors.push(
      {
        'name': faker.commerce.color(),
        'image_url': getRandomImage('colorSwatch'),
        'description': faker.commerce.productAdjective()
      }
    );
  }
  return arrOfColors;
};

const get15RandomIds = () => {
  const ids = [];
  while (ids.length <= 15) {
    ids.push(Math.ceil(Math.random() * 100));
  }
  return ids;
};

const generateProducts = (quantity) => {
  const products = [];
  let i = 0;

  while (products.length < quantity) {
    i++;
    const product = {
      'id': i,
      'product_id': faker.random.number(),
      'image_url': getRandomImage('productImage'),
      'brand': faker.company.companyName(),
      'product_name': faker.commerce.productName(),
      'short_detail': faker.lorem.sentence(),
      'sizes': getRandomLengthFakerArray(4, faker.commerce.productAdjective),
      'colors': generateRandomLengthColorArray(5),
      'price': Math.round(Math.random() * 100),
      'loved': false,
      'loves': faker.random.number(),
      'stars': faker.random.number(),
      'review_count': Math.round(Math.random() * 300),
      'average_rating': Math.round(Math.random() * 50) / 10,
      'new': faker.random.boolean(),
      'tags': getRandomLengthFakerArray(3, faker.lorem.word),
      'similar': get15RandomIds(),
      'you_may_like': get15RandomIds()
    };
    products.push(product);
  }

  return products;
};

db.removeAllFromProducts().then(
  () => {
    db.insertAllIntoProducts(generateProducts(100));
  });

console.log('database seeding complete!');
