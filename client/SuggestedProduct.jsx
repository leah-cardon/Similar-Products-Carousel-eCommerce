import React from 'react';
import CompositeProductImage from './CompositeProductImage.jsx';
import SuggestedProductDetails from './SuggestedProductDetails.jsx';

const SuggestedProduct = (props) => {
  var details = {
    'brand': props.similarProduct.brand,
    'product_name': props.similarProduct.product_name,
    'price': props.similarProduct.price,
    // something for the review stars??
    'stars': props.similarProduct.stars
  };

  return (
    <div>
      'suggested product'
      <CompositeProductImage image={props.similarProduct.image_url} />
      <SuggestedProductDetails details={details} />
    </div>);
};



export default SuggestedProduct;