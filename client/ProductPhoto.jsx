import React from 'react';

const ProductPhoto = (props) => {

  return (
    <div>
      <img src={props.image} className='productPhoto'></img>
    </div>
  );

};

export default ProductPhoto;