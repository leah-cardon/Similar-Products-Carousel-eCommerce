import React, { useState } from 'react';
import ProductPhoto from '../ProductPhoto/ProductPhoto.jsx';
import QuickLookButton from '../QuickLookButton/QuickLookButton.jsx';
import QuickLookModal from '../QuickLookModal/QuickLookModal.jsx';
import CompositeProductImageStyles from './CompositeProductImageStyles.js';

const CompositeProductImage = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='compositeImage'>
      <ProductPhoto
        size='preview'
        product={props.product}
       />
      <button
        className='quickLook' onClick={() => setIsOpen(true)}
        >QUICK LOOK</button>
      <QuickLookModal product={props.product} open={isOpen} onClose={() => setIsOpen(false)}></QuickLookModal>
    </div>
  );

};

export default CompositeProductImage;