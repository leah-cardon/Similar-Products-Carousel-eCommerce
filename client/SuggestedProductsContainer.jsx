import React from 'react';
import SuggestedProductsHeader from './SuggestedProductsHeader.jsx';
import SuggestedProductsCarousel from './SuggestedProductsCarousel.jsx';
import SuggestedProductsFooter from './SuggestedProductsFooter.jsx';

const SuggestedProductsContainer = (props) => {
  return (
    <div>
      <SuggestedProductsHeader />
      <SuggestedProductsCarousel similarProducts={props.similarProducts} />
      <SuggestedProductsFooter />
    </div>
  );
};



export default SuggestedProductsContainer;