import React from 'react';
import NewBanner from './NewBanner.jsx';
import ProductPhoto from './ProductPhoto.jsx';

const CompositeProductImage = (props) => {

  return (
    <div>
      <NewBanner new={props.product.new} />
      <ProductPhoto image={props.product.image_url} />
    </div>
  );

};

export default CompositeProductImage;