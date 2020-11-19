import React from 'react';

const SuggestedProductDetails = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return (
    <div className='productDetails'>
      <div>
        <p class='brandName'>
          {props.details.brand}
        </p>
        <p>
          {props.details.product_name}
        </p>
      </div>
      <div className='price'>
        {formatter.format(props.details.price)}
      </div>
      <div>
        {props.details.stars}
        {props.details.reviews}
      </div>
    </div>
  );

};

export default SuggestedProductDetails;