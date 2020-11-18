import React from 'react';
import CarouselPageIndicator from './CarouselPageIndicator.jsx';
import SuggestedProduct from './SuggestedProduct.jsx';

const SuggestedProductsCarousel = (props) => {

  // var suggestedProducts = /*stateproductdata*/.map((item) => {
  //   <
  //     SuggestedProduct
  //     data={item}
  //     key={index}
  //   />
  // });

  return (
    <div>
      SuggestedProductsCarousel
      {/* display only 5 at a time depending on what page you're on (page indicator state value) */}
      {/* {suggestedProducts} */}
      <SuggestedProduct />
      <CarouselPageIndicator />
    </div>
  );

};

export default SuggestedProductsCarousel;