import React from 'react';
import SuggestedProductDetailsStyles from './SuggestedProductDetailsStyles.js';

const SuggestedProductDetails = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return (
    <SuggestedProductDetailsStyles>
      <div className='productDetails'>
        <div>
          <p className='brandName centeredText'>
            {props.product.brand}
          </p>
          <p className='centeredText'>
            {props.product.product_name}
          </p>
        </div>
        <div className='boldText centeredText'>
          {formatter.format(props.product.price)}
        </div>
        <div className="star-ratings-css">
          <div
            className="star-ratings-css-top"
            style={{width: (props.product.average_rating / 5 * 100)+ '%'}}
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div
            className="star-ratings-css-bottom"
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
          <span>
            {props.product.review_count}
          </span>
      </div>
    </SuggestedProductDetailsStyles>
  );

};

export default SuggestedProductDetails;