import React from 'react';
import SuggestedProductsHeader from '../SuggestedProductsHeader/SuggestedProductsHeader.jsx';
import SuggestedProductsCarousel from '../SuggestedProductsCarousel/SuggestedProductsCarousel.jsx';
import SuggestedProductsFooter from '../SuggestedProductsFooter/SuggestedProductsFooter.jsx';
import SuggestedProductsContainerStyles from './SuggestedProductsContainerStyles.js';

const SuggestedProductsContainer = (props) => {
  return (
    <div className='body'>
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