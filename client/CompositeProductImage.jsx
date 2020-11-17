import React from 'react';
import NewBanner from './NewBanner.jsx';
import Banner from './Banner.jsx';
import ProductPhoto from './ProductPhoto.jsx';

const CompositeProductImage = (props) => {

  return (
    <div>
      composite product image
      {/* conditional rendering of newbanner and banner over the top of productphoto */}
      <NewBanner />
      <ProductPhoto />
      <Banner />
    </div>
  );

};

export default CompositeProductImage;