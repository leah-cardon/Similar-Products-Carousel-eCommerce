import React from 'react';
import NewBanner from '../NewBanner/NewBanner.jsx';
import ProductPhotoStyles from './ProductPhotoStyles.js';

const ProductPhoto = (props) => {

  return (
    <div>
      <NewBanner new={props.product.new}
      size={props.size} />
      <img
      src={props.product.image_url}
      className={props.size + 'Photo'}
       ></img>
    </div>
  );

};

export default ProductPhoto;