import React from 'react';
import NewBanner from './NewBanner.jsx';
import ProductPhoto from './ProductPhoto.jsx';

const CompositeProductImage = (props) => {

  return (
    <div>
      composite product image
      {/* conditional rendering of newbanner over the top of productphoto, if product is new */}
      <NewBanner />
      <ProductPhoto />
    </div>
  );

};

export default CompositeProductImage;