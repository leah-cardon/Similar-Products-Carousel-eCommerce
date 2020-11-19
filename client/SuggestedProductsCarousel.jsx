import React from 'react';
import CarouselPageIndicator from './CarouselPageIndicator.jsx';
import SuggestedProduct from './SuggestedProduct.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';

const SuggestedProductsCarousel = (props) => {

  if (props.similarDisplayed.length === 0) {
    return null;
  }

  const suggestedProducts = props.similarDisplayed.map((item, index) => {
    return <SuggestedProduct similarProduct={item} key={index} />;
  });

  return (
    <div className='suggestedProductsCarousel'>
      <LeftArrow
        handleArrowClick={props.handleArrowClick}
        similarPage={props.similarPage}
      />
      {suggestedProducts}
      <RightArrow
        handleArrowClick={props.handleArrowClick}
        similarPage={props.similarPage}
      />
      <CarouselPageIndicator />
    </div>
  );

};

export default SuggestedProductsCarousel;