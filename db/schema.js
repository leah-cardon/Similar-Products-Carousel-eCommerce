

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connection successful!');
});


// think about how to represent similar products
const productSchema = new mongoose.Schema({
  'id': { type: Number, unique: true },
  'product_id': { type: Number, unique: true },
  'image_url': String,
  'brand': String,
  'product_name': String,
  'product_url': String,
  'short_detail': String,
  'sizes': [String],
  'colors': [
    {
      'name': String,
      'description': String,
      'image_url': String
    }
  ],
  'price': Number,
  'loved': false,
  'loves': Number,
  'stars': Number,
  'review_count': Number,
  'average_rating': Number,
  'new': Boolean,
  'tags': [String],
  'similar': [Number],
  'you_may_like': [Number]
});

const Products = mongoose.model('Products', productSchema);

const getOneProductInfo = (id) => {
  return Products.find({ 'id': id }).exec();
};

const getSuggestedProducts = (productId, type) => {
  return Products.find({ 'id': [productId] })
    .then(currentProduct => {
      return Products.find({ id: { $in: currentProduct[0][type] } });
    })
    .catch((err) => {
      console.log('error in getSuggestedProducts: ', err);
    });
};

const insertAllIntoProducts = (data) => {
  return Products.insertMany(data);
};

const removeAllFromProducts = () => {
  return Products.deleteMany();
};


module.exports = {
  getSuggestedProducts,
  insertAllIntoProducts,
  removeAllFromProducts,
  getOneProductInfo
};