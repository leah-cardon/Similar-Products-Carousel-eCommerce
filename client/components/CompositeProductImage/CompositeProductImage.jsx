import React, { useState } from 'react';
import ProductPhoto from '../ProductPhoto/ProductPhoto.jsx';
import QuickLookButton from '../QuickLookButton/QuickLookButton.jsx';
import QuickLookModal from '../QuickLookModal/QuickLookModal.jsx';
import CompositeProductImageStyles from './CompositeProductImageStyles.js';

const CompositeProductImage = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [inHover, setHover] = useState(false);

  const unlovedPath = <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z">
  </path>;
  const lovedPath = <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>

  if (!props.product) {
    return '';
  }

  return (
    <CompositeProductImageStyles>
      <div className='compositeImage'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {inHover &&
          <>
            <div className='heartContainer'>
              <button className='lovedButton'
                onClick={() => props.setLoved(props.product.id)}>
                <svg  viewBox="0 0 24 24" className={props.product.loved === true ? 'lovedSvg' : 'unlovedSvg'}>
                  {props.product.loved === true ? lovedPath : unlovedPath}
                </svg>
              </button>
            </div>
            <button
              className='quickLookButton'
              onClick={() => setIsOpen(true)}
            >
            QUICK LOOK
            </button>
          </>
        }
        <ProductPhoto
          size='preview'
          product={props.product}
        />
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