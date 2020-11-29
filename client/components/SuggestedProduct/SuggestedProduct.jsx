import React from 'react';
import CompositeProductImage from '../CompositeProductImage/CompositeProductImage.jsx';
import SuggestedProductDetails from '../SuggestedProductDetails/SuggestedProductDetails.jsx';
import SuggestedProductStyles from './SuggestedProductStyles.js';

const SuggestedProduct = (props) => {

  return (
    <div className='productContainer'>
      <CompositeProductImage product={props.similarProduct} />
      <SuggestedProductDetails product={props.similarProduct} />
    </div>);

};



export default SuggestedProduct;