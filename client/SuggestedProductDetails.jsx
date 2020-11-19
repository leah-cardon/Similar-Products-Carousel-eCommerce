import React from 'react';

const SuggestedProductDetails = (props) => {

  return (
    <div>
      suggested product details
      {props.details.brand}
      {props.details.product_name}
      {props.details.price}
      {props.details.stars}
    </div>
  );

};

export default SuggestedProductDetails;