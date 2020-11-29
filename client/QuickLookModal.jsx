import React from 'react';
import ReactDOM from 'react-dom';
import ProductPhoto from './ProductPhoto.jsx';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '16px 16px 32px',
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'flex-start',
  zIndex: 1000,
  'max-width': '1012px',
  height: 'auto',
  padding: '24px 16px'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .15)',
  zIndex: 1000
}

const QuickLookModal = (props) => {

  if (!props.open) return null;

  var colorBoxes = [];

  for (var i = 0; i < props.product.colors.length; i++) {
    colorBoxes.push(
      <span>COLOR BOX    </span>
    );
  }

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
        <div className='modal modalContainer' style={MODAL_STYLES} >
          <button
            className='modalX'
            onClick={props.onClose}>
            X
          </button>
          <div className='modal photoAndDetailsModal'>
            <ProductPhoto
            product={props.product}
            size='modal'
            className='modalPhotoBox'
            />
            <div className='modal'>
              <div className='brandName'>{props.product.brand}</div>
              <div>{props.product.product_name}</div>
              <div className='detailsSizeAndItem'>SIZE {props.product.sizes[0]}  •  ITEM {props.product.product_id}</div>
              <div>{props.product.short_detail}</div>
              <div className='linkDiv'>
                <a
                  href={'/products/' + props.product.id + ''}
                  className='seeProductDetailsLink'>
                    See product details
                </a>
              </div>
              <div>
                COLOR: {props.product.colors[0].name} - {props.product.colors[0].description}
                <div>
                  color boxes container
                  each color box (image) with hover animation and selection box
                  {colorBoxes}
                </div>
              </div>
            </div>
          </div>
          <div className='modal footerModal'>footer
            <div> stars reviews | heart and # of loves </div>
            <div>price</div>
            <div>
              dropdown 1-10
            </div>
            <div>add to basket button</div>
            <div>add to loves button with hover animation</div>
          </div>
        </div>
    </>,
    document.getElementById('portal')
  );

};

export default QuickLookModal;