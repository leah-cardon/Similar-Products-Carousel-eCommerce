import React from 'react';
import CompositeProductImage from './CompositeProductImage.jsx';
import SuggestedProductDetails from './SuggestedProductDetails.jsx';

const SuggestedProduct = (props) => {

  return (
    <div>
      <CompositeProductImage product={props.similarProduct} />
      <SuggestedProductDetails product={props.similarProduct} />
    </div>);

};



export default SuggestedProduct;