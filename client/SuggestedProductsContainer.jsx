import React from 'react';
import SuggestedProductsHeader from './SuggestedProductsHeader.jsx';
import SuggestedProductsCarousel from './SuggestedProductsCarousel.jsx';
import SuggestedProductsFooter from './SuggestedProductsFooter.jsx';

const SuggestedProductsContainer = (props) => {
  return (
    <div>
      <SuggestedProductsHeader />
      <SuggestedProductsCarousel
        similarDisplayed={props.similarDisplayed}
        handleArrowClick={props.handleArrowClick}
        similarPage={props.similarPage}
      />
      <SuggestedProductsFooter />
    </div>
  );
};



export default SuggestedProductsContainer;