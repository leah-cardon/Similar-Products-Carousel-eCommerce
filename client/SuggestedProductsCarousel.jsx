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
  if (props.similarProducts.length === 0) {
    return null;
  }


  return (
    <div className='suggestedProductsCarousel'>
      {/* display only 5 at a time depending on what page you're on (page indicator state value) */}
      {/* {suggestedProducts} (remove hardcoding) */}
      <SuggestedProduct similarProduct={props.similarProducts[0]} />
      <SuggestedProduct similarProduct={props.similarProducts[1]} />
      <SuggestedProduct similarProduct={props.similarProducts[2]} />
      <SuggestedProduct similarProduct={props.similarProducts[3]} />
      <SuggestedProduct similarProduct={props.similarProducts[4]} />
      <CarouselPageIndicator />
    </div>
  );

};

export default SuggestedProductsCarousel;