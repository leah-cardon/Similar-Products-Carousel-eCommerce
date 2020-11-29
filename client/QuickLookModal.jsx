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
  zIndex: 1001,
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

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={props.onClose} />
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
          <div className='modal footerModal'>
            <div>
              <div className="star-ratings-css">
                <div className="star-ratings-css-top" style={{width: (props.product.average_rating / 5 * 100)+ '%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              </div>
              <span className="boldText">
                {props.product.review_count} reviews
              </span>
              <span className='dividerText'> | </span>
              <span>
                <svg aria-hidden="true" viewBox="0 0 24 24" class="modalHeart"><path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path></svg>
              </span>
              <span className="boldText">
                {props.product.loves} loves
              </span>
            </div>
            <div className='modal modalBuy'>
              <div className='price modal modalPrice'>{formatter.format(props.product.price)}</div>
              <div className='modal modalBuyButtons'>
                <div>
                  dropdown 1-10
                </div>
                <div>
                  <div>add to basket button</div>
                  <div>add to loves button with hover animation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>,
    document.getElementById('portal')
  );

};

export default QuickLookModal;