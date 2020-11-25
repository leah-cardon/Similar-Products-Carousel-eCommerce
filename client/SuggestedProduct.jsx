import React from 'react';
import CompositeProductImage from './CompositeProductImage.jsx';
import SuggestedProductDetails from './SuggestedProductDetails.jsx';

const SuggestedProduct = (props) => {
  var details = {
    'brand': props.similarProduct.brand,
    'product_name': props.similarProduct.product_name,
    'price': props.similarProduct.price,
    'stars': props.similarProduct.average_rating,
    'reviews': props.similarProduct.review_count
  };

  return (
    <div>
      <CompositeProductImage product={props.similarProduct} />
      <SuggestedProductDetails details={details} />
    </div>);
};



export default SuggestedProduct;