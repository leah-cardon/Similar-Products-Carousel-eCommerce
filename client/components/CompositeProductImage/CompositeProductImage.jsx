import React, { useState } from 'react';
import ProductPhoto from '../ProductPhoto/ProductPhoto.jsx';
import QuickLookButton from '../QuickLookButton/QuickLookButton.jsx';
import QuickLookModal from '../QuickLookModal/QuickLookModal.jsx';
import CompositeProductImageStyles from './CompositeProductImageStyles.js';

const CompositeProductImage = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <CompositeProductImageStyles>
      <div className='compositeImage'>
        <ProductPhoto
          size='preview'
          product={props.product}
        />
        <div>
          <button
            className='quickLookButton' onClick={() => setIsOpen(true)}
          >
            QUICK LOOK
          </button>
        </div>
        <QuickLookModal product={props.product} open={isOpen} onClose={() => setIsOpen(false)}></QuickLookModal>
      </div>
    </CompositeProductImageStyles>
  );

};

export default CompositeProductImage;