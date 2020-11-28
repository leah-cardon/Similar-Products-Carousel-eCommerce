import React from 'react';
import ReactDOM from 'react-dom';
import ProductPhoto from './ProductPhoto.jsx';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  flex: '1 1 0%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '16px 16px 32px',
  display: 'block',
  zIndex: 1000
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
      <div style={MODAL_STYLES} >
        <div>product details
          <ProductPhoto product={props.product} size='modal' />
          <div>info/colors
            <div>{props.product.brand}</div>
            <div>{props.product.product_name}</div>
            <button onClick={props.onClose} >-----CLOSE MODAL-----</button>
            <div>SIZE {props.product.sizes[0]}  •  ITEM {props.product.product_id}</div>
            <div>{props.product.short_detail}</div>
            <div>
              <a href={'/products/' + props.product.id + ''}>See product details</a>
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
        <div>footer
          <div> stars reviews | heart and # of loves </div>
          <div>price</div>
          <div>
            dropdown 1-10
          </div>
          <div>add to basket button</div>
          <div>add to loves button with hover animation</div>
          {props.product.id}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );

};

export default QuickLookModal;