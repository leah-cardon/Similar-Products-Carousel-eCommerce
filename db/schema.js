

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
  'id': {type: Number, unique: true},
  'product_id': {type: Number, unique: true},
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
  'loved': Boolean,
  'loves': Number,
  'stars': Number,
  'review_count': Number,
  'average_rating': Number,
  'banners': [ String ],
  'tags': [ String ],
  'similar': [ Number ],
  'you_may_like': [ Number ]
});

// Users collection

// [
//   {
//     'user_id': Number,
//     'loves': [ Number ]
//   }
// ]



const Products = mongoose.model('Products', productSchema);

const getOneProductInfo = (id) => {
  return Products.find({'id': id}).exec();
};

const getSuggestedProducts = (productId, type) => {
  const suggestedIds = getOneProductInfo(productId);
  console.log('productinfo: ', suggestedIds);
  return Products.find()
    .where('id')
    .in(productId.type)
    .exec();
};

const insertAllIntoProducts = (data) => {
  return Products.insertMany(data);
};

const removeAllFromProducts = () => {
  return Products.deleteMany();
};


// const addToLoves = (product) => {

// };


module.exports = {
  getSuggestedProducts,
  insertAllIntoProducts,
  removeAllFromProducts,
  getOneProductInfo
};