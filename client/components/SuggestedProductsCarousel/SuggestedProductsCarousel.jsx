import React from 'react';
import CarouselPageIndicator from '../CarouselPageIndicator/CarouselPageIndicator.jsx';
import SuggestedProduct from '../SuggestedProduct/SuggestedProduct.jsx';
import LeftArrow from '../LeftArrow/LeftArrow.jsx';
import RightArrow from '../RightArrow/RightArrow.jsx';
import SuggestedProductsCarouselStyles from './SuggestedProductsCarouselStyles.js';

const SuggestedProductsCarousel = (props) => {

  if (props.similarDisplayed.length === 0) {
    return null;
  }

  const suggestedProducts = props.similarDisplayed.map((item, index) => {
    return <SuggestedProduct similarProduct={item} key={index} />;
  });

  return (
    <div className='carouselAndPgIndicator'>
      <div className='suggestedProductsCarousel'>
        <div className='arrowContainer'>
          <LeftArrow
            handleArrowClick={props.handleArrowClick}
            similarPage={props.similarPage}
          />
        </div>
        {suggestedProducts}
        <div className='arrowContainer'>
          <RightArrow
            handleArrowClick={props.handleArrowClick}
            similarPage={props.similarPage}
          />
        </div>
      </div>
      <CarouselPageIndicator />
    </div>
  );

};

export default SuggestedProductsCarousel;