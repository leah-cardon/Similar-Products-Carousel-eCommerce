import React from 'react';
import NewBanner from './NewBanner.jsx';
import ProductPhoto from './ProductPhoto.jsx';
import QuickLookButton from './QuickLookButton.jsx';

const CompositeProductImage = (props) => {

  return (
    <div>
      <NewBanner new={props.product.new} />
      <ProductPhoto image={props.product.image_url} />
      <QuickLookButton />
    </div>
  );

};

export default CompositeProductImage;