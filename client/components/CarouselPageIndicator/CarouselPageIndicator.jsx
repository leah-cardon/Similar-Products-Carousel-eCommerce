import React from 'react';
import CarouselPageIndicatorStyles from './CarouselPageIndicatorStyles.js';

const CarouselPageIndicator = (props) => {

  return (
    <CarouselPageIndicatorStyles>
      <div className='dotsContainer'>
        <button disabled className={props.similarPage === 1 ? 'dotButton currentDot' : 'dotButton'}>
        •
        </button>
        <button disabled className={props.similarPage === 2 ? 'dotButton currentDot' : 'dotButton'}>
        •
        </button>
        <button disabled className={props.similarPage === 3 ? 'dotButton currentDot' : 'dotButton'}>
        •
        </button>
      </div>
    </CarouselPageIndicatorStyles>
  );
};

export default CarouselPageIndicator;