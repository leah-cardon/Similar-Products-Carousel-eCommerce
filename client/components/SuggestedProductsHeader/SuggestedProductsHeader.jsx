import React from 'react';
import SuggestedProductsHeaderStyles from './SuggestedProductsHeaderStyles.js';

const SuggestedProductsHeader = (props) => {

  return (
    <SuggestedProductsHeaderStyles>
      <div className='title'>
          Similar Products
      </div>
    </SuggestedProductsHeaderStyles>
  );

};

export default SuggestedProductsHeader;