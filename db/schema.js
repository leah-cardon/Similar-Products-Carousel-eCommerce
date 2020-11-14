

const mongoose = require('mongoose');
// name db sethora-similar-products
mongoose.connect(
  'mongodb://localhost/sethora-similar',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connection successful!');
});


// think about how to represent similar products
const productSchema = new mongoose.Schema({
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
});

// Users collection

// [
//   {
//     'user_id': Number,
//     'loves': [ Number ]
//   }
// ]



const Products = mongoose.model('Products', productSchema);

const getAllFromProducts = () => {
  return Products.find().exec();
};

const insertAllIntoProducts = (data) => {
  Products.insertMany(data);
};

const removeAllFromProducts = () => {
  Products.deleteMany();
};

module.exports = {
  getAllFromProducts,
  insertAllIntoProducts,
  removeAllFromProducts
};