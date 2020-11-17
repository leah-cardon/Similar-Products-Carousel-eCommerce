import React from 'react';
import LineBreak from './LineBreak.jsx';

const SuggestedProductsHeader = (props) => {

  return (
    <div>
      <LineBreak />
      <span>
        Similar Products
      </span>
      <span>
        <a href="http://www.google.com">View More Clean Beauty</a>
      </span>
    </div>
  );

};

export default SuggestedProductsHeader;