import React, { useState } from 'react';
import NewBanner from './NewBanner.jsx';
import ProductPhoto from './ProductPhoto.jsx';
import QuickLookButton from './QuickLookButton.jsx';
import QuickLookModal from './QuickLookModal.jsx';

const CompositeProductImage = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='compositeImage'>
      <NewBanner new={props.product.new} />
      <ProductPhoto image={props.product.image_url} />
      <button className='quickLook' onClick={() => setIsOpen(true)} >QUICK LOOK</button>
      <QuickLookModal product={props.product} open={isOpen} onClose={() => setIsOpen(false)}></QuickLookModal>
    </div>
  );

};

export default CompositeProductImage;