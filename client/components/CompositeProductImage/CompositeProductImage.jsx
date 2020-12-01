import React, { useState } from 'react';
import ProductPhoto from '../ProductPhoto/ProductPhoto.jsx';
import QuickLookButton from '../QuickLookButton/QuickLookButton.jsx';
import QuickLookModal from '../QuickLookModal/QuickLookModal.jsx';
import CompositeProductImageStyles from './CompositeProductImageStyles.js';

const CompositeProductImage = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const [inHover, setHover] = useState(false);

  return (
    <CompositeProductImageStyles>
      <div className='compositeImage'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ProductPhoto
          size='preview'
          product={props.product}
        />
        {inHover && <button
          className='quickLookButton' onClick={() => setIsOpen(true)}
        >
          QUICK LOOK
        </button>}
        <QuickLookModal
        product={props.product}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
          setHover(false)
        }}></QuickLookModal>
      </div>
    </CompositeProductImageStyles>
  );

};

export default CompositeProductImage;